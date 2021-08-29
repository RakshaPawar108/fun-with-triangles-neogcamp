const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answer-btn");
const outputDiv = document.querySelector("#output");

const correctAnswers = [
  "90",
  "right",
  "equilateral",
  "isosceles",
  "acute",
  "hypotenuse",
];

function calcScore() {
  let score = 0;
  let arrIndex = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[arrIndex]) {
      score += 1;
    }
    arrIndex += 1;
  }

  outputDiv.innerText = "Your score is " + score;
}

submitBtn.addEventListener("click", calcScore);
