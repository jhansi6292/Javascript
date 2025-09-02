# Introduction to the DOM

The **DOM (Document Object Model)** is a way for JavaScript to interact with a webpage.  

Think of a webpage as a **family tree**:
- The page = root  
- Headings, paragraphs, buttons = children  
- JavaScript can **find** these elements and **change them**.

---

## 1. What is the DOM?
- The DOM is a **tree-like structure** of all HTML elements.  
- Every element (like `<h1>`, `<p>`, `<button>`) is a **node**.  
- JavaScript can **read** and **change** these nodes.  

---

## 2. Inspecting the DOM
1. Right-click on a webpage → Click **Inspect**.  
2. You’ll see the **HTML structure**.  
3. That’s the DOM that JavaScript can control.  

---

## 3. Example HTML
```html
<h1 id="title">Welcome!</h1>
<p class="info">This is a demo page.</p>
<button id="btn">Click Me</button>
````

---

✅ With the DOM, we can change `"Welcome!"` into `"Hello Alex!"` just by writing JavaScript.