# Loops with Arrays

Loops are powerful when combined with arrays.

---

## 1. Print All Items
```js
let fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
````

---

## 2. Sum of Numbers

```js
let numbers = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("Total = " + sum);
```

---

## 3. Find Maximum Number

```js
let numbers = [45, 12, 78, 23];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log("Max = " + max);
```

---

## 4. Real-Life Example

```js
let students = ["Alex", "Sam", "Priya"];

for (let i = 0; i < students.length; i++) {
  console.log("Welcome " + students[i]);
}
```

---