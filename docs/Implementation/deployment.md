# Deployment

Deploy **test-docs** to make your documentation live.

## Deploying to GitHub Pages
1. Build the static site:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   GIT_USER=Eric-DG npm run deploy
   ```

## Custom Domains
To use a custom domain:
1. Add a `CNAME` file in the `static/` folder:
   ```
   www.yourcustomdomain.com
   ```
2. Configure the domain's DNS to point to GitHub Pages.

