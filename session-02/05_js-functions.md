# Functions in JavaScript

A **function** is a block of code that does a specific task.  
Think of it like a **recipe**:  
- You write it once  
- You can use it many times  

---

## 1. Why Functions?
- Avoid writing the same code again and again.  
- Make code easier to read.  
- Break big problems into smaller steps.  

---

## 2. Defining a Function

```js
function sayHello() {
  console.log("Hello!");
}
````

Here:

* `function` → keyword to define a function
* `sayHello` → function name
* `{ ... }` → block of code that runs when called

---

## 3. Calling a Function

```js
sayHello();   // Output: Hello!
```

👉 A function **does nothing until it is called**.

---

## 4. Functions with Parameters

You can pass **values** into a function.

```js
function greet(name) {
  console.log("Hello " + name + "!");
}

greet("Sam");   // Hello Sam!
greet("Priya"); // Hello Priya!
```

* `name` is a **parameter** (like an input box).
* `"Sam"` and `"Priya"` are **arguments** (actual values passed).

---

## 5. Functions with Return Values

A function can **return a value** back to the program.

```js
function add(a, b) {
  return a + b;
}

let sum = add(5, 10);
console.log(sum); // 15
```

* `return` sends the result back.
* You can store it in a variable.

---

## 6. Example: Check Even or Odd

```js
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
```

---

## 7. Real-Life Analogy

* A **vending machine** is like a function:

  * You give it input (money + item code).
  * It processes.
  * It gives output (snack).

---

# Summary

* Functions help us **reuse code**.
* Use `function name(parameters) { ... }` to define.
* Call with `name(arguments)`.
* Use `return` to give back results.

🎉 Functions make your code **smarter and easier to manage**!
