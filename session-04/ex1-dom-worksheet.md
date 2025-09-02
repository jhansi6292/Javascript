# DOM Manipulation Worksheet

Practice these small challenges to get comfortable with **DOM selection, modification, and events**.  

👉 Open an `index.html` file and a linked `script.js` file. Try each exercise step by step.

---

## 1. Change Text on Button Click
- Create an `<h1>` that says **"Hello"**.  
- Add a button that, when clicked, changes the text to **"Hello, JavaScript!"**.

---

## 2. Change Color of a Paragraph
- Create a `<p>` with some text.  
- Add a button that, when clicked, changes the color of the paragraph to **blue**.  

👉 Hint: Use `.style.color`

---

## 3. Show Alert When Input is Submitted
- Create an `<input>` box and a **Submit** button.  
- When the button is clicked, show an alert with the text the user typed.  

👉 Example: User types "Alex" → Alert says **"Hello Alex!"**

---

## 4. Image Changer
- Add an `<img>` with a default picture.  
- Add a button that changes the image to another picture.  

👉 Hint: Use `.setAttribute("src", "newImage.png")`

---

## 5. Hide and Show Element
- Create a `<p>` with some text.  
- Add two buttons: **Hide** and **Show**.  
- When you click Hide, the text disappears.  
- When you click Show, the text comes back.  

👉 Hint: Use `.style.display = "none"` and `"block"`

---

## 6. Counter App
- Create a `<p>` that shows a number starting at 0.  
- Add two buttons: **+** and **-**.  
- Clicking **+** increases the number, clicking **-** decreases it.  

👉 Hint: Use a variable `count` to track the number.

---

## 7. Change Background Color
- Add a button.  
- Each time the button is clicked, change the page’s background color to a random color.  

👉 Hint: Use  
```js
document.body.style.backgroundColor = "lightgreen";
````

---

## 8. Live Typing

* Create an `<input>` box and a `<p>` below it.
* As the user types, update the paragraph with the text.

👉 Example: User types `"Hi"` → Paragraph shows `"Hi"`

---

## 9. Simple Quiz (Mini Challenge)

* Create a question like: **"What is 2 + 2?"**
* Add an input box and a Submit button.
* If the answer is `4`, show `"Correct!"`, otherwise show `"Try again."`

---

## 10. Bonus ⭐ — Theme Switcher

* Add a button that switches between **Light Mode** and **Dark Mode**.
* Light Mode → White background, black text.
* Dark Mode → Black background, white text.

---

# ✅ Tips

* Use `document.getElementById()` or `document.querySelector()` to select elements.
* Use `.textContent`, `.style`, and `.setAttribute()` to make changes.
* Use `.addEventListener("click", function(){ ... })` for button actions.

🎉 These challenges will prepare you for the **Quiz App Project**!