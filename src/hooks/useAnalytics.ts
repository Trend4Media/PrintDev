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

const SESSION_KEY = 'printdev-session';
const API_BASE = process.env.NODE_ENV === 'production' 
  ? '' // Same domain in production
  : 'http://localhost:3000'; // Local development

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
  const [analyticsStats, setAnalyticsStats] = useState<AnalyticsStats | null>(null);

  // Track page visit via API
  const trackPageVisit = async (page: string) => {
    try {
      const sessionId = getSessionId();
      const screenResolution = `${screen.width}x${screen.height}`;
      const referrer = document.referrer || 'Direct';
      const language = navigator.language;

      await fetch(`${API_BASE}/api/analytics/track`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          pagePath: page,
          referrer,
          language,
          screenResolution
        })
      });
    } catch (error) {
      console.error('Error tracking page visit:', error);
    }
  };

  // Get statistics from API
  const getStats = async (): Promise<AnalyticsStats> => {
    try {
      const response = await fetch(`${API_BASE}/api/analytics/stats`);
      if (!response.ok) throw new Error('Failed to fetch stats');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching stats:', error);
      // Return empty stats as fallback
      return {
        totalVisits: 0,
        uniqueVisitors: 0,
        todayVisits: 0,
        pageViews: {},
        deviceStats: {},
        browserStats: {},
        osStats: {},
        referrerStats: {},
        hourlyStats: {},
        dailyStats: {},
        recentVisits: []
      };
    }
  };

  // Clear analytics data via API
  const clearAnalytics = async () => {
    try {
      await fetch(`${API_BASE}/api/analytics/clear`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('Error clearing analytics:', error);
    }
  };

  return {
    trackPageVisit,
    getStats,
    clearAnalytics,
    analyticsStats
  };
};