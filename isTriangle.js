const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputDiv = document.querySelector("#output");

function calcSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

// Event Handler
function checkIsTriangle() {
  const angle1 = Number(inputs[0].value);
  const angle2 = Number(inputs[1].value);
  const angle3 = Number(inputs[2].value);
  const sumOfAngles = calcSumOfAngles(angle1, angle2, angle3);

  if (angle1 && angle2 && angle3) {
    if (sumOfAngles === 180) {
      outputDiv.innerText = "Yayyy!! Angles form a triangle! 🥳";
    } else {
      outputDiv.innerText = "Uh Oh! The angles don't form a triangle. 😔";
    }
  } else {
    outputDiv.innerText = "Please input all three fields. 😡";
  }
}

// Event Listener
isTriangleBtn.addEventListener("click", checkIsTriangle);
