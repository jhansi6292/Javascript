# JavaScript Coercion Practice Problems

Test your understanding of **type coercion** in JavaScript by predicting the results of these expressions.  
(Hint: Try running them in the browser console or Node.js after guessing.)

---

### Problem 1
```js
1 + "1"
````

What is the result?

---

### Problem 2

```js
"5" - 2
```

What does this evaluate to?

---

### Problem 3

```js
true + true
```

What is the output?

---

### Problem 4

```js
false == 0
```

Is this true or false?

---

### Problem 5

```js
[] + []
```

What happens here?

---

### Problem 6

```js
[] == ![]
```

True or false?

---

### Problem 7

```js
"10" * "2"
```

What is the result?

---

### Problem 8

```js
null == undefined
```

What will this evaluate to?

---

### Problem 9

```js
{} + []
```

What’s the result?

---

### Problem 10

```js
[] + {}
```

What about this one?

---

# ✅ Answers & Explanations

### Problem 1

```js
1 + "1"  // "11"
```

➝ The number `1` is coerced into a string, so string concatenation happens.

---

### Problem 2

```js
"5" - 2  // 3
```

➝ `"-"` forces numeric coercion. `"5"` becomes `5`.

---

### Problem 3

```js
true + true  // 2
```

➝ `true` is coerced into `1`. So `1 + 1 = 2`.

---

### Problem 4

```js
false == 0  // true
```

➝ Loose equality `==` coerces `false` to `0`.

---

### Problem 5

```js
[] + []  // ""
```

➝ Empty arrays stringify to `""`. So result is an empty string.

---

### Problem 6

```js
[] == ![]  // true
```

➝ `![]` → `false`. Then comparison is `[] == false`.
Array → `""` → `0`. `false` → `0`. So `0 == 0`.

---

### Problem 7

```js
"10" * "2"  // 20
```

➝ Multiplication forces both to numbers: `10 * 2`.

---

### Problem 8

```js
null == undefined  // true
```

➝ Special case: `null` only equals `undefined` (and itself) under `==`.

---

### Problem 9

```js
{} + []  // 0
```

➝ In expression context, `{}` is treated as a block, so it’s actually `+[]`.
`+[]` → `0`.

---

### Problem 10

```js
[] + {}  // "[object Object]"
```

➝ `[]` → `""`. `{}` → `"[object Object]"`. Concatenation gives `"[object Object]"`.


