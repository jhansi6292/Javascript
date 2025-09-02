# Event Listeners

Events are things that happen on a webpage (like a click or keypress).  
We can write code to **respond** to these events.

---

## 1. Button Click
```html
<button id="btn">Click Me</button>
````

```js
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  alert("Button was clicked!");
});
```

---

## 2. Input Field

```html
<input id="name" placeholder="Enter your name">
<button id="greetBtn">Greet</button>
```

```js
let input = document.getElementById("name");
let greetBtn = document.getElementById("greetBtn");

greetBtn.addEventListener("click", function() {
  console.log("Hello " + input.value);
});
```

---

✅ With event listeners, your page becomes **interactive**.