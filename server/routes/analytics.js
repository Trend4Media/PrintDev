const express = require('express');
const { Pool } = require('pg');
const router = express.Router();

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Utility function to detect device type
const getDeviceType = (userAgent) => {
  if (/tablet|ipad|playbook|silk/i.test(userAgent)) return 'tablet';
  if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(userAgent)) return 'mobile';
  return 'desktop';
};

// Utility function to detect browser
const getBrowser = (userAgent) => {
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Safari')) return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  if (userAgent.includes('Opera')) return 'Opera';
  return 'Other';
};

// Utility function to detect OS
const getOS = (userAgent) => {
  if (userAgent.includes('Windows')) return 'Windows';
  if (userAgent.includes('Mac')) return 'macOS';
  if (userAgent.includes('X11')) return 'Linux';
  if (userAgent.includes('Android')) return 'Android';
  if (userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
  return 'Other';
};

// Track page visit
router.post('/track', async (req, res) => {
  try {
    const {
      sessionId,
      pagePath,
      referrer,
      language,
      screenResolution
    } = req.body;

    const userAgent = req.headers['user-agent'] || '';
    const deviceType = getDeviceType(userAgent);
    const browser = getBrowser(userAgent);
    const os = getOS(userAgent);
    const ipAddress = req.ip || req.connection.remoteAddress;

    const query = `
      INSERT INTO analytics (
        session_id, page_path, user_agent, device_type, browser, 
        operating_system, screen_resolution, referrer, language, ip_address
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING id
    `;

    const values = [
      sessionId,
      pagePath,
      userAgent,
      deviceType,
      browser,
      os,
      screenResolution,
      referrer || 'Direct',
      language,
      ipAddress
    ];

    const result = await pool.query(query, values);
    
    res.json({ 
      success: true, 
      id: result.rows[0].id,
      message: 'Visit tracked successfully'
    });
  } catch (error) {
    console.error('Error tracking visit:', error);
    res.status(500).json({ error: 'Failed to track visit' });
  }
});

// Get analytics statistics
router.get('/stats', async (req, res) => {
  try {
    const queries = {
      // Total visits
      totalVisits: 'SELECT COUNT(*) as count FROM analytics',
      
      // Unique visitors (by session_id)
      uniqueVisitors: 'SELECT COUNT(DISTINCT session_id) as count FROM analytics',
      
      // Today's visits
      todayVisits: `
        SELECT COUNT(*) as count FROM analytics 
        WHERE DATE(timestamp AT TIME ZONE 'UTC') = CURRENT_DATE
      `,
      
      // Page views
      pageViews: `
        SELECT page_path, COUNT(*) as count 
        FROM analytics 
        GROUP BY page_path 
        ORDER BY count DESC
      `,
      
      // Device stats
      deviceStats: `
        SELECT device_type, COUNT(*) as count 
        FROM analytics 
        GROUP BY device_type 
        ORDER BY count DESC
      `,
      
      // Browser stats
      browserStats: `
        SELECT browser, COUNT(*) as count 
        FROM analytics 
        GROUP BY browser 
        ORDER BY count DESC
      `,
      
      // OS stats
      osStats: `
        SELECT operating_system, COUNT(*) as count 
        FROM analytics 
        GROUP BY operating_system 
        ORDER BY count DESC
      `,
      
      // Referrer stats
      referrerStats: `
        SELECT referrer, COUNT(*) as count 
        FROM analytics 
        GROUP BY referrer 
        ORDER BY count DESC 
        LIMIT 10
      `,
      
      // Hourly stats (last 24 hours)
      hourlyStats: `
        SELECT 
          EXTRACT(HOUR FROM timestamp) as hour,
          COUNT(*) as count
        FROM analytics 
        WHERE timestamp >= NOW() - INTERVAL '24 hours'
        GROUP BY EXTRACT(HOUR FROM timestamp)
        ORDER BY hour
      `,
      
      // Daily stats (last 30 days)
      dailyStats: `
        SELECT 
          DATE(timestamp) as date,
          COUNT(*) as count
        FROM analytics 
        WHERE timestamp >= NOW() - INTERVAL '30 days'
        GROUP BY DATE(timestamp)
        ORDER BY date DESC
      `,
      
      // Recent visits
      recentVisits: `
        SELECT 
          page_path, device_type, browser, operating_system, 
          screen_resolution, timestamp, referrer
        FROM analytics 
        ORDER BY timestamp DESC 
        LIMIT 50
      `
    };

    const results = {};
    
    // Execute all queries
    for (const [key, query] of Object.entries(queries)) {
      const result = await pool.query(query);
      
      if (key === 'totalVisits' || key === 'uniqueVisitors' || key === 'todayVisits') {
        results[key] = parseInt(result.rows[0].count);
      } else if (key === 'recentVisits') {
        results[key] = result.rows;
      } else {
        // Convert array results to objects
        results[key] = result.rows.reduce((acc, row) => {
          const keyField = Object.keys(row).find(k => k !== 'count');
          acc[row[keyField]] = parseInt(row.count);
          return acc;
        }, {});
      }
    }

    res.json(results);
  } catch (error) {
    console.error('Error getting stats:', error);
    res.status(500).json({ error: 'Failed to get statistics' });
  }
});

// Clear analytics data (admin only)
router.delete('/clear', async (req, res) => {
  try {
    // In production, add proper authentication check here
    const result = await pool.query('DELETE FROM analytics');
    res.json({ 
      success: true, 
      message: `Deleted ${result.rowCount} analytics records`
    });
  } catch (error) {
    console.error('Error clearing analytics:', error);
    res.status(500).json({ error: 'Failed to clear analytics data' });
  }
});

// Get analytics summary for dashboard
router.get('/summary', async (req, res) => {
  try {
    const query = `
      SELECT 
        COUNT(*) as total_visits,
        COUNT(DISTINCT session_id) as unique_visitors,
        COUNT(CASE WHEN DATE(timestamp) = CURRENT_DATE THEN 1 END) as today_visits,
        COUNT(CASE WHEN timestamp >= NOW() - INTERVAL '7 days' THEN 1 END) as week_visits,
        COUNT(CASE WHEN timestamp >= NOW() - INTERVAL '30 days' THEN 1 END) as month_visits
      FROM analytics
    `;
    
    const result = await pool.query(query);
    const summary = result.rows[0];
    
    // Convert string numbers to integers
    Object.keys(summary).forEach(key => {
      summary[key] = parseInt(summary[key]);
    });
    
    res.json(summary);
  } catch (error) {
    console.error('Error getting summary:', error);
    res.status(500).json({ error: 'Failed to get analytics summary' });
  }
});

module.exports = router;