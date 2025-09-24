import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAnalytics } from "@/hooks/useAnalytics";
import { 
  BarChart3, 
  Users, 
  Monitor, 
  Globe, 
  Smartphone, 
  Clock,
  TrendingUp,
  Eye,
  Trash2
} from "lucide-react";
import { useState, useEffect } from "react";

export const AnalyticsDashboard = () => {
  const { getStats, clearAnalytics } = useAnalytics();
  const [stats, setStats] = useState(getStats());
  const [isLoading, setIsLoading] = useState(false);

  // Refresh stats every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(getStats());
    }, 30000);

    return () => clearInterval(interval);
  }, [getStats]);

  const refreshStats = () => {
    setIsLoading(true);
    setTimeout(() => {
      setStats(getStats());
      setIsLoading(false);
    }, 500);
  };

  const handleClearData = () => {
    if (confirm('Möchten Sie alle Statistiken löschen? Diese Aktion kann nicht rückgängig gemacht werden.')) {
      clearAnalytics();
      setStats(getStats());
    }
  };

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('de-DE');
  };

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case 'mobile': return <Smartphone size={16} className="text-blue-500" />;
      case 'tablet': return <Monitor size={16} className="text-green-500" />;
      case 'desktop': return <Monitor size={16} className="text-purple-500" />;
      default: return <Globe size={16} className="text-gray-500" />;
    }
  };

  const getTopEntries = (data: { [key: string]: number }, limit = 5) => {
    return Object.entries(data)
      .sort(([,a], [,b]) => b - a)
      .slice(0, limit);
  };

  const getProgressPercentage = (value: number, total: number) => {
    return total > 0 ? Math.round((value / total) * 100) : 0;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold flex items-center space-x-3">
            <BarChart3 className="text-blue-600" size={28} />
            <span>Website Statistiken</span>
          </h2>
          <p className="text-gray-600 mt-1">Umfassende Analyse Ihrer Website-Besucher</p>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={refreshStats} disabled={isLoading}>
            <TrendingUp size={16} className="mr-2" />
            {isLoading ? 'Lädt...' : 'Aktualisieren'}
          </Button>
          <Button variant="destructive" size="sm" onClick={handleClearData}>
            <Trash2 size={16} className="mr-2" />
            Daten löschen
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Gesamte Besuche</p>
              <p className="text-2xl font-bold text-blue-600">{stats.totalVisits.toLocaleString()}</p>
            </div>
            <Eye className="text-blue-600" size={24} />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Einzigartige Besucher</p>
              <p className="text-2xl font-bold text-green-600">{stats.uniqueVisitors.toLocaleString()}</p>
            </div>
            <Users className="text-green-600" size={24} />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Heute</p>
              <p className="text-2xl font-bold text-orange-600">{stats.todayVisits.toLocaleString()}</p>
            </div>
            <Clock className="text-orange-600" size={24} />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Durchschnitt/Tag</p>
              <p className="text-2xl font-bold text-purple-600">
                {Object.keys(stats.dailyStats).length > 0 
                  ? Math.round(stats.totalVisits / Object.keys(stats.dailyStats).length)
                  : 0
                }
              </p>
            </div>
            <TrendingUp className="text-purple-600" size={24} />
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Page Views */}
        <Card className="p-6">
          <h3 className="font-bold mb-4 flex items-center space-x-2">
            <BarChart3 size={20} />
            <span>Seitenaufrufe</span>
          </h3>
          <div className="space-y-3">
            {getTopEntries(stats.pageViews).map(([page, count]) => (
              <div key={page} className="flex items-center justify-between">
                <div>
                  <span className="font-medium">{page === '/' ? 'Startseite' : page}</span>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${getProgressPercentage(count, stats.totalVisits)}%` }}
                    ></div>
                  </div>
                </div>
                <Badge variant="secondary">{count}</Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Device Types */}
        <Card className="p-6">
          <h3 className="font-bold mb-4 flex items-center space-x-2">
            <Monitor size={20} />
            <span>Endgeräte</span>
          </h3>
          <div className="space-y-3">
            {getTopEntries(stats.deviceStats).map(([device, count]) => (
              <div key={device} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {getDeviceIcon(device)}
                  <span className="font-medium capitalize">{device}</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${getProgressPercentage(count, stats.totalVisits)}%` }}
                    ></div>
                  </div>
                </div>
                <Badge variant="secondary">{count} ({getProgressPercentage(count, stats.totalVisits)}%)</Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Browser Stats */}
        <Card className="p-6">
          <h3 className="font-bold mb-4 flex items-center space-x-2">
            <Globe size={20} />
            <span>Browser</span>
          </h3>
          <div className="space-y-3">
            {getTopEntries(stats.browserStats).map(([browser, count]) => (
              <div key={browser} className="flex items-center justify-between">
                <div>
                  <span className="font-medium">{browser}</span>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${getProgressPercentage(count, stats.totalVisits)}%` }}
                    ></div>
                  </div>
                </div>
                <Badge variant="secondary">{count}</Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Operating Systems */}
        <Card className="p-6">
          <h3 className="font-bold mb-4 flex items-center space-x-2">
            <Monitor size={20} />
            <span>Betriebssysteme</span>
          </h3>
          <div className="space-y-3">
            {getTopEntries(stats.osStats).map(([os, count]) => (
              <div key={os} className="flex items-center justify-between">
                <div>
                  <span className="font-medium">{os}</span>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-red-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${getProgressPercentage(count, stats.totalVisits)}%` }}
                    ></div>
                  </div>
                </div>
                <Badge variant="secondary">{count}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Referrer Sources */}
      <Card className="p-6">
        <h3 className="font-bold mb-4 flex items-center space-x-2">
          <Globe size={20} />
          <span>Herkunft der Besucher</span>
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {getTopEntries(stats.referrerStats, 10).map(([referrer, count]) => (
            <div key={referrer} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">
                  {referrer === 'Direct' ? 'Direkter Zugriff' : referrer}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-teal-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${getProgressPercentage(count, stats.totalVisits)}%` }}
                  ></div>
                </div>
              </div>
              <Badge variant="outline" className="ml-2">{count}</Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Visits */}
      <Card className="p-6">
        <h3 className="font-bold mb-4 flex items-center space-x-2">
          <Clock size={20} />
          <span>Letzte Besuche</span>
        </h3>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {stats.recentVisits.map((visit, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                {getDeviceIcon(visit.deviceType)}
                <div>
                  <p className="font-medium">{visit.page === '/' ? 'Startseite' : visit.page}</p>
                  <p className="text-sm text-gray-600">
                    {visit.browser} auf {visit.os} • {formatTimestamp(visit.timestamp)}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <Badge variant="outline">{visit.deviceType}</Badge>
                <p className="text-xs text-gray-500 mt-1">{visit.screenResolution}</p>
              </div>
            </div>
          ))}
          
          {stats.recentVisits.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Clock size={48} className="mx-auto mb-4 opacity-50" />
              <p>Noch keine Besuche erfasst</p>
            </div>
          )}
        </div>
      </Card>

      {/* Hourly Activity (Last 24h) */}
      <Card className="p-6">
        <h3 className="font-bold mb-4 flex items-center space-x-2">
          <Clock size={20} />
          <span>Aktivität der letzten 24 Stunden</span>
        </h3>
        <div className="grid grid-cols-12 gap-2">
          {Array.from({ length: 24 }, (_, i) => {
            const hour = i;
            const count = stats.hourlyStats[hour] || 0;
            const maxHourly = Math.max(...Object.values(stats.hourlyStats), 1);
            const height = count > 0 ? Math.max((count / maxHourly) * 100, 10) : 5;
            
            return (
              <div key={hour} className="text-center">
                <div 
                  className="bg-blue-500 rounded-t mx-auto mb-2 transition-all duration-500"
                  style={{ height: `${height}px`, width: '20px' }}
                  title={`${hour}:00 - ${count} Besuche`}
                ></div>
                <p className="text-xs text-gray-600">{hour}</p>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Daily Activity (Last 30 days) */}
      <Card className="p-6">
        <h3 className="font-bold mb-4 flex items-center space-x-2">
          <TrendingUp size={20} />
          <span>Tägliche Aktivität (30 Tage)</span>
        </h3>
        <div className="space-y-2">
          {Object.entries(stats.dailyStats)
            .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime())
            .slice(0, 14)
            .map(([date, count]) => {
              const maxDaily = Math.max(...Object.values(stats.dailyStats), 1);
              const percentage = getProgressPercentage(count, maxDaily);
              
              return (
                <div key={date} className="flex items-center justify-between">
                  <span className="font-medium">{new Date(date).toLocaleDateString('de-DE')}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-teal-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <Badge variant="secondary">{count}</Badge>
                  </div>
                </div>
              );
            })}
        </div>
      </Card>
    </div>
  );
};