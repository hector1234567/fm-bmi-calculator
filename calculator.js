export class Calculator {
  _height = 0;
  _weight = 0;

  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  set centimeters(height) {
    this._height = height / 100;
  }

  set kilograms(weight) {
    this._weight = weight;
  }

  setHeightImperial(feet, inches) {
    this._height = 0.3048 * feet + 0.0254 * inches;
  }

  setWeightImperial(stones, libs) {
    this._weight = 6.350293 * stones + 0.453592 * libs;
  }

  renderResult() {
    const bmi = this._weight / (this._height * this._height);
    this.parentEl.querySelector(".result").innerHTML = this.getMarkup(bmi);
  }

  renderEmpty() {
    this.parentEl.querySelector(".result").innerHTML = `
        <div class="result__empty">
            <h3 class="result__heading">Welcome!</h3>
            <p class="result__text">
            Enter your height and weight and you’ll see your BMI result here
            </p>
        </div>
    `;
  }

  getClasification(bmi) {
    if (bmi < 18.5) {
      return "underweight";
    } else if (bmi < 24.9) {
      return "a healthy weight";
    } else if (bmi < 29.9) {
      return "overweight";
    } else {
      return "obese";
    }
  }

  get idealWeight() {
    return {
      min: (Math.round(185 * this._height * this._height) / 10).toFixed(1),
      max: (Math.round(249 * this._height * this._height) / 10).toFixed(1),
    };
  }

  getMarkup(bmi) {
    const roundedBmi = (Math.round(bmi * 10) / 10).toFixed(1);
    return `
        <div class="result__bmi">
            <p>Your BMI is...</p>
            <span>${roundedBmi}</span>
        </div>
        <p class="result__text">
            Your BMI suggests you're
            ${this.getClasification(roundedBmi)}. Your ideal weight is between
            <strong>${this.idealWeight.min} - ${this.idealWeight.max}</strong>.
        </p>
    `;
  }
}
