# Configuration

Learn how to configure **test-docs** for your project.

## Updating `docusaurus.config.js`
1. Update site information:
   ```javascript
   title: 'test-docs',
   tagline: 'Documentation for test-docs',
   ```

2. Add navbar links:
   ```javascript
   items: [
     { to: '/docs/getting-started/intro', label: 'Docs', position: 'left' },
   ],
   ```

## Customizing Sidebar
Update the `sidebars.js` file for navigation:
```javascript
module.exports = {
  tutorialSidebar: [
    'implementation/overview',
    'implementation/configuration',
  ],
};
```

