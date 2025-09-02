# Building the To-Do List App

Let’s build the To-Do List App step by step.

---

## Step 1: HTML Structure
Create an `index.html` file with:

```html
<h2>My To-Do List</h2>
<input id="taskInput" placeholder="Enter a task">
<button id="addBtn">Add Task</button>
<ul id="taskList"></ul>
````

* `taskInput` → for typing tasks
* `addBtn` → button to add tasks
* `taskList` → list of tasks

---

## Step 2: Add a Task

```js
let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {
  let taskText = input.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;
  taskList.appendChild(li);

  input.value = ""; // clear input
});
```

---

## Step 3: Mark Task as Complete

```js
taskList.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.style.textDecoration = "line-through";
  }
});
```

---

## Step 4: Delete a Task

Add a **delete button** for each task:

```js
addBtn.addEventListener("click", function() {
  let taskText = input.value;
  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;

  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.style.marginLeft = "10px";

  delBtn.addEventListener("click", function() {
    taskList.removeChild(li);
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = "";
});
```

---

Now you can **add, complete, and delete tasks** in your To-Do List!
