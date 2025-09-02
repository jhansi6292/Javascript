//Step 1 - Declare Questions and Answers in Separate Arrays
let questions = [
    "What is the capital of France?",
    "What is 2 + 2?",
    "What color is the sky?"
  ];
  
  let answers = [
    "Paris",
    "4",
    "Blue"
  ];

//Step 2 - Ask Questions and log user response in console
//   for (let i = 0; i < questions.length; i++) {
//     let userAnswer = prompt(questions[i]);
//     console.log("You answered: " + userAnswer);
//   }

//step 3 - Enhance step 2 to check answers and keep score
let score = 0;

for (let i = 0; i < questions.length; i++) {
  let userAnswer = prompt(questions[i]);

  if (userAnswer.toLowerCase() === answers[i].toLowerCase()) {
    console.log("Correct!");
    score++;
  } else {
    console.log("Wrong! The correct answer is " + answers[i]);
  }
}

console.log("Your final score is: " + score);
alert("Your final score is: " + score);