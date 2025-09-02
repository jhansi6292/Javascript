# Modifying the DOM

Once we have an element, we can change its **content, style, or attributes**.

---

## 1. Change Text
```html
<h1 id="title">Hello</h1>
````

```js
let heading = document.getElementById("title");
heading.textContent = "Hello, JavaScript!";
```

---

## 2. Change Style

```html
<p id="para">This is a paragraph</p>
```

```js
let p = document.getElementById("para");
p.style.color = "blue";
p.style.fontSize = "20px";
```

---

## 3. Change Attributes

```html
<img id="pic" src="old.png" />
```

```js
let image = document.getElementById("pic");
image.setAttribute("src", "new.png");
```

---

✅ With just a few lines, we can **completely change the webpage**!