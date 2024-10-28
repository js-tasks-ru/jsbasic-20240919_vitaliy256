import createElement from '../../assets/lib/create-element.js';
export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.value = value;
    this.steps = steps;
    this.elem = this.slider();
    this.sliderValues = this.elem.querySelector('.slider__value');
    this.thumb = this.elem.querySelector('.slider__thumb');
    this.progress = this.elem.querySelector('.slider__progress');
    this.elem.addEventListener('click', this.click);
  }

  slider = () =>
    createElement(`
      <div class="slider">
        <div class="slider__thumb">
          <span class="slider__value">0</span>
        </div>
        <div class="slider__progress"></div>
        <div class="slider__steps">
          <span class="slider__step-active"></span>
          ${"<span></span>".repeat(this.steps - 1)}
        </div>
      </div>`);

  computed = leftRelative => {
    const segments = this.steps - 1;
    const approximateValue = leftRelative * segments;
    return Math.round(approximateValue);
  }

  update = value => {
    const valuePercents = (value / (this.steps - 1)) * 100;
    this.progress.style.width = `${valuePercents}%`;
    this.thumb.style.left = `${valuePercents}%`;
    this.sliderValues.textContent = value;
  }

  click = e => {
    const left = e.clientX - this.elem.getBoundingClientRect().left;
    const leftRelative = left / this.elem.offsetWidth;
    const value = this.computed(leftRelative);
    this.update(value);
    this.value = value;
    this.changeEvent(value);
  };

  changeEvent = () => {
    const sliderChange = new CustomEvent('slider-change', {
      bubbles: true,
      detail: this.value
    });
    this.elem.dispatchEvent(sliderChange);
  }
}
