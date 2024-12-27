### **Image Element in HTML**

The **image element** (`<img>`) is used to embed images in a webpage. It is a self-closing tag that does not require a closing tag.

---

### **Name of the Element**

* **Element Name** : `<img>`

---

### **Attributes of the Image Element**

1. **`src` (Source)** :

* Specifies the URL of the image file.
* **Value** : A valid URL (absolute or relative).
* **Example** :
  ``html <img src="example.jpg" alt="Description of the image"> ``

1. **`alt` (Alternative Text)** :

* Provides a textual description of the image.
* Helps screen readers describe the image to visually impaired users.
* Displays as fallback text if the image fails to load.
* **Value** : Descriptive text.
* **Example** :
  ``html <img src="logo.png" alt="Company logo"> ``

---

### **Simulating a Screen Reader**

To simulate how a screen reader interprets the `alt` text:

1. Use a screen reader tool like **NVDA** (Windows) or **VoiceOver** (macOS).
2. Navigate to a webpage containing an `<img>` element with an `alt` attribute.
3. The screen reader will read aloud the text provided in the `alt` attribute.

---

### **Example Code**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Element Example</title>
</head>
<body>
    <h1>Image with Accessible Attributes</h1>
    <p>The following image uses the <code>alt</code> attribute for accessibility:</p>
    <img src="nature.jpg" alt="A beautiful view of a forest with a river flowing through it.">
    <p>If the image fails to load, the <code>alt</code> text will be displayed, and screen readers will use it to describe the image.</p>
</body>
</html>
```

---

### **Key Notes**

1. **`src`** : Always include the path to the image file. Use relative paths for local files and absolute URLs for external files.
2. **`alt`** :

* Required for accessibility.
* Use descriptive text to convey the purpose or content of the image.
* For decorative images that do not add meaning, use `alt=""` (empty string).

By including `alt` text, the webpage becomes more inclusive for visually impaired users and provides a fallback for users with slow internet connections.
