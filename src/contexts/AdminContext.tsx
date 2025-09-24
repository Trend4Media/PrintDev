import React, { createContext, useContext, useState, useEffect } from 'react';

interface ContentData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  services: {
    title: string;
    description: string;
    produktberatung: {
      title: string;
      description: string;
    };
    skalierbarkeit: {
      title: string;
      description: string;
    };
  };
  dtf: {
    title: string;
    description: string;
    freiGroesse: {
      title: string;
      features: string[];
    };
    express: {
      title: string;
      features: string[];
    };
  };
  contact: {
    title: string;
    description: string;
    phone: string;
    email: string;
    address: {
      street: string;
      city: string;
    };
  };
  company: {
    name: string;
    tagline: string;
  };
}

interface AdminContextType {
  isAuthenticated: boolean;
  isAdminMode: boolean;
  contentData: ContentData;
  login: (password: string) => boolean;
  logout: () => void;
  toggleAdminMode: () => void;
  updateContent: (section: string, field: string, value: any) => void;
  saveContent: () => void;
  resetContent: () => void;
}

const defaultContent: ContentData = {
  hero: {
    title: "DTF Druck & Versand Service",
    subtitle: "Professionelle DTF-Drucke in höchster Qualität mit schnellem Versand direkt zu Ihnen.",
    description: "Einfach, zuverlässig und termingerecht."
  },
  services: {
    title: "Unsere Services",
    description: "Professioneller DTF-Druck und umfassende Beratung - qualitativ hochwertig und termingerecht.",
    produktberatung: {
      title: "Produktberatung",
      description: "Langjährige Erfahrung in Gestaltung, Material und Markenaufbau"
    },
    skalierbarkeit: {
      title: "Skalierbarkeit", 
      description: "Flexibel skalierbare DTF-Lösungen für Ihr Wachstum"
    }
  },
  dtf: {
    title: "DTF Drucke in Rekordzeit",
    description: "Mit unserer vierfachen Druckkapazität bieten wir DTF-Drucke in Top-Qualität und extrem schneller Lieferung - perfekt für Textilveredler und Wiederverkäufer.",
    freiGroesse: {
      title: "DTF Transfer Freie Größe",
      features: [
        "Keine Größenbeschränkung",
        "Automatische Preisberechnung", 
        "Perfekt für individuelle Motive",
        "Weich und elastisch"
      ]
    },
    express: {
      title: "DTF Express",
      features: [
        "Lieferung in 24-48h",
        "Für dringende Aufträge",
        "Gleiche Qualität",
        "Prioritätsbehandlung"
      ]
    }
  },
  contact: {
    title: "Kontakt aufnehmen",
    description: "Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot? Wir sind für Sie da!",
    phone: "+49 (0) 123 456 789",
    email: "info@printdev.de",
    address: {
      street: "Musterstraße 123",
      city: "12345 Musterstadt"
    }
  },
  company: {
    name: "PrintDev",
    tagline: "Ihr Partner für professionelle DTF-Drucke und komplette Fulfillment-Lösungen."
  }
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [contentData, setContentData] = useState<ContentData>(defaultContent);

  // Load content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem('printdev-content');
    if (savedContent) {
      try {
        setContentData(JSON.parse(savedContent));
      } catch (error) {
        console.error('Error loading saved content:', error);
      }
    }

    // Check if admin is logged in
    const adminSession = localStorage.getItem('printdev-admin-session');
    if (adminSession === 'authenticated') {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (password: string): boolean => {
    // Simple password check (in production, use proper authentication)
    if (password === 'printdev2024') {
      setIsAuthenticated(true);
      localStorage.setItem('printdev-admin-session', 'authenticated');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsAdminMode(false);
    localStorage.removeItem('printdev-admin-session');
  };

  const toggleAdminMode = () => {
    setIsAdminMode(!isAdminMode);
  };

  const updateContent = (section: string, field: string, value: any) => {
    setContentData(prev => {
      const newData = { ...prev };
      const sectionData = newData[section as keyof ContentData] as any;
      
      if (field.includes('.')) {
        const [parentField, childField] = field.split('.');
        sectionData[parentField][childField] = value;
      } else {
        sectionData[field] = value;
      }
      
      return newData;
    });
  };

  const saveContent = () => {
    localStorage.setItem('printdev-content', JSON.stringify(contentData));
    alert('Content gespeichert!');
  };

  const resetContent = () => {
    setContentData(defaultContent);
    localStorage.removeItem('printdev-content');
    alert('Content zurückgesetzt!');
  };

  return (
    <AdminContext.Provider value={{
      isAuthenticated,
      isAdminMode,
      contentData,
      login,
      logout,
      toggleAdminMode,
      updateContent,
      saveContent,
      resetContent
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContext;