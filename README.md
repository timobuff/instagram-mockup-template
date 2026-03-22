# Instagram Mockup Template

Schneller Workflow: neues Kundenprojekt in ~10 Minuten deployen.

## Repo-Struktur

```
/
├── index.html       ← nie anfassen
├── config.js        ← hier alles anpassen
├── assets/
│   └── logo.png     ← Kundenlogo ersetzen
└── README.md
```

## Workflow für jeden neuen Kunden

### 1. Repo kopieren
Auf GitHub: **Use this template** → neues Repo mit Kundenname erstellen  
z.B. `mustermann-insta-mockup`

### 2. Einzige Datei anpassen: `config.js`
- Name, Handle, Bio, Website
- Stats (Posts, Followers, Following)
- Farben (`primary`, `cream`, `bg`)
- Highlights (Labels + Icons)
- Grid-Posts (9 Thumbnails)
- Post Cards (3 Detail-Posts mit Caption + Hashtags)

### 3. Logo ersetzen
`assets/logo.png` mit dem Kundenlogo ersetzen.  
PNG mit Transparenz empfohlen, mind. 200×200px.

### 4. Pushen → fertig
```bash
git add .
git commit -m "Kunde Mustermann"
git push
```
Vercel deployt automatisch. Link kopieren → an Kunden schicken.

## Icons verfügbar für Highlights
| Key | Aussehen |
|-----|----------|
| `team` | Personen-Gruppe |
| `check` | Haken/Checkmark |
| `image` | Bild/Foto |
| `tool` | Werkzeug |

## Farb-Variablen
| Variable | Verwendung |
|----------|-----------|
| `primary` | Buttons, Akzente, Punkte |
| `cream` | Text, Icons (auf Dunkel) |
| `bg` | Seitenhintergrund + Phone |
| `bg_card` | Post-Karten Hintergrund |
| `bg_post1` | Erster Post (Brand-Post) |
