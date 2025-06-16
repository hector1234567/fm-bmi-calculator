import { Calculator } from "./calculator.js";

const form = document.querySelector(".calculator__form");

const calculator = new Calculator(document.querySelector(".calculator"));

function calculateBodyMass(data) {
  const { type, height, weight, feet, inches, stones, libs } = data;

  if (type === "imperial") {
    if (!(feet && inches && stones && libs)) {
      return calculator.renderEmpty();
    }

    calculator.setHeightImperial(feet, inches);
    calculator.setWeightImperial(stones, libs);
  } else {
    if (!(height && weight)) {
      return calculator.renderEmpty();
    }

    calculator.centimeters = height;
    calculator.kilograms = weight;
  }
  calculator.renderResult();
}

function handleInput() {
  const formArr = new FormData(form);
  const formObj = {};
  formArr.entries().forEach(([name, value]) => {
    formObj[name] = value;
  });
  calculateBodyMass(formObj);
}

form.addEventListener("input", handleInput);
