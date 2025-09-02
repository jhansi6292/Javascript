# Conditional Statements in JavaScript

Conditional statements let programs **make decisions**.  
They tell the computer:  
👉 *“If something is true, do this. Otherwise, do something else.”*

---

## 1. The `if` Statement
The `if` statement checks a condition.  
If the condition is true, the code inside runs.

```js
let age = 15;

if (age >= 13) {
  console.log("You are a teenager!");
}
````

✅ Output: `"You are a teenager!"` (because `age >= 13` is true)

---

## 2. The `if...else` Statement

Use `if...else` when you want two possible outcomes.

```js
let age = 10;

if (age >= 13) {
  console.log("You are a teenager!");
} else {
  console.log("You are still a kid!");
}
```

✅ Output: `"You are still a kid!"`

---

## 3. The `if...else if...else` Statement

Use this when there are **multiple possible choices**.

```js
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}
```

✅ Output: `"Grade: B"`

---

## 4. Nested `if` Statements

You can put an `if` inside another `if`.

```js
let age = 18;
let hasId = true;

if (age >= 18) {
  if (hasId) {
    console.log("You can enter the exam hall.");
  } else {
    console.log("You need an ID to enter.");
  }
} else {
  console.log("You are too young to enter.");
}
```

✅ Output: `"You can enter the exam hall."`

---

## 5. Real-Life Example

Imagine you are deciding whether you can go outside to play:

```js
let isRaining = false;

if (isRaining) {
  console.log("Stay inside and play video games!");
} else {
  console.log("Go outside and play football!");
}
```

✅ Output: `"Go outside and play football!"`

---

# Summary

* Use **`if`** to run code only when a condition is true.
* Use **`if...else`** when you want two choices.
* Use **`if...else if...else`** for multiple choices.
* You can **nest** conditions for more complex decisions.

🎉 With conditional statements, your programs become **smart** and can **make decisions** just like humans!
