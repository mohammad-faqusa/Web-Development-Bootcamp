### File Paths in HTML

File paths specify the location of a file to be used in a webpage, such as an image, script, or stylesheet.

---

### Types of File Paths

#### **1. Absolute Path**
- An **absolute path** specifies the full path to a file or resource, starting from the root directory of the website or server.
- **It does not depend on the current location of the file using it.**
- **Example**:
  ```html
  <img src="https://www.example.com/images/logo.png" alt="Logo">
  ```

---

#### **2. Relative Path**
- A **relative path** specifies the location of a file relative to the file that is calling it.
- **It is shorter and works no matter where you move your folder, as long as the relative structure between files remains unchanged.**

##### Examples of Relative Paths:
1. **Same Directory**:
   - Use the file name directly.
   - Example:
     ```html
     <img src="image.png" alt="Image in the same folder">
     ```

2. **Subdirectory**:
   - Navigate to a folder within the current directory.
   - Example:
     ```html
     <img src="images/photo.jpg" alt="Image in a subdirectory">
     ```

3. **Parent Directory (`../`)**:
   - Move one level up in the directory structure.
   - Example:
     ```html
     <img src="../assets/logo.png" alt="Image in the parent directory">
     ```

4. **Current Directory (`./`)**:
   - Explicitly reference the current directory.
   - Example:
     ```html
     <img src="./image.png" alt="Image in the current folder">
     ```

---

### Special Characters in Paths

1. **`../`**:
   - Moves up one level in the directory hierarchy.
   - Use this when referencing a file in a parent directory.
   - Example:
     ```html
     <link rel="stylesheet" href="../styles/main.css">
     ```

2. **`./`**:
   - Refers to the current directory.
   - Mostly optional, as files in the same directory can be accessed directly.
   - Example:
     ```html
     <script src="./script.js"></script>
     ```

---

### Practical Example

Assume this folder structure:
```
project/
├── index.html
├── images/
│   └── logo.png
├── styles/
│   └── main.css
├── scripts/
│   └── app.js
```

**HTML Code Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Path Example</title>
    <link rel="stylesheet" href="styles/main.css"> <!-- Subdirectory -->
</head>
<body>
    <h1>File Path Example</h1>
    <img src="images/logo.png" alt="Project Logo"> <!-- Subdirectory -->
    <script src="./scripts/app.js"></script> <!-- Current directory -->
</body>
</html>
```

---

### Key Notes
- **Absolute Path**: Use for external resources or when the exact location is fixed.
- **Relative Path**: Preferred for internal project resources; ensures portability.
- **`../`**: Moves up a directory level.
- **`./`**: Refers to the current directory (optional for files in the same folder).