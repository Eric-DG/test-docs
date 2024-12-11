# Setup Guide

After installing **test-docs**, follow these steps to configure the project:

## Configuration Files
1. **Update `docusaurus.config.js`**:
   - Edit the site title, tagline, and URLs:
     ```javascript
     module.exports = {
       title: 'test-docs',
       tagline: 'Documentation for test-docs',
       url: 'https://eric-dg.github.io',
       baseUrl: '/test-docs/',
     };
     ```

2. **Edit `sidebars.js`**:
   - Ensure all relevant Markdown files are included:
     ```javascript
     module.exports = {
       tutorialSidebar: [
         'getting-started/intro',
         'getting-started/installation',
         'getting-started/setup',
       ],
     };
     ```

3. **Customize CSS**:
   - Modify `src/css/custom.css` for your branding.

## Running Locally
Once configured, start the server again:
```bash
npm run start
```

