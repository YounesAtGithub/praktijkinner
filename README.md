# Praktijk Inner — statische website (Astro + Tailwind)

Dit project is een **moderne, functioneel minimale** website:
- SSG / static build (Astro `output: static`)
- 1 landingspagina + contact/thanks/privacy
- Contactformulier via **Formspree** (platform-onafhankelijk, dus geen eigen backend)

## Starten (lokaal)

Vereist: Node.js (bijv. 18+)

```bash
npm install
npm run dev
```

Open daarna de URL die Astro in je terminal toont.

## Build (statisch)

```bash
npm run build
```

De output staat in `dist/`.

## Formspree koppelen (platform-onafhankelijk)

1. Maak een formulier aan op Formspree.
2. Kopieer jouw endpoint, bijv. `https://formspree.io/f/abcxyz`.
3. Vervang in:
   - `src/pages/index.astro`
   - `src/pages/contact.astro`
   de placeholder `https://formspree.io/f/YOUR_FORM_ID`.

### Redirect na verzenden

In het formulier staat:

```html
<input type="hidden" name="_redirect" value="https://praktijkinner.nl/thanks" />
```

Laat dit zo voor productie, of pas aan voor je dev-URL (bijv. `http://localhost:4321/thanks`).

## Deploy (kies wat jij fijn vindt)

### Optie A: Cloudflare Pages (makkelijk en snel)
- Build command: `npm run build`
- Build output directory: `dist`
- (optioneel) Custom domain: `praktijkinner.nl`

### Optie B: Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### Optie C: GitHub Pages
- Build lokaal of via GitHub Actions en publiceer de `dist/` folder.

## Content aanpassen

- Teksten: `src/pages/index.astro`
- Navigatie labels: `src/components/Header.astro`
- Kleuren/typografie: `tailwind.config.mjs`
- Afbeeldingen: `public/images/*` (vervang placeholders door jouw beelden)

## Notities
- De OG-afbeelding is een placeholder (`public/images/og-placeholder.png`). Vervang die door je eigen versie.
