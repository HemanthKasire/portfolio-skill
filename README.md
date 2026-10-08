# Hemanth Reddy K — Portfolio

Personal portfolio with work experience, education, skills, certifications and personal cloud projects. Built from a React portfolio template and personalised for Hemanth Reddy K.

## Run locally

```sh
cd frontend
npm ci
npm start
```

## Production build

```sh
cd frontend
npm run build
```

Deploy the `frontend/build` directory using a static hosting provider. For Vercel, use `frontend` as the project root, `npm run build` as the build command and `build` as the output directory.

## Update details

Edit `frontend/src/data/PortfolioContent.js`. Contact links use email drafts and need no server or API keys. The original template author's photo, certificates and CV are excluded. No resume PDF or phone number is published.

## Verify

```sh
cd frontend
CI=true npm test -- --watchAll=false --runInBand
```
