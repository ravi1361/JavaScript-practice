let questions = [
  {
    question: "Which language runs in the browser?",
    options: ["Java", "Python", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    question: "Which keyword creates a variable?",
    options: ["let", "loop", "create", "varible"],
    answer: "let"
  },
  {
    question: "Which method adds an item to an array?",
    options: ["add()", "push()", "insert()", "append()"],
    answer: "push()"
  }
];

let currentQuestion = 0;
let score = 0;

let question = document.querySelector("#question");
let options = document.querySelector("#options");
let next = document.querySelector("#next");
let scoreText = document.querySelector("#score");

function showQuestion() {
  let current = questions[currentQuestion];

  question.textContent = current.question;
  options.innerHTML = "";

  current.options.forEach(function (option) {
    let button = document.createElement("button");

    button.textContent = option;

    button.addEventListener("click", function () {
      if (option === current.answer) {
        score++;
      }
    });

    options.appendChild(button);
  });
}

next.addEventListener("click", function () {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    question.textContent = "Quiz Completed!";
    options.innerHTML = "";
    next.style.display = "none";
    scoreText.textContent = `Your Score: ${score}/${questions.length}`;
  }
});

showQuestion();