import { useState } from "react";
import { useAdmin } from "@/contexts/AdminContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";
import { 
  Lock, 
  Settings, 
  Eye, 
  EyeOff, 
  Save, 
  RotateCcw, 
  Home,
  FileText,
  Users,
  Phone,
  BarChart3
} from "lucide-react";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAdmin();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setError("");
    } else {
      setError("Falsches Passwort");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <Lock className="mx-auto mb-4 text-gray-600" size={48} />
          <h1 className="text-2xl font-bold mb-2">PrintDev Admin</h1>
          <p className="text-gray-600">Anmelden um die Website zu bearbeiten</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="password">Admin-Passwort</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Passwort eingeben"
              required
            />
          </div>
          
          {error && (
            <div className="text-red-500 text-sm text-center">
              {error}
            </div>
          )}
          
          <Button type="submit" className="w-full">
            Anmelden
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Standard-Passwort: <code className="bg-gray-100 px-2 py-1 rounded">printdev2024</code></p>
        </div>
      </Card>
    </div>
  );
};

const AdminDashboard = () => {
  const { 
    isAdminMode, 
    contentData, 
    toggleAdminMode, 
    updateContent, 
    saveContent, 
    resetContent, 
    logout 
  } = useAdmin();

  const [activeTab, setActiveTab] = useState("analytics");

  const tabs = [
    { id: "analytics", label: "Statistiken", icon: BarChart3 },
    { id: "hero", label: "Hero Bereich", icon: Home },
    { id: "services", label: "Services", icon: Settings },
    { id: "dtf", label: "DTF Printing", icon: FileText },
    { id: "contact", label: "Kontakt", icon: Phone },
    { id: "company", label: "Unternehmen", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Settings className="text-blue-600" size={24} />
              <h1 className="text-xl font-bold">PrintDev Admin</h1>
              <Badge variant={isAdminMode ? "default" : "secondary"}>
                {isAdminMode ? "Bearbeiten AN" : "Bearbeiten AUS"}
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={toggleAdminMode}>
                {isAdminMode ? <EyeOff size={16} /> : <Eye size={16} />}
                {isAdminMode ? "Vorschau" : "Bearbeiten"}
              </Button>
              <Button variant="default" size="sm" onClick={saveContent}>
                <Save size={16} className="mr-2" />
                Speichern
              </Button>
              <Button variant="outline" size="sm" onClick={resetContent}>
                <RotateCcw size={16} className="mr-2" />
                Zurücksetzen
              </Button>
              <Button variant="ghost" size="sm" onClick={logout}>
                Abmelden
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-4">
              <h2 className="font-bold mb-4">Content Bereiche</h2>
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? "bg-blue-100 text-blue-700"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <Icon size={18} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </Card>
          </div>

          {/* Content Editor */}
          <div className="lg:col-span-3">
            {activeTab === "analytics" && <AnalyticsDashboard />}
            
            {activeTab !== "analytics" && (
              <Card className="p-6">
                {activeTab === "hero" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold mb-4">Hero Bereich bearbeiten</h2>
                  
                  <div>
                    <Label htmlFor="hero-title">Haupttitel</Label>
                    <Input
                      id="hero-title"
                      value={contentData.hero.title}
                      onChange={(e) => updateContent("hero", "title", e.target.value)}
                      placeholder="Haupttitel eingeben"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="hero-subtitle">Untertitel</Label>
                    <Textarea
                      id="hero-subtitle"
                      value={contentData.hero.subtitle}
                      onChange={(e) => updateContent("hero", "subtitle", e.target.value)}
                      placeholder="Untertitel eingeben"
                      rows={3}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="hero-description">Beschreibung</Label>
                    <Input
                      id="hero-description"
                      value={contentData.hero.description}
                      onChange={(e) => updateContent("hero", "description", e.target.value)}
                      placeholder="Kurze Beschreibung"
                    />
                  </div>
                </div>
              )}

              {activeTab === "services" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold mb-4">Services bearbeiten</h2>
                  
                  <div>
                    <Label htmlFor="services-title">Services Titel</Label>
                    <Input
                      id="services-title"
                      value={contentData.services.title}
                      onChange={(e) => updateContent("services", "title", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="services-description">Services Beschreibung</Label>
                    <Textarea
                      id="services-description"
                      value={contentData.services.description}
                      onChange={(e) => updateContent("services", "description", e.target.value)}
                      rows={3}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-3">Produktberatung</h3>
                      <div className="space-y-3">
                        <div>
                          <Label>Titel</Label>
                          <Input
                            value={contentData.services.produktberatung.title}
                            onChange={(e) => updateContent("services", "produktberatung.title", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label>Beschreibung</Label>
                          <Textarea
                            value={contentData.services.produktberatung.description}
                            onChange={(e) => updateContent("services", "produktberatung.description", e.target.value)}
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold mb-3">Skalierbarkeit</h3>
                      <div className="space-y-3">
                        <div>
                          <Label>Titel</Label>
                          <Input
                            value={contentData.services.skalierbarkeit.title}
                            onChange={(e) => updateContent("services", "skalierbarkeit.title", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label>Beschreibung</Label>
                          <Textarea
                            value={contentData.services.skalierbarkeit.description}
                            onChange={(e) => updateContent("services", "skalierbarkeit.description", e.target.value)}
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "dtf" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold mb-4">DTF Printing bearbeiten</h2>
                  
                  <div>
                    <Label>DTF Titel</Label>
                    <Input
                      value={contentData.dtf.title}
                      onChange={(e) => updateContent("dtf", "title", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label>DTF Beschreibung</Label>
                    <Textarea
                      value={contentData.dtf.description}
                      onChange={(e) => updateContent("dtf", "description", e.target.value)}
                      rows={4}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold mb-3">Freie Größe</h3>
                      <div className="space-y-3">
                        <div>
                          <Label>Titel</Label>
                          <Input
                            value={contentData.dtf.freiGroesse.title}
                            onChange={(e) => updateContent("dtf", "freiGroesse.title", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label>Features (eine pro Zeile)</Label>
                          <Textarea
                            value={contentData.dtf.freiGroesse.features.join('\n')}
                            onChange={(e) => updateContent("dtf", "freiGroesse.features", e.target.value.split('\n'))}
                            rows={4}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold mb-3">Express Service</h3>
                      <div className="space-y-3">
                        <div>
                          <Label>Titel</Label>
                          <Input
                            value={contentData.dtf.express.title}
                            onChange={(e) => updateContent("dtf", "express.title", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label>Features (eine pro Zeile)</Label>
                          <Textarea
                            value={contentData.dtf.express.features.join('\n')}
                            onChange={(e) => updateContent("dtf", "express.features", e.target.value.split('\n'))}
                            rows={4}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "contact" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold mb-4">Kontakt bearbeiten</h2>
                  
                  <div>
                    <Label>Kontakt Titel</Label>
                    <Input
                      value={contentData.contact.title}
                      onChange={(e) => updateContent("contact", "title", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label>Kontakt Beschreibung</Label>
                    <Textarea
                      value={contentData.contact.description}
                      onChange={(e) => updateContent("contact", "description", e.target.value)}
                      rows={3}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label>Telefon</Label>
                      <Input
                        value={contentData.contact.phone}
                        onChange={(e) => updateContent("contact", "phone", e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label>E-Mail</Label>
                      <Input
                        value={contentData.contact.email}
                        onChange={(e) => updateContent("contact", "email", e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Straße</Label>
                    <Input
                      value={contentData.contact.address.street}
                      onChange={(e) => updateContent("contact", "address.street", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label>Stadt</Label>
                    <Input
                      value={contentData.contact.address.city}
                      onChange={(e) => updateContent("contact", "address.city", e.target.value)}
                    />
                  </div>
                </div>
              )}

              {activeTab === "company" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold mb-4">Unternehmen bearbeiten</h2>
                  
                  <div>
                    <Label>Firmenname</Label>
                    <Input
                      value={contentData.company.name}
                      onChange={(e) => updateContent("company", "name", e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label>Tagline</Label>
                    <Textarea
                      value={contentData.company.tagline}
                      onChange={(e) => updateContent("company", "tagline", e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
              )}
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Admin = () => {
  const { isAuthenticated } = useAdmin();

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return <AdminDashboard />;
};

export default Admin;