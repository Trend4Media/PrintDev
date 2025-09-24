# Logo Upload Anleitung

## Ihr Logo in die Website einbauen

### Vorbereitung abgeschlossen ✅
- Logo-Integration im Header vorbereitet
- Fallback-System implementiert 
- Meta-Tags für Social Media aktualisiert

### So laden Sie Ihr Logo hoch:

#### Option 1: Via GitHub Web Interface (Empfohlen)
1. Gehen Sie zu: https://github.com/Trend4Media/PrintDev
2. Navigieren Sie zum `public/` Ordner
3. Klicken Sie auf "Add file" → "Upload files" 
4. Laden Sie Ihre Logo-Datei hoch
5. **Wichtig: Benennen Sie die Datei um zu `logo.jpg`**
6. Committen Sie die Änderung

#### Option 2: Via Git (Lokal)
```bash
# Logo-Datei in den public Ordner kopieren
cp "C:/Users/TimOs/Desktop/PRINTDEF/LOGO Entwurf.jpg" public/logo.jpg

# Änderungen committen
git add public/logo.jpg
git commit -m "Add company logo"
git push origin main
```

### Was bereits vorbereitet wurde:

✅ **Header-Logo**: Zeigt automatisch `/logo.jpg`
✅ **Fallback-System**: Falls das neue Logo nicht lädt, wird das alte angezeigt  
✅ **Responsive Design**: Logo passt sich automatisch an verschiedene Bildschirmgrößen an
✅ **Social Media**: Open Graph und Twitter Cards nutzen das neue Logo
✅ **Optimierte CSS-Klassen**: `object-contain` sorgt für korrekte Darstellung

### Unterstützte Formate:
- JPG/JPEG ✅
- PNG ✅  
- SVG ✅
- WebP ✅

### Empfohlene Abmessungen:
- **Höhe**: 32-64px (automatische Skalierung auf 32px im Header)
- **Breite**: Beliebig (wird automatisch proportional skaliert)
- **Format**: PNG mit transparentem Hintergrund ideal für beste Darstellung

### Nach dem Upload:
Das GitHub Actions Workflow wird automatisch ausgelöst und Ihre Website mit dem neuen Logo deployen (~3 Minuten).

**Live URL**: https://trend4media.github.io/PrintDev/

---

*Wenn Sie Hilfe beim Upload benötigen, kann ich Sie durch den Prozess führen!*