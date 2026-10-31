# Turapp-klient (React + Vite)

Bygget etter samme mal som `nettbutikk/butikk-klient` (leksjon 9): Vite, Tailwind, React Router,
Axios + useEffect, og state løftet opp i hovedsiden (Hytter.jsx) som sender props ned.
I tillegg: react-i18next (flerspråklig) og react-leaflet (kart).

    npm install
    npm run dev

Data hentes med Axios fra `public/data/*.json`. Når REST API er klart, bytt URL i
`pages/Hytter.jsx`, `pages/HytteDetalj.jsx`, `pages/Turer.jsx` og `pages/KartSide.jsx`
(f.eks. til `http://localhost:3030/hytter`).
Innlogging er foreløpig falsk (som i nettbutikken): alle brukernavn/passord godtas.
