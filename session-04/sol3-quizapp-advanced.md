Let’s put together a **complete Quiz App with UI** in plain HTML, CSS, and JavaScript.
This is an upgraded version of what we scaffolded in Session 4.

It will:
* Display one question at a time
* Provide multiple-choice answers
* Check answers when user clicks an option
* Keep score
* Show final results

Here’s the **code (quiz-app.html)**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Quiz App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f5f5f5;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    #quiz-container {
      background: white;
      padding: 20px;
      border-radius: 10px;
      width: 400px;
      box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
      text-align: center;
    }
    #question {
      font-size: 18px;
      margin-bottom: 15px;
    }
    .btn {
      display: block;
      width: 100%;
      margin: 8px 0;
      padding: 10px;
      border: none;
      border-radius: 5px;
      background: #3498db;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }
    .btn:hover {
      background: #2980b9;
    }
    #feedback {
      margin-top: 15px;
      font-weight: bold;
    }
    #score {
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div id="quiz-container">
    <h2 id="question">Question will appear here</h2>
    <div id="options"></div>
    <p id="feedback"></p>
    <p id="score">Score: 0</p>
    <button id="nextBtn" style="display:none;" class="btn">Next Question</button>
  </div>

  <script>
    let questions = [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "22"],
        answer: "4"
      },
      {
        question: "What color is the sky?",
        options: ["Blue", "Green", "Red", "Yellow"],
        answer: "Blue"
      }
    ];

    let currentQuestion = 0;
    let score = 0;

    let questionEl = document.getElementById("question");
    let optionsEl = document.getElementById("options");
    let feedbackEl = document.getElementById("feedback");
    let scoreEl = document.getElementById("score");
    let nextBtn = document.getElementById("nextBtn");

    function showQuestion() {
      let q = questions[currentQuestion];
      questionEl.textContent = q.question;
      optionsEl.innerHTML = "";
      feedbackEl.textContent = "";
      nextBtn.style.display = "none";

      q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("btn");
        btn.addEventListener("click", () => checkAnswer(option));
        optionsEl.appendChild(btn);
      });
    }

    function checkAnswer(selected) {
      let correct = questions[currentQuestion].answer;

      if (selected === correct) {
        feedbackEl.textContent = "✅ Correct!";
        score++;
      } else {
        feedbackEl.textContent = "❌ Wrong! Correct answer: " + correct;
      }

      scoreEl.textContent = "Score: " + score;

      // disable all buttons after answering
      let buttons = optionsEl.querySelectorAll("button");
      buttons.forEach(btn => btn.disabled = true);

      nextBtn.style.display = "block";
    }

    nextBtn.addEventListener("click", () => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        endQuiz();
      }
    });

    function endQuiz() {
      questionEl.textContent = "Quiz Finished!";
      optionsEl.innerHTML = "";
      feedbackEl.textContent = "🎉 Your final score is " + score + " out of " + questions.length;
      nextBtn.style.display = "none";
    }

    showQuestion();
  </script>
</body>
</html>
```

---