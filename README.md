# Wichita Falls Music Academy

A premium, modern single-page website for Wichita Falls Music Academy built with React, Vite, Tailwind CSS, and Google Fonts.

---

## Deploying to GitHub Pages

This repository is pre-configured with **relative asset paths** and an automated **GitHub Actions workflow** (`.github/workflows/deploy.yml`) for zero-config GitHub Pages hosting.

### Method 1: Automatic Deployment via GitHub Actions (Recommended)

1. Push this project to your GitHub repository:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```
2. In your GitHub repository:
   - Go to **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. That's it! GitHub Actions will automatically run the workflow, build the site, and publish it to `https://<your-username>.github.io/<repo-name>/`.

---

### Method 2: Manual Local Build

To generate the static bundle locally:

```bash
# 1. Install dependencies
npm install

# 2. Build the production static site into /dist
npm run build
```

The resulting `dist/` folder contains pure static HTML, CSS, JavaScript, and images that can be hosted on GitHub Pages (e.g. via `gh-pages` branch or root), Cloudflare Pages, Netlify, or Vercel.

---

## Local Development

```bash
npm install
npm run dev
```

Runs the local development server at `http://localhost:3000`.
