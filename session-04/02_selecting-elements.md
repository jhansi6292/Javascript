# Selecting Elements in the DOM

To change something on a webpage, we first need to **select it**.

---

## 1. Select by ID
```html
<h1 id="title">Hello</h1>
````

```js
let heading = document.getElementById("title");
console.log(heading.textContent); // Hello
```

---

## 2. Select by Class

```html
<p class="info">This is a paragraph</p>
```

```js
let para = document.querySelector(".info");
console.log(para.textContent); // This is a paragraph
```

---

## 3. Select by Tag

```html
<p>First paragraph</p>
<p>Second paragraph</p>
```

```js
let paras = document.getElementsByTagName("p");
console.log(paras[0].textContent); // First paragraph
console.log(paras[1].textContent); // Second paragraph
```

---

✅ Always use **`id`** or **`querySelector`** for simplicity.