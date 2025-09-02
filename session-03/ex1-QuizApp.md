
# Mini Project: Quiz App (Start)

We will begin creating a **Quiz App**.  
This session: Store questions and answers in arrays, and display them one by one.

---

## Step 1: Store Questions
```js
let questions = [
  "What is the capital of France?",
  "What is 2 + 2?",
  "What color is the sky?"
];

let answers = [
  "Paris",
  "4",
  "Blue"
];
````

---

## Step 2: Ask Each Question

```js
for (let i = 0; i < questions.length; i++) {
  let userAnswer = prompt(questions[i]);
  console.log("You answered: " + userAnswer);
}
```

---

## Step 3: Check Answers

```js
let score = 0;

for (let i = 0; i < questions.length; i++) {
  let userAnswer = prompt(questions[i]);

  if (userAnswer.toLowerCase() === answers[i].toLowerCase()) {
    console.log("Correct!");
    score++;
  } else {
    console.log("Wrong! The correct answer is " + answers[i]);
  }
}

console.log("Your final score is: " + score);
```

---

✅ With this, we have the **basic structure of a Quiz App**.
Next session, we’ll make it interactive with **DOM elements** (buttons, text, score display).