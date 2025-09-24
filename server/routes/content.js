const express = require('express');
const { Pool } = require('pg');
const router = express.Router();

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Get all content
router.get('/', async (req, res) => {
  try {
    const query = 'SELECT section, field_name, content_value FROM content ORDER BY section, field_name';
    const result = await pool.query(query);
    
    // Convert flat array to nested object structure
    const content = {};
    result.rows.forEach(row => {
      if (!content[row.section]) {
        content[row.section] = {};
      }
      
      // Handle nested fields (e.g., "address.street")
      if (row.field_name.includes('.')) {
        const [parentField, childField] = row.field_name.split('.');
        if (!content[row.section][parentField]) {
          content[row.section][parentField] = {};
        }
        content[row.section][parentField][childField] = row.content_value;
      } else {
        content[row.section][row.field_name] = row.content_value;
      }
    });
    
    res.json(content);
  } catch (error) {
    console.error('Error getting content:', error);
    res.status(500).json({ error: 'Failed to get content' });
  }
});

// Update content
router.put('/', async (req, res) => {
  try {
    const { section, field, value, updatedBy = 'admin' } = req.body;
    
    if (!section || !field || value === undefined) {
      return res.status(400).json({ error: 'Missing required fields: section, field, value' });
    }

    const query = `
      INSERT INTO content (section, field_name, content_value, updated_by)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (section, field_name)
      DO UPDATE SET 
        content_value = EXCLUDED.content_value,
        updated_by = EXCLUDED.updated_by,
        updated_at = NOW()
      RETURNING *
    `;

    const values = [section, field, JSON.stringify(value), updatedBy];
    const result = await pool.query(query, values);
    
    res.json({ 
      success: true, 
      data: result.rows[0],
      message: 'Content updated successfully'
    });
  } catch (error) {
    console.error('Error updating content:', error);
    res.status(500).json({ error: 'Failed to update content' });
  }
});

// Save contact form submission
router.post('/contact-submission', async (req, res) => {
  try {
    const {
      companyName,
      contactName,
      email,
      phone,
      serviceType,
      message,
      quantityEstimate,
      deliveryTimeframe
    } = req.body;

    const userAgent = req.headers['user-agent'] || '';
    const ipAddress = req.ip || req.connection.remoteAddress;

    const query = `
      INSERT INTO contact_submissions (
        company_name, contact_name, email, phone, service_type,
        message, quantity_estimate, delivery_timeframe, ip_address, user_agent
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING id, submitted_at
    `;

    const values = [
      companyName,
      contactName,
      email,
      phone,
      serviceType,
      message,
      quantityEstimate,
      deliveryTimeframe,
      ipAddress,
      userAgent
    ];

    const result = await pool.query(query, values);
    
    res.json({ 
      success: true,
      submissionId: result.rows[0].id,
      submittedAt: result.rows[0].submitted_at,
      message: 'Contact form submitted successfully'
    });
  } catch (error) {
    console.error('Error saving contact submission:', error);
    res.status(500).json({ error: 'Failed to save contact submission' });
  }
});

// Get contact submissions (admin only)
router.get('/submissions', async (req, res) => {
  try {
    const query = `
      SELECT * FROM contact_submissions 
      ORDER BY submitted_at DESC 
      LIMIT 100
    `;
    
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error('Error getting submissions:', error);
    res.status(500).json({ error: 'Failed to get contact submissions' });
  }
});

module.exports = router;