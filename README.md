# Karan Kumar portfolio

Dependency-free static portfolio: HTML5, CSS variables and vanilla JavaScript.

## Preview locally

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. No installation or API keys required.

## Publish only after content approval

This review repository must remain private and Pages must remain disabled until Karan approves. The deployment workflow skips private repositories.

After approval, make the repository public, then select **Settings → Pages → Source → GitHub Actions**. Push to main or run the deployment workflow manually. The workflow publishes only index.html, styles.css and script.js, not this documentation.

For a fresh local checkout with GitHub CLI installed and authenticated:

```sh
gh repo clone karankumar-dev1/karankumar-dev1.github.io
cd karankumar-dev1.github.io
python3 -m http.server 8000
# Only AFTER owner approval and public visibility:
gh api --method POST repos/karankumar-dev1/karankumar-dev1.github.io/pages -f build_type=workflow
gh workflow run deploy.yml
gh run list --workflow deploy.yml --limit 1
```

If Pages already exists, do not repeat the POST. Use the Settings UI to check its source. A successful workflow and an opened, correct live site are required before calling deployment complete.

## Content maintenance

No resume or demo URL was supplied. The navigation does not contain a dead resume button; it states that the resume is available on request. Add a real link after verification. Private project source is not linked. Performance figures are deliberately omitted until evaluation assumptions can accompany them.

Before publishing, check at 320px, 390px and desktop widths, keyboard navigation, both themes, filter counts, clipboard success/failure and all real links.
