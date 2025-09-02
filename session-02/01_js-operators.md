# JavaScript Operators

Operators let us **do actions** with numbers, text, or logic.  
Think of them like the symbols you use in math or decision-making.

---

## 1. Arithmetic Operators
Used for math calculations.

| Operator | Meaning          | Example | Result |
|----------|------------------|---------|--------|
| `+`      | Addition         | `5 + 3` | 8      |
| `-`      | Subtraction      | `5 - 3` | 2      |
| `*`      | Multiplication   | `5 * 3` | 15     |
| `/`      | Division         | `10 / 2`| 5      |
| `%`      | Modulus (remainder) | `10 % 3` | 1  |

```js
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
```

----

## 2. Comparison Operators

Used to compare values.
They return true or false.

| Operator | Meaning                     | Example     | Result |
| -------- | --------------------------- | ----------- | ------ |
| `==`     | Equal (value only)          | `5 == "5"`  | true   |
| `===`    | Strict equal (value & type) | `5 === "5"` | false  |
| `!=`     | Not equal                   | `10 != 5`   | true   |
| `>`      | Greater than                | `10 > 7`    | true   |
| `<`      | Less than                   | `5 < 2`     | false  |
| `>=`     | Greater than or equal       | `8 >= 8`    | true   |
| `<=`     | Less than or equal          | `6 <= 9`    | true   |

```js
let age = 15;
console.log(age > 13);   // true
console.log(age === "15"); // false
```

----

## 3. Logical Operators

Used for decision making.

| Operator | Meaning                  | Example               | Result |
| -------- | ------------------------ | --------------------- | ------ |
| `&&`     | AND → true if both true  | `(5 > 3 && 10 > 7)`   | true   |
| `\|\|`   | OR → true if one is true | `(5 > 3 \|\| 10 < 7)` | true   |
| `!`      | NOT → reverses the value | `!(5 > 3)`            | false  |

```js
let isStudent = true;
let hasId = false;

console.log(isStudent && hasId); // false
console.log(isStudent || hasId); // true
console.log(!isStudent);         // false

```


---
