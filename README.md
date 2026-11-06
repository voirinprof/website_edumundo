# EduMondo 🌎

A playful, static activity library for childcare educators serving children aged 0–12.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321/edumondo/.

## Add an activity

Create a Markdown file under `src/content/activities/` with the same frontmatter fields as the existing examples. The file name becomes the activity URL slug. Use `npm run build` to validate the content.

## GitHub Pages

1. Push this project to the `main` branch of a **public** GitHub repository (GitHub Free).
2. Open **Settings → Pages → Build and deployment** and choose **GitHub Actions**.
3. The included workflow builds the site on every push to `main`.
4. The URL is `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`.

For a private GitHub repository on GitHub Free, use a host supporting private repositories (such as Cloudflare Pages). Set the build command to `npm run build`, output directory to `dist`, and environment variables `SITE_URL=https://YOUR_SITE_DOMAIN` and `BASE_PATH=/`.

## Notes

- All example activities are illustrative and must be reviewed for safety and age suitability before use.
- The contribution page is a placeholder; replace it with your preferred contact/form workflow.
- The design currently uses emoji illustration placeholders. Replace them with original or appropriately licensed images as the library grows.
- Do not upload children's personal information or photos without appropriate consent.
