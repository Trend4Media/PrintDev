# PrintDev - Professional DTF Printing Services

Eine moderne React-Anwendung mit Express.js Backend, PostgreSQL Datenbank und umfassendem Analytics-System.

## 🚂 Railway Deployment

Diese Anwendung ist für Railway optimiert und nutzt:
- **Frontend**: React + Vite + TypeScript + Tailwind CSS
- **Backend**: Express.js API Server
- **Datenbank**: PostgreSQL mit Analytics-Tracking
- **Domain**: Automatische Railway-Domain

### Automatisches Deployment

Das Deployment erfolgt automatisch über Railway bei jedem Push:
- ✅ Full-Stack Anwendung mit Backend
- ✅ PostgreSQL Datenbank inklusive
- ✅ Echte Analytics mit Datenpersistierung
- ✅ Admin-CMS-System mit Datenbank-Backend

## 🛠️ Lokale Entwicklung

### Frontend + Backend zusammen:
```bash
# Dependencies installieren
npm install
cd server && npm install && cd ..

# Development Server starten (Frontend + Backend)
npm run dev & npm run server:dev

# Frontend: http://localhost:5173
# Backend API: http://localhost:3000
```

### Nur Frontend:
```bash
npm run dev
```

### Nur Backend:
```bash
cd server
npm run dev
```

## 📦 Technologie-Stack

### Frontend:
- **React 18** - UI Framework
- **TypeScript** - Typisierte JavaScript-Superset
- **Vite** - Build Tool und Development Server
- **Tailwind CSS** - Utility-first CSS Framework
- **ShadCN/UI** - UI Component Library
- **React Router** - Client-side Routing

### Backend:
- **Express.js** - Web Framework
- **PostgreSQL** - Relationale Datenbank
- **CORS** - Cross-Origin Requests
- **Helmet** - Security Headers
- **Morgan** - Request Logging
- **Rate Limiting** - API Protection

## 🔧 Railway Setup-Anleitung

### 1. Railway Account erstellen
1. Gehen Sie zu [railway.app](https://railway.app)
2. Registrieren Sie sich mit GitHub

### 2. Neues Projekt erstellen
1. **"New Project"** → **"Deploy from GitHub repo"**
2. Repository **Trend4Media/PrintDev** auswählen
3. **PostgreSQL** Datenbank hinzufügen

### 3. Environment Variables setzen
```
NODE_ENV=production
DATABASE_URL=postgresql://... (automatisch von Railway gesetzt)
FRONTEND_URL=${{RAILWAY_PUBLIC_DOMAIN}}
```

### 4. Database Setup
Die Datenbank wird automatisch mit dem Schema in `server/database/init.sql` initialisiert.

## 📊 Admin-Features

### Analytics-Dashboard:
- **URL**: https://your-domain.railway.app/#/admin
- **Passwort**: `printdev2024`

### Features:
- 📊 **Umfassende Analytics** - Besucher, Geräte, Browser, OS
- 📝 **Content Management** - Alle Texte bearbeitbar
- 📱 **Responsive Dashboard** - Mobile-optimiert
- 🔒 **Sichere Authentifizierung** - Passwort-geschützt
- 💾 **Datenbank-Persistierung** - Keine Datenverluste

### Analytics-Tracking:
- Automatisches Tracking aller Seitenaufrufe
- Geräte-Erkennung (Mobile, Tablet, Desktop)
- Browser und Betriebssystem-Analyse
- Traffic-Quellen und Referrer-Tracking
- Echtzeit-Statistiken und historische Daten

## 🌐 URLs nach Deployment

- **Website**: https://your-project.railway.app/
- **Angebot**: https://your-project.railway.app/#/angebot
- **Admin**: https://your-project.railway.app/#/admin
- **API Health**: https://your-project.railway.app/api/health

## 🔐 Security Features

- **Helmet.js** - Security headers
- **Rate Limiting** - API abuse protection
- **CORS** - Cross-origin request security
- **Environment Variables** - Sensitive data protection
- **SQL Injection Protection** - Parametrisierte Queries

---

*Powered by Railway - Full-Stack Deployment Platform*