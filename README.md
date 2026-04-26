# EBE Studio - Next.js App Router

Site officiel Ekie Bozeur Entertainment, migre vers **Next.js App Router**.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS
- Motion

## Lancer en local

1. Installer les dependances:
   `npm install`
2. Lancer le serveur de dev:
   `npm run dev`
3. Build production:
   `npm run build`
4. Lancer la version production:
   `npm run start`

## Structure

- `src/app`: routes Next.js (`/`, `/services`, `/about`, `/contact`)
- `src/components`: composants UI
- `src/pages`: sections/page-components clients
- `public/medias`: images et audios utilises dans le site

## Deploiement Vercel

- Framework preset: **Next.js**
- Build command: `npm run build`
- Root directory: racine du repo
