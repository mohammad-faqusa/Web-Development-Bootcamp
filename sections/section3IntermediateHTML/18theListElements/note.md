### Using Ordered and Unordered Lists in HTML

HTML provides two main types of lists to organize content:

1. **Ordered List (`<ol>`)** : Displays items in a numbered sequence.
2. **Unordered List (`<ul>`)** : Displays items with bullet points.

#### Syntax and Example

**Ordered List (`<ol>`):**

```html
<h3>Top 3 Programming Languages</h3>
<ol>
    <li>Python</li>
    <li>JavaScript</li>
    <li>Java</li>
</ol>
```

**Output:**

1. Python
2. JavaScript
3. Java

---

**Unordered List (`<ul>`):**

```html
<h3>Features of a Good Programming Language</h3>
<ul>
    <li>Readability</li>
    <li>Performance</li>
    <li>Community Support</li>
</ul>
```

**Output:**

* Readability
* Performance
* Community Support

---

#### Nested Lists

Lists can also be nested for subcategories.

**Example:**

```html
<h3>Languages and Frameworks</h3>
<ul>
    <li>Web Development
        <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </li>
    <li>Machine Learning
        <ol>
            <li>Python</li>
            <li>R</li>
        </ol>
    </li>
</ul>
```

**Output:**

* Web Development
  * JavaScript
  * HTML
  * CSS
* Machine Learning
  1. Python
  2. R

---

### Key Notes:

1. **Ordered Lists:** Use `<ol>` for lists that require numbering or ranking.
2. **Unordered Lists:** Use `<ul>` for lists with no specific order.
3. **List Items:** Use `<li>` to define each item in the list.
4. **Nested Lists:** Combine `<ul>` and `<ol>` for complex hierarchical structures.
