# Loops in JavaScript

Loops let us **repeat code** without writing it many times.  
Think of it like saying:  
👉 *“Do this action 10 times.”*

---

## 1. Why Loops?
- Without loops, you’d repeat the same line again and again.  
- With loops, you can run the same code **many times automatically**.  

Example without a loop:
```js
console.log("Hello");
console.log("Hello");
console.log("Hello");
````

With a loop:

```js
for (let i = 1; i <= 3; i++) {
  console.log("Hello");
}
```

---

## 2. The `for` Loop

The most common loop in JavaScript.

### Syntax

```js
for (initialization; condition; update) {
  // code runs while condition is true
}
```

### Example: Print numbers 1 to 5

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

✅ Output: 1, 2, 3, 4, 5

---

## 3. The `while` Loop

Runs code as long as a condition is true.

### Example: Print numbers 1 to 5

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

✅ Output: 1, 2, 3, 4, 5

---

## 4. The `do...while` Loop

Like `while`, but runs **at least once** (even if condition is false).

### Example

```js
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

✅ Output: 1, 2, 3, 4, 5

---

## 5. Using Loops with Arrays

Loops are very useful for going through a list (array).

```js
let fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

✅ Output:
Apple
Banana
Cherry

---

## 6. Special Keywords: `break` and `continue`

* **`break`** → stops the loop completely.
* **`continue`** → skips one iteration, then continues.

### Example with `break`

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

✅ Output: 1, 2, 3, 4

### Example with `continue`

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
```

✅ Output: 1, 2, 4, 5

---

# Summary

* **`for`** → best for counting (when you know how many times).
* **`while`** → best when repeating until a condition becomes false.
* **`do...while`** → always runs at least once.
* Use `break` and `continue` for more control.

🎉 With loops, you can repeat tasks easily and make your code much shorter!
