const inputs = document.querySelectorAll(".side-input");
const outputDiv = document.querySelector("#output");
const calcBtn = document.querySelector("#calculate-hypotenuse");

function calcSquareSum(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

function calculateHypotenuse() {
  const side1 = Number(inputs[0].value);
  const side2 = Number(inputs[1].value);

  if (side1 && side2) {
    const sumOfSquares = calcSquareSum(side1, side2);
    const hypotenuse = Math.sqrt(sumOfSquares);
    outputDiv.innerText =
      "The hypotenuse of the triangle is " + hypotenuse + " 😁";
  } else {
    outputDiv.innerText = "Please input both the sides. 😡";
  }
}

// Event Listener
calcBtn.addEventListener("click", calculateHypotenuse);
