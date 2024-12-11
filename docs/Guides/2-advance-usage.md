# Advanced Usage

Explore advanced features of **test-docs** to enhance your documentation.

## Versioning
Manage multiple versions of your docs:
1. Create a version:
   ```bash
   npm run docusaurus docs:version 1.0
   ```
2. Edit versioned files in the `versioned_docs/` folder.

## Deployment
Deploy the site to GitHub Pages:
```bash
GIT_USER=<GitHub Username> npm run deploy
```

## Customizing Themes
1. Edit the CSS file:
   ```css
   :root {
     --ifm-color-primary: #007bff;
   }
   ```
2. Replace the logo in `static/img/`.

