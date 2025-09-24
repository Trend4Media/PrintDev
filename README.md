# PrintDev

Eine moderne React-Anwendung mit Vite, TypeScript und Tailwind CSS.

## 🚀 GitHub Pages Deployment

Diese Anwendung ist automatisch für GitHub Pages konfiguriert und wird unter folgender URL bereitgestellt:
**https://trend4media.github.io/PrintDev/**

### Automatisches Deployment

Das Deployment erfolgt automatisch über GitHub Actions bei jedem Push auf den `main` Branch:
- ✅ Vite Build-Konfiguration optimiert für GitHub Pages
- ✅ Automatischer GitHub Actions Workflow 
- ✅ Jekyll deaktiviert (`.nojekyll` Datei)

## 🛠️ Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Build-Vorschau
npm run preview
```

## 📦 Technologie-Stack

- **React 18** - UI Framework
- **TypeScript** - Typisierte JavaScript-Superset
- **Vite** - Build Tool und Development Server
- **Tailwind CSS** - Utility-first CSS Framework
- **ShadCN/UI** - UI Component Library
- **React Router** - Client-side Routing
- **React Hook Form** - Formular-Management
- **Zod** - Schema-Validierung

## 🔧 GitHub Pages Konfiguration

Die Anwendung ist bereits vollständig für GitHub Pages konfiguriert:

1. **Vite-Konfiguration** (`vite.config.ts`):
   - Base path auf `/PrintDev/` gesetzt
   - Optimierte Build-Einstellungen

2. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
   - Automatisches Build und Deployment
   - Node.js 18 Setup
   - Artifact Upload und Pages Deployment

3. **Jekyll deaktiviert** (`.nojekyll`):
   - Verhindert Jekyll-Verarbeitung
   - Ermöglicht korrekte Asset-Verarbeitung

## 📋 GitHub Pages Setup-Anleitung

Folgen Sie diesen Schritten, um GitHub Pages zu aktivieren:

1. **Gehen Sie zu den Repository-Einstellungen**
2. **Navigieren Sie zu "Pages"**
3. **Wählen Sie unter "Source": "GitHub Actions"**
4. **Speichern Sie die Einstellungen**

Nach dem nächsten Push auf `main` wird die Website automatisch unter `https://trend4media.github.io/PrintDev/` verfügbar sein.

---

*Erstellt mit Lovable.dev - [Projekt-Link](https://lovable.dev/projects/30694bfa-ece5-4727-be01-26b6e233f806)*