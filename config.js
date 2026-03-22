const CLIENT = {

  // ─── PROFIL ───────────────────────────────────────────────
  name:      "Rechsteiner Holzbauarbeiten GmbH",
  handle:    "rechsteiner_hba",
  bio_line1: "Zimmerei & Holzbau Ostschweiz 🪵",
  bio_line2: "Präzision und Leidenschaft seit 1987",
  bio_line3: "Herisau, Appenzell Ausserrhoden",
  website:   "rechsteiner-holz.ch",
  stats: {
    posts:     "24",
    followers: "380",
    following: "80"
  },

  // ─── LOGO ─────────────────────────────────────────────────
  // Datei in /assets/ ablegen und Pfad hier anpassen
  logo: "assets/logo.png",

  // ─── FARBEN ───────────────────────────────────────────────
  colors: {
    primary:    "#810E0E",   // Markenfarbe (Buttons, Akzente)
    cream:      "#F5F0E8",   // Text & helle Elemente
    bg:         "#0F0F0F",   // Hintergrund (Dark Mode)
    bg_card:    "#1a1a1a",   // Karten-Hintergrund
    bg_post1:   "#1a1414",   // Post 1 Hintergrund (leicht rötlich-dunkel)
  },

  // ─── HIGHLIGHTS ───────────────────────────────────────────
  highlights: [
    { label: "Team",       icon: "team" },
    { label: "Resultate",  icon: "check" },
    { label: "Referenzen", icon: "image" },
    { label: "Leistungen", icon: "tool" },
  ],

  // ─── GRID POSTS (9 Thumbnails) ────────────────────────────
  grid: [
    { type: "brand",  label: "Holzbau mit Leidenschaft" },
    { type: "dark",   label: "UNSERE LEISTUNGEN" },
    { type: "red",    label: "Was unsere Kunden sagen" },
    { type: "photo",  label: "Fassade Herisau",      gradient: "linear-gradient(135deg, #d4a762, #8b6914)" },
    { type: "photo",  label: "Dachstuhl St. Gallen",  gradient: "linear-gradient(135deg, #c9a96e, #6d4c1a)" },
    { type: "photo",  label: "Aufrichten Rorschach",  gradient: "linear-gradient(to bottom, #87CEEB 30%, #d4a762 30%)" },
    { type: "photo",  label: "Innenausbau Appenzell", gradient: "linear-gradient(135deg, #a67c52, #4a3520)" },
    { type: "photo",  label: "Renovation Gossau",     gradient: "linear-gradient(135deg, #b8945f, #5a3e1b)" },
    { type: "photo",  label: "Elementbau Herisau",    gradient: "linear-gradient(to bottom, #6ba3d6 40%, #c4a265 40%)" },
  ],

  // ─── POST CARDS (Detail-Ansicht rechts) ───────────────────
  post_cards: [
    {
      label:    "Post 1 — Vorstellung",
      location: "Herisau, Appenzell Ausserrhoden",
      type:     "brand",
      heading:  "Holzbau mit Präzision<br>und Leidenschaft",
      subtext:  "Familienbetrieb seit 1987<br>Zimmerei & Holzbau in der Ostschweiz",
      tagline:  "@rechsteiner_hba",
      caption:  "Wer steckt hinter Rechsteiner Holzbauarbeiten? 🪵 Gegründet von Heiri Rechsteiner, weitergeführt mit Herz von Fabian — seit 1987 bauen wir in der Ostschweiz mit Holz, Präzision und Leidenschaft.<br><br>📍 Von Herisau aus für die ganze Ostschweiz.<br><br>👉 Link in Bio für Ihre unverbindliche Offerte!",
      tags:     "#Holzbau #Zimmerei #Ostschweiz #Herisau #AppenzellAusserrhoden #SchweizerHandwerk #NachhaltigesBauen",
    },
    {
      label:    "Post 2 — Dienstleistungen",
      location: "Herisau, Appenzell Ausserrhoden",
      type:     "services",
      heading:  "Von der Planung<br>bis zum fertigen<br>Dachstuhl.",
      services: [
        "Zimmerei & Abbund",
        "Holzbau & Elementbau",
        "Dachkonstruktionen",
        "Fassaden",
        "Innenausbau & Renovationen",
      ],
      cta:      "Jetzt Offerte anfragen →",
      caption:  "Von der Planung bis zum fertigen Dachstuhl — wir sind Ihr Partner für hochwertigen Holzbau in der Ostschweiz. 🏗️<br><br>Unsere Leistungen im Überblick: Zimmerei, Holzbau, Dachkonstruktionen, Fassaden, Innenausbau und Renovationen.<br><br>📩 Schreiben Sie uns für eine unverbindliche Offerte!",
      tags:     "#Zimmerei #Holzbau #Dachstuhl #Fassade #Holzhaus #Ostschweiz #Herisau #Zimmermann #Holzbauarbeiten",
    },
    {
      label:    "Post 3 — Kundenstimme",
      location: "Herisau, Appenzell Ausserrhoden",
      type:     "quote",
      quote:    "Hervorragende Arbeit bei unserem Dachstockausbau. Termingerecht, sauber und sehr kompetente Beratung.",
      author:   "Peter M., Herisau",
      role:     "Hausbesitzer",
      cta:      "Ihr Projekt? Schreiben Sie uns! →",
      caption:  "Was unsere Kunden sagen 💬<br><br>Danke Peter für dein Vertrauen und die wunderbaren Worte! Solches Feedback motiviert uns jeden Tag aufs Neue.<br><br>🏠 Planen Sie auch ein Holzbauprojekt? Wir beraten Sie persönlich und unverbindlich.<br><br>👉 Link in Bio",
      tags:     "#Kundenstimmen #Holzbau #Dachstockausbau #Zimmerei #Ostschweiz #Herisau #Qualität #SchweizerHandwerk",
    },
  ],

};
