# José Rugeles — Academic Website

Static academic website prepared for GitHub Pages. No build step is required.

## Publish on GitHub Pages

1. Create a public repository named `jrugeles.github.io`.
2. Upload all files in this folder to the repository root.
3. In **Settings → Pages**, select **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**.
5. The site will be available at `https://jrugeles.github.io`.

## Current structure

- `index.html` — homepage
- `about.html` — academic profile
- `research.html` — research areas
- `projects.html` — selected projects and repositories
- `teaching.html` — courses and teaching approach
- `wiridlab.html` — laboratory page and video
- `publications.html` — selected publications
- `contact.html` — static contact form using `mailto:`
- `tinygs.html` — featured TinyGS ground station and public station link
- `assets/styles.css` — site design
- `assets/script.js` — mobile navigation + contact form

## Things to personalize next

- Replace or confirm the contact email in `assets/script.js`.
- Add a dedicated professional portrait if desired. The current version uses the GitHub profile image.
- ORCID is linked. Add a CV PDF and Google Scholar / LinkedIn links if desired.
- Add more WiridLab / teaching videos.
- Add full publication bibliography.

## Contact form

The current form does not collect data on a server; it opens the visitor's email client. To switch to a server-backed form, replace this behavior with Formspree or another endpoint.
