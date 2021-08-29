var base = document.querySelector("#base");
var height = document.querySelector("#height");
var calcBtn = document.querySelector("#calc-area-btn");
var outputDiv = document.querySelector("#output");

function calcArea(baseLen, heightLen) {
  var area = (1 / 2) * baseLen * heightLen;

  outputDiv.innerText = `The area of the triangle is ${area}cm²`;
}

function clickHandler() {
  let baseLength = Number(base.value);
  let heightLength = Number(height.value);

  if (baseLength && heightLength) {
    calcArea(baseLength, heightLength);
  } else {
    outputDiv.innerText = `Please Enter all the fields. 😡`;
  }
}
calcBtn.addEventListener("click", clickHandler);
