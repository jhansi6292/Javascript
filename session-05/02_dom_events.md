# DOM Events Recap for To-Do List

The To-Do List App relies heavily on **events**.  
Let’s quickly recap the most important ones.

---

## 1. Click Event
```html
<button id="btn">Click Me</button>
<script>
  document.getElementById("btn").addEventListener("click", function() {
    alert("Button was clicked!");
  });
</script>
````

---

## 2. Input Event

```html
<input id="taskInput" placeholder="Type a task">
<script>
  document.getElementById("taskInput").addEventListener("input", function(event) {
    console.log("You typed: " + event.target.value);
  });
</script>
```

---

## 3. Keypress (Enter Key)

```html
<input id="taskInput" placeholder="Type and press Enter">
<script>
  document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      console.log("You pressed Enter: " + event.target.value);
    }
  });
</script>
```

---

With these three event types, you can build a fully interactive To-Do List App.