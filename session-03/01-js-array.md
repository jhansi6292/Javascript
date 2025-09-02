# Arrays in JavaScript

An **array** is a collection (list) of values stored in one variable.

---

## 1. Creating Arrays
```js
let fruits = ["Apple", "Banana", "Cherry"];
````

---

## 2. Accessing Items

```js
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Cherry
```

👉 Array indices start from **0**.

---

## 3. Changing Items

```js
fruits[1] = "Mango";
console.log(fruits); // ["Apple", "Mango", "Cherry"]
```

---

## 4. Array Length

```js
console.log(fruits.length); // 3
```

---

## 5. Adding and Removing Items

```js
fruits.push("Orange");   // Add at end
fruits.pop();            // Remove last
fruits.unshift("Grapes");// Add at beginning
fruits.shift();          // Remove first
```