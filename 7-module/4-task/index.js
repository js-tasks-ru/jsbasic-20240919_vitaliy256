import createElement from '../../assets/lib/create-element.js';
export default class StepSlider {
  constructor({steps, value = 0}) {
    this.value = value;
    this.steps = steps;
    this.elem = this.slider();
    this.thumb = this.elem.querySelector(".slider__thumb");
    this.progress = this.elem.querySelector(".slider__progress");
    this.sliderValues = this.elem.querySelector(".slider__value");
    this.elem.addEventListener('pointerdown', this.down);
    this.elem.addEventListener('click', this.click);
  }

  slider = () => {
    return createElement(`
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
  };

  change = () => {
    const slider = new CustomEvent('slider-change', {
      bubbles: true,
      detail: this.value
    });
    this.elem.dispatchEvent(slider);
  }

  computed = leftRelative => {
    const segments = this.steps - 1;
    const approximateValue = leftRelative * segments;
    return Math.round(approximateValue);
  }

  update = value => {
    const percents = (value / (this.steps - 1)) * 100;
    this.thumb.style.left = `${percents}%`;
    this.progress.style.width = `${percents}%`;
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

  down = () => {
    let move = e => {
      this.elem.classList.add('slider_dragging');
      let left = e.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;

      if (leftRelative > 1) {leftRelative = 1;}
      if (leftRelative < 0) {leftRelative = 0;}

      let percentsLeft = leftRelative * 100;
      let progress = this.elem.querySelector('.slider__progress');
      let thumbSlider = this.elem.querySelector('.slider__thumb');
      thumbSlider.style.left = `${percentsLeft}%`;
      progress.style.width = `${percentsLeft}%`;
      let sector = this.steps - 1;
      let approximateValue = leftRelative * sector;
      let value = Math.round(approximateValue);
      this.sliderValues.textContent = value;
      this.value = value;
    };

    let up = () => {
      this.change(this.value);
      this.elem.classList.remove('slider_dragging');
      document.removeEventListener('pointermove', move);
      document.onpointerup = null;
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
}
