# Portfolio Skill

React portfolio with animated sections, a Three.js hero, project cards,
certifications, a downloadable CV and an EmailJS contact form.

## Run locally

Install Node.js and npm, then run:

```sh
cd frontend
npm ci
npm start
```

To create a production build:

```sh
npm run build
```

The generated website is in `frontend/build`.

## Personalise

Edit `frontend/src/data/PortfolioContent.js` for names, descriptions, skills,
projects, certifications and contact links. Replace the images under
`frontend/src/assets/images` and the CV at `frontend/src/assets/CV/my_cv.pdf`.
The supplied project currently contains template information for Uzair; review
all claims, links, images and the CV before publishing it as your own portfolio.

## Contact form

Copy `frontend/.env.example` to `frontend/.env.local`, then enter your EmailJS
service ID, template ID and public key. Restart the development server after
changing these values. They are browser-visible configuration; never put an
EmailJS private key or another secret in a `REACT_APP_` variable. Without this
configuration the website builds, but the contact form cannot send messages.

## Deployment

Use `frontend` as the project root, `npm run build` as the build command and
`build` as the output directory for a static host. This repository contains the
source; uploading it to GitHub does not itself publish a live website.

## Source and attribution

Imported from the supplied `Portfolio-React-main` folder. Preserve applicable
upstream attribution and licence terms; no new licence is granted by this upload.
