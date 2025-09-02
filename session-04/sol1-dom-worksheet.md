# Solutions: DOM Manipulation Worksheet

Here are example solutions for the practice exercises.  
👉 These are just one way to solve them — feel free to experiment and come up with your variations.

---

## 1. Change Text on Button Click
```html
<h1 id="title">Hello</h1>
<button id="btn">Change Text</button>

<script>
  let heading = document.getElementById("title");
  let btn = document.getElementById("btn");

  btn.addEventListener("click", function() {
    heading.textContent = "Hello, JavaScript!";
  });
</script>
````

---

## 2. Change Color of a Paragraph

```html
<p id="para">This is a paragraph</p>
<button id="colorBtn">Change Color</button>

<script>
  let para = document.getElementById("para");
  let btn = document.getElementById("colorBtn");

  btn.addEventListener("click", function() {
    para.style.color = "blue";
  });
</script>
```

---

## 3. Show Alert When Input is Submitted

```html
<input id="name" placeholder="Enter your name">
<button id="submitBtn">Submit</button>

<script>
  let input = document.getElementById("name");
  let btn = document.getElementById("submitBtn");

  btn.addEventListener("click", function() {
    alert("Hello " + input.value + "!");
  });
</script>
```

---

## 4. Image Changer

```html
<img id="pic" src="old.png" width="150">
<button id="changeImg">Change Image</button>

<script>
  let img = document.getElementById("pic");
  let btn = document.getElementById("changeImg");

  btn.addEventListener("click", function() {
    img.setAttribute("src", "new.png");
  });
</script>
```

---

## 5. Hide and Show Element

```html
<p id="text">This is some text</p>
<button id="hideBtn">Hide</button>
<button id="showBtn">Show</button>

<script>
  let text = document.getElementById("text");
  let hideBtn = document.getElementById("hideBtn");
  let showBtn = document.getElementById("showBtn");

  hideBtn.addEventListener("click", function() {
    text.style.display = "none";
  });

  showBtn.addEventListener("click", function() {
    text.style.display = "block";
  });
</script>
```

---

## 6. Counter App

```html
<p id="count">0</p>
<button id="plus">+</button>
<button id="minus">-</button>

<script>
  let count = 0;
  let countEl = document.getElementById("count");
  let plusBtn = document.getElementById("plus");
  let minusBtn = document.getElementById("minus");

  plusBtn.addEventListener("click", function() {
    count++;
    countEl.textContent = count;
  });

  minusBtn.addEventListener("click", function() {
    count--;
    countEl.textContent = count;
  });
</script>
```

---

## 7. Change Background Color

```html
<button id="bgBtn">Change Background</button>

<script>
  let btn = document.getElementById("bgBtn");

  btn.addEventListener("click", function() {
    let colors = ["lightblue", "lightgreen", "lightpink", "yellow"];
    let randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
  });
</script>
```

---

## 8. Live Typing

```html
<input id="typeBox" placeholder="Type something">
<p id="output"></p>

<script>
  let input = document.getElementById("typeBox");
  let output = document.getElementById("output");

  input.addEventListener("input", function() {
    output.textContent = input.value;
  });
</script>
```

---

## 9. Simple Quiz (Mini Challenge)

```html
<p>What is 2 + 2?</p>
<input id="answer" placeholder="Your answer">
<button id="submit">Check</button>
<p id="feedback"></p>

<script>
  let input = document.getElementById("answer");
  let btn = document.getElementById("submit");
  let feedback = document.getElementById("feedback");

  btn.addEventListener("click", function() {
    if (input.value === "4") {
      feedback.textContent = "✅ Correct!";
    } else {
      feedback.textContent = "❌ Try again.";
    }
  });
</script>
```

---

## 10. Bonus ⭐ — Theme Switcher

```html
<button id="themeBtn">Switch Theme</button>

<script>
  let btn = document.getElementById("themeBtn");
  let isDark = false;

  btn.addEventListener("click", function() {
    if (isDark) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      btn.textContent = "Switch to Dark Mode";
      isDark = false;
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      btn.textContent = "Switch to Light Mode";
      isDark = true;
    }
  });
</script>
```

---

# ✅ Summary

* Use `getElementById()` or `querySelector()` to select elements.
* Use `.textContent`, `.style`, and `.setAttribute()` to modify.
* Use `.addEventListener()` to respond to events like clicks or typing.