console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  const numberA = parseInt(event.target.elements.numberA.value);
  const numberB = parseInt(event.target.elements.numberB.value);
  let radioValue = event.target.elements.operator.value;
  console.log(numberA);
  console.log(numberB);
  console.log(radioValue);

  switch (radioValue) {
    case "addition":
      result = add(numberA, numberB);
      break;
    case "subtraction":
      result = subtract(numberA, numberB);
      break;
    case "multiplication":
      result = multiply(numberA, numberB);
      break;
    case "division":
      result = divide(numberA, numberB);
      break;
    default:
      break;
  }

  console.log(result);

  resultOutput.textContent = result;
});
