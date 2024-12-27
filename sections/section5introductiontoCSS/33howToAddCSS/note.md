CSS can be added to an HTML document in three main ways: **inline**, **internal**, and **external**. Each method has its specific use cases and benefits.

---

### 1. **Inline CSS**
   - CSS is applied directly to the HTML element using the `style` attribute.
   - Useful for quick styling of a single element or debugging.
   - Not recommended for large projects as it can make HTML cluttered and hard to maintain.

   **Example:**
   ```html
   <p style="color: blue; font-size: 16px;">This is a paragraph with inline CSS.</p>
   ```

---

### 2. **Internal CSS**
   - CSS is written inside a `<style>` tag within the `<head>` section of the HTML document.
   - Useful for applying styles to a single webpage.
   - Not ideal for large projects because it does not allow reuse across multiple pages.

   **Example:**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Internal CSS Example</title>
       <style>
           body {
               font-family: Arial, sans-serif;
               background-color: #f4f4f4;
           }
           h1 {
               color: green;
               text-align: center;
           }
       </style>
   </head>
   <body>
       <h1>This is a heading styled with internal CSS.</h1>
   </body>
   </html>
   ```

---

### 3. **External CSS**
   - CSS is written in a separate `.css` file and linked to the HTML document using the `<link>` tag.
   - Ideal for large projects as it allows styles to be reused across multiple pages.
   - Keeps HTML and CSS separate, improving maintainability and readability.

   **Example:**

   **HTML File (index.html):**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>External CSS Example</title>
       <link rel="stylesheet" href="styles.css">
   </head>
   <body>
       <h1>This is a heading styled with external CSS.</h1>
   </body>
   </html>
   ```

   **CSS File (styles.css):**
   ```css
   body {
       font-family: Arial, sans-serif;
       background-color: #f4f4f4;
   }

   h1 {
       color: blue;
       text-align: center;
   }
   ```

---

### Comparison Table:

| **Method**      | **Description**                                                                 | **Use Case**                                                                                     |
|------------------|---------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| **Inline CSS**   | CSS written directly inside an element's `style` attribute.                    | Small tweaks or testing styles for individual elements.                                          |
| **Internal CSS** | CSS written inside the `<style>` tag in the `<head>` section of an HTML file.  | Styling specific to a single page.                                                              |
| **External CSS** | CSS written in a separate `.css` file and linked to HTML with the `<link>` tag.| Recommended for larger projects or when styling multiple pages for consistency and reusability. |

---

### Best Practices:
1. **Use External CSS:** Whenever possible, to keep the code modular and maintainable.
2. **Avoid Inline CSS:** It makes HTML code messy and harder to debug.
3. **Combine Methods (if necessary):** For example, external for overall styles and internal for specific page-level customizations.

Let me know if you need help implementing these!