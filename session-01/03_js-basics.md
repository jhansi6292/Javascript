# JavaScript Basics

Let’s learn the **building blocks of JavaScript** step by step.

---

## 1. Printing Output

We often need to show information to the programmer (in the console) or to the user (on the page).

### Using `console.log()`  
Prints output in the **browser console** (for debugging).  

```js
console.log("Hello, world!");
````

👉 Open **Developer Tools → Console** in your browser to see it.

---

### Other Variations

```js
console.log("Number:", 42);              // Prints text + number
console.log("2 + 3 =", 2 + 3);           // Prints calculation result
console.log(`Welcome, ${"Alex"}!`);      // Template string (backticks)
```

### Printing on the Web Page

```js
document.write("Hello on the page!");
```

### Showing Alerts

```js
alert("This is a pop-up message!");
```

✅ Use `console.log()` for programmers, `alert()` or `document.write()` for user-facing messages.

---

## 2. Variables

Variables store **data values**.

We declare variables using `let` or `const`.

```js
let age = 13;       // value can be changed later
const name = "Alex"; // value cannot be changed
```

---

### Difference Between `let` and `const`

* **`let`** → Use when the value **may change**.

  ```js
  let score = 0;
  score = 10; // ✅ allowed
  ```

* **`const`** → Use when the value **must not change**.

  ```js
  const pi = 3.14159;
  // pi = 3; ❌ error: cannot reassign const
  ```

* **`var`** → Old way of declaring variables (before ES6). Not recommended now because it can cause bugs with scope.

✅ Rule of Thumb:

* Use `const` by default.
* Use `let` only if you plan to change the value.

---

## 3. Data Types

JavaScript has different kinds of values (data types):

### 1. Numbers

```js
let score = 100;
let temperature = 36.6;
```

### 2. Strings (text inside quotes)

```js
let city = "New York";
let greeting = 'Hello';
let message = `Welcome!`; // template string
```

### 3. Booleans (true/false values)

```js
let isStudent = true;
let isHoliday = false;
```

### 4. Arrays (list of values)

```js
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Cherry
```

Arrays can hold **different types**:

```js
let mixed = [42, "hello", true];
console.log(mixed);
```

### 5. Objects (data with key-value pairs)

Objects describe things with **properties**.

```js
let student = {
  name: "Alex",
  age: 13,
  grade: "8th",
  isActive: true
};

console.log(student.name);  // Alex
console.log(student["age"]); // 13
```

---

## 4. Input from User

We can ask the user for input using `prompt()`.

```js
let userName = prompt("What is your name?");
console.log("Hello " + userName);
```

👉 Whatever the user types is stored as a **string**.

---

## 5. Combining Strings

We can join (concatenate) strings.

```js
let firstName = "Alex";
let lastName = "Brown";
let fullName = firstName + " " + lastName;

console.log(fullName); // Alex Brown
```

Or use **template strings** with backticks:

```js
let fullName2 = `${firstName} ${lastName}`;
console.log(fullName2); // Alex Brown
```

---

# ✅ Summary

* Use **`console.log()`** for programmer output, **`alert()`** or **`document.write()`** for user messages.
* Use **`let`** for changeable variables, **`const`** for fixed values.
* Data Types: Numbers, Strings, Booleans, Arrays, Objects.
* Use `prompt()` to get input from users.
* Strings can be combined using `+` or template strings `` `${...}` ``.

🎉 These basics are the foundation for all your JavaScript programs!