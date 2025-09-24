import { useState, useEffect } from 'react';

export interface AnalyticsData {
  timestamp: number;
  page: string;
  userAgent: string;
  deviceType: 'mobile' | 'tablet' | 'desktop';
  browser: string;
  os: string;
  screenResolution: string;
  referrer: string;
  language: string;
  country?: string;
  sessionId: string;
}

export interface AnalyticsStats {
  totalVisits: number;
  uniqueVisitors: number;
  todayVisits: number;
  pageViews: { [key: string]: number };
  deviceStats: { [key: string]: number };
  browserStats: { [key: string]: number };
  osStats: { [key: string]: number };
  referrerStats: { [key: string]: number };
  hourlyStats: { [key: string]: number };
  dailyStats: { [key: string]: number };
  recentVisits: AnalyticsData[];
}

const STORAGE_KEY = 'printdev-analytics';
const SESSION_KEY = 'printdev-session';

// Generate or get session ID
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
};

// Detect device type
const getDeviceType = (userAgent: string): 'mobile' | 'tablet' | 'desktop' => {
  if (/tablet|ipad|playbook|silk/i.test(userAgent)) return 'tablet';
  if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(userAgent)) return 'mobile';
  return 'desktop';
};

// Detect browser
const getBrowser = (userAgent: string): string => {
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Safari')) return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  if (userAgent.includes('Opera')) return 'Opera';
  return 'Other';
};

// Detect OS
const getOS = (userAgent: string): string => {
  if (userAgent.includes('Windows')) return 'Windows';
  if (userAgent.includes('Mac')) return 'macOS';
  if (userAgent.includes('X11')) return 'Linux';
  if (userAgent.includes('Android')) return 'Android';
  if (userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
  return 'Other';
};

export const useAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);

  // Load analytics data from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setAnalyticsData(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading analytics data:', error);
      }
    }
  }, []);

  // Track page visit
  const trackPageVisit = (page: string) => {
    const userAgent = navigator.userAgent;
    const deviceType = getDeviceType(userAgent);
    const browser = getBrowser(userAgent);
    const os = getOS(userAgent);
    const screenResolution = `${screen.width}x${screen.height}`;
    const referrer = document.referrer || 'Direct';
    const language = navigator.language;
    const sessionId = getSessionId();

    const visitData: AnalyticsData = {
      timestamp: Date.now(),
      page,
      userAgent,
      deviceType,
      browser,
      os,
      screenResolution,
      referrer,
      language,
      sessionId
    };

    setAnalyticsData(prev => {
      const newData = [...prev, visitData];
      // Keep only last 10000 entries to prevent storage overflow
      const limitedData = newData.slice(-10000);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedData));
      return limitedData;
    });
  };

  // Calculate statistics
  const getStats = (): AnalyticsStats => {
    const now = Date.now();
    const today = new Date().toDateString();
    const uniqueSessions = new Set(analyticsData.map(d => d.sessionId));

    // Page views
    const pageViews: { [key: string]: number } = {};
    analyticsData.forEach(data => {
      pageViews[data.page] = (pageViews[data.page] || 0) + 1;
    });

    // Device stats
    const deviceStats: { [key: string]: number } = {};
    analyticsData.forEach(data => {
      deviceStats[data.deviceType] = (deviceStats[data.deviceType] || 0) + 1;
    });

    // Browser stats
    const browserStats: { [key: string]: number } = {};
    analyticsData.forEach(data => {
      browserStats[data.browser] = (browserStats[data.browser] || 0) + 1;
    });

    // OS stats
    const osStats: { [key: string]: number } = {};
    analyticsData.forEach(data => {
      osStats[data.os] = (osStats[data.os] || 0) + 1;
    });

    // Referrer stats
    const referrerStats: { [key: string]: number } = {};
    analyticsData.forEach(data => {
      const ref = data.referrer === '' ? 'Direct' : data.referrer;
      referrerStats[ref] = (referrerStats[ref] || 0) + 1;
    });

    // Hourly stats (last 24 hours)
    const hourlyStats: { [key: string]: number } = {};
    const last24h = now - (24 * 60 * 60 * 1000);
    analyticsData
      .filter(data => data.timestamp >= last24h)
      .forEach(data => {
        const hour = new Date(data.timestamp).getHours();
        hourlyStats[hour] = (hourlyStats[hour] || 0) + 1;
      });

    // Daily stats (last 30 days)
    const dailyStats: { [key: string]: number } = {};
    const last30Days = now - (30 * 24 * 60 * 60 * 1000);
    analyticsData
      .filter(data => data.timestamp >= last30Days)
      .forEach(data => {
        const day = new Date(data.timestamp).toISOString().split('T')[0];
        dailyStats[day] = (dailyStats[day] || 0) + 1;
      });

    // Today's visits
    const todayVisits = analyticsData.filter(data => 
      new Date(data.timestamp).toDateString() === today
    ).length;

    return {
      totalVisits: analyticsData.length,
      uniqueVisitors: uniqueSessions.size,
      todayVisits,
      pageViews,
      deviceStats,
      browserStats,
      osStats,
      referrerStats,
      hourlyStats,
      dailyStats,
      recentVisits: analyticsData.slice(-50).reverse() // Last 50 visits
    };
  };

  // Clear analytics data
  const clearAnalytics = () => {
    setAnalyticsData([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    trackPageVisit,
    getStats,
    clearAnalytics,
    analyticsData
  };
};