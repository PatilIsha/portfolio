# Abhijit Patil — Portfolio

React + Vite + Framer Motion.

## Run

```
npm install
npm run dev      # http://localhost:5173
npm run build    # production files in dist/
```

## Edit content

Everything (projects, experience, services, links, stats) is in `src/data.js`.

- Project images: `public/projects/`. A project without `image` gets a generated cover in its `color`.
- Profile photo: save as `public/abhijit.jpg` (initials "AP" show until then).
- CV: save as `public/Abhijit-Patil-CV.pdf` for the "Download CV" button.
- LinkedIn: update `links.linkedin` with your full profile URL.

## Note (this PC)

Windows Application Control blocks native rollup/esbuild binaries here, so `package.json`
overrides them with their WASM builds. On other machines you can remove the `overrides` block.

## Deploy

Push to GitHub and import on Vercel / Netlify (build: `npm run build`, output: `dist`).
