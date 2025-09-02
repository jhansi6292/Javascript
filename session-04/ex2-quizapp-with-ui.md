# Mini Project: Quiz App (UI Version) Step-by-Step Guide

We are going to build a **Quiz App** using JavaScript.  
The app will:
1. Show a question on the screen
2. Let the user type an answer
3. Check if the answer is correct
4. Keep track of score
5. Show the final score at the end

---

## Step 1: Setup the Page
- Create an `index.html` file.
- Inside it, add:
  - A **heading** to show the question
  - An **input box** for the answer
  - A **Submit button**
  - A **paragraph** to show feedback
  - A **paragraph** to show score

👉 Example (don’t copy exact, just create similar elements):
```html
<h2 id="question">Question will appear here</h2>
<input id="answer" placeholder="Type your answer">
<button id="submit">Submit</button>
<p id="feedback"></p>
<p id="score">Score: 0</p>
````

---

## Step 2: Store Questions & Answers

* In `script.js`, create **two arrays**:

  * One for questions
  * One for answers

👉 Example:

```js
let questions = ["What is 2 + 2?", "What is the capital of France?"];
let answers = ["4", "Paris"];
```

---

## Step 3: Show the First Question

* Use JavaScript to **select the question element** (`getElementById`).
* Show the **first question** from the array.

---

## Step 4: Check the Answer

* When the user clicks the **Submit button**:

  1. Get the value from the input box
  2. Compare it with the correct answer from the `answers` array
  3. If correct → show `"Correct!"` and add +1 to score
  4. If wrong → show `"Wrong! Correct answer is ..."`

👉 Use **if...else** for checking.

---

## Step 5: Move to the Next Question

* After checking the answer, go to the **next question** in the array.
* Keep track of which question you are on with a variable `currentQuestion`.

👉 Hint: Increase `currentQuestion++` after each submission.

---

## Step 6: End the Quiz

* When there are **no more questions** left:

  * Show `"Quiz Finished!"`
  * Hide the input and button
  * Show the **final score**

---

# 🎯 Summary of Logic

1. **HTML** → heading, input, button, feedback, score
2. **Arrays** → store questions and answers
3. **Variable** → track current question and score
4. **Event listener** → check answer when button is clicked
5. **Conditionals** → correct or wrong feedback
6. **Update DOM** → show next question, score, and end message

---

👉 Challenge for You:

* Add **3 or more questions**
* Make the app **case-insensitive** (so “paris” and “Paris” both work)
* Show `"You got X out of Y correct!"` at the end

---
