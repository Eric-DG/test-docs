# How to Use test-docs

Learn how to use **test-docs** effectively for your documentation needs.

## Writing Content
1. Add a new `.md` file in the appropriate folder under `docs/`.
2. Use Markdown for formatting:
   - Headings: `#`, `##`, `###`
   - Lists: `-` or `*`
   - Code: ``` or `

3. Update the sidebar:
   ```javascript
   module.exports = {
     tutorialSidebar: [
       'guides/how-to-use',
     ],
   };
   ```

## Preview Changes
Run the development server to preview your updates:
```bash
npm run start
```
