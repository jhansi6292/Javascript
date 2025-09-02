# The `switch` Statement in JavaScript

The **`switch` statement** is another way to make decisions.  
It is used when you want to compare **one value** against **many possible cases**.

---

## 1. Basic Syntax

```js
switch(expression) {
  case value1:
    // code if expression === value1
    break;
  case value2:
    // code if expression === value2
    break;
  default:
    // code if none of the cases match
}
````

* `expression` → the value you are checking.
* `case value` → possible choices.
* `break` → stops the switch after finding a match.
* `default` → runs if nothing matches (like `else`).

---

## 2. Example: Days of the Week

```js
let day = 3;
let dayName;

switch(day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day!";
}

console.log(dayName);
```

✅ Output: `"Wednesday"`

---

## 3. Example: Calculator with `switch`

```js
let num1 = 10;
let num2 = 5;
let operator = "*";
let result;

switch(operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      result = "Error! Cannot divide by zero.";
    } else {
      result = num1 / num2;
    }
    break;
  default:
    result = "Invalid operator!";
}

console.log("Result: " + result);
```

✅ Output: `"Result: 50"`

---

## 4. Why use `switch`?

* Cleaner than writing many `if...else if` statements.
* Easy to read when checking one variable against many values.
* Commonly used for **menus, calculators, and category checks**.

---

# Summary

* `switch` is used to test one value against many options.
* Use `case` for each option, `break` to stop, and `default` for "otherwise".
* Great for replacing **long chains of `if...else if`**.

🎉 Now you can make programs with **multiple choices** in a clean way!

```

---
