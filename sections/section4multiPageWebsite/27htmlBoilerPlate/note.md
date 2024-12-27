### **What is an HTML Boilerplate?**

An **HTML boilerplate** is the basic structure of an HTML document. It includes all the essential elements needed for a valid and functional web page. It serves as a starting template for any HTML file, ensuring proper setup for display, accessibility, and functionality.

---

### **Components of an HTML Boilerplate**

1. **Document Type Declaration (`<!DOCTYPE html>`)**:
   - Specifies the HTML version used (HTML5 in this case).
   - Ensures the browser renders the page correctly and follows web standards.

   ```html
   <!DOCTYPE html>
   ```

2. **HTML Element (`<html lang="en">`)**:
   - The root element that wraps all the content of the web page.
   - The `lang="en"` attribute specifies the language of the page, helpful for accessibility tools like screen readers.

   ```html
   <html lang="en">
   ```

3. **Head Section (`<head>`)**:
   - Contains meta information about the document (not displayed on the page).
   - Includes:
     - **`<meta charset="UTF-8">`**:
       - Ensures correct display of characters and symbols (UTF-8 encoding).
       - Supports multiple languages and special characters.
     - **`<title>`**:
       - Specifies the title of the web page (displayed on the browser tab).

   ```html
   <head>
       <meta charset="UTF-8"> <!-- Ensures characters are displayed correctly -->
       <title>My Website</title> <!-- Title shown in the browser tab -->
   </head>
   ```

4. **Body Section (`<body>`)**:
   - Contains the visible content of the web page.
   - All text, images, links, and other elements that users interact with are placed here.

   ```html
   <body>
       <!-- Content of the webpage -->
   </body>
   ```

5. **Closing Tags (`</html>`)**:
   - Ensures all elements are properly closed and the document structure is complete.

---

### **Example Boilerplate**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a simple web page.</p>
</body>
</html>
```

---

### **Key Notes**
- The boilerplate ensures that the web page is displayed correctly across all devices and browsers.
- The **`<meta charset="UTF-8">`** is critical for displaying special characters, symbols, and multilingual text.
- **Semantic structure** (head and body sections) makes the HTML document clear and organized.