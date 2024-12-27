### **Anchor Element in HTML**

The **anchor element** (`<a>`) is used to create hyperlinks in HTML. It allows users to navigate to different pages, sections, or resources by clicking on the link.

---

### **Name of the Element**

* **Element Name** : `<a>` (anchor)

---

### **Attributes of the Anchor Element**

1. **`href` (Hypertext Reference)** :

* Specifies the URL of the page/resource the link points to.
* **Value** : A valid URL (absolute or relative).
* **Example** :
  ``html <a href="https://www.example.com">Visit Example</a> ``

1. **`target`** :

* Specifies where to open the linked document.
* **Values** :
  * `_self`: Default. Opens in the same tab/window.
  * `_blank`: Opens in a new tab/window.
  * `_parent`: Opens in the parent frame.
  * `_top`: Opens in the full body of the window.
* **Example** :
  ``html <a href="https://www.example.com" target="_blank">Open in New Tab</a> ``

1. **`title`** :

* Provides additional information about the link (shown as a tooltip when hovered).
* **Value** : Text description.
* **Example** :
  ``html <a href="https://www.example.com" title="Visit the Example website">Example</a> ``

1. **`rel` (Relationship)** :

* Defines the relationship between the current document and the linked resource.
* **Values** :
  * `nofollow`: Informs search engines not to follow the link.
  * `noopener`: Prevents the new page from accessing the `window.opener` object.
  * `noreferrer`: Prevents the browser from sending a `referer` header.
* **Example** :
  ``html <a href="https://www.example.com" rel="nofollow">No Follow Link</a> ``

1. **`download`** :

* Indicates that the target resource should be downloaded instead of opened.
* **Value** : Optional file name for the downloaded file.
* **Example** :
  ``html <a href="file.pdf" download="ExampleFile.pdf">Download PDF</a> ``

1. **`name`** (Obsolete, replaced by `id`):
   * Previously used to create a named anchor for navigation within a page.
   * **Replaced By** : `id`.
   * **Example** :

   ```html
   <a id="section1">Section 1</a>
   ```

---

### **Full Example with Attributes**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anchor Element Example</title>
</head>
<body>
    <h1>Anchor Element Example</h1>
    <a href="https://www.example.com" target="_blank" title="Visit Example Website" rel="noopener">Go to Example</a>
    <br>
    <a href="file.pdf" download="Sample.pdf">Download Sample PDF</a>
</body>
</html>
```

This example demonstrates the anchor element with common attributes, ensuring a clear understanding of its use and functionality.
