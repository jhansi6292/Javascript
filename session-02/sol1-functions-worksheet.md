# Solutions: Functions in JavaScript Worksheet

Here are the solutions to the practice problems.  
👉 Try the exercises first before checking these answers!

---

## 1. Hello Function
```js
function sayHello() {
  console.log("Hello, welcome to coding!");
}

sayHello();
sayHello();
sayHello();
````

---

## 2. Greeting with Name

```js
function greet(name) {
  console.log("Hello " + name + ", nice to meet you!");
}

greet("Sam");
greet("Priya");
```

---

## 3. Add Two Numbers

```js
function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 7)); // 12
```

---

## 4. Area of Rectangle

```js
function areaOfRectangle(length, width) {
  return length * width;
}

console.log(areaOfRectangle(5, 10)); // 50
```

---

## 5. Even or Odd

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

## 6. Find Maximum of Two Numbers

```js
function findMax(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(findMax(10, 25)); // 25
```

---

## 7. Simple Calculator

```js
function calculate(num1, num2, operator) {
  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      result = "Error! Cannot divide by zero.";
    } else {
      result = num1 / num2;
    }
  } else {
    result = "Invalid operator!";
  }

  return result;
}

console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 5, "*")); // 50
```

---

## 8. Multiplication Table

```js
function printTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
  }
}

printTable(5);
```

---

## 9. Factorial

```js
function factorial(n) {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5)); // 120
```

---

## 10. Palindrome Checker (Challenge ⭐)

```js
function isPalindrome(word) {
  let reversed = word.split("").reverse().join("");
  return word === reversed;
}

console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
```

---

# ✅ Summary

* Functions make code reusable and organized.
* Many problems can be solved with simple **function + loops + conditionals**.
* Keep practicing to build stronger problem-solving skills!

🎉 Great job if you solved these on your own!