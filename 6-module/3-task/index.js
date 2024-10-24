import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.count = 0;
    this.lengthSlides = 0;
    this.elem = this.carousel();
    this.elem.addEventListener('click', this.click);
  }

  carousel() {
    const carousel = document.createElement('div');
    carousel.className = 'carousel';
    carousel.append(this.slid());
    this.buttons().map((it) => carousel.appendChild(it));
    return carousel;
  }

  slid() {
    let inner = document.createElement('div');
    inner.className = 'carousel__inner';
    this.slides.map((elem) => {
      const self = createElement(`
 <div class="carousel__slide" data-id="${elem.id}">
   <img src="../../assets/images/carousel/${elem.image}" class="carousel__img" alt="slide">
   <div class="carousel__caption">
    <span class="carousel__price">€${elem.price.toFixed(2)}</span>
    <div class="carousel__title">${elem.name}</div>
    <button type="button" class="carousel__button">
      <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
 </div>`);
      inner.appendChild(self);
    });
    return inner;
  }

  buttons() {
    let right = createElement(`
     <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
    `);
    let left = createElement(`
    <div class="carousel__arrow carousel__arrow_left" style="display: none">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `);
    return [right, left];
  }

  click = (e) => {
    const right = this.elem.querySelector(".carousel__arrow_right");
    const left = this.elem.querySelector(".carousel__arrow_left");
    const inner = this.elem.querySelector(".carousel__inner");
    this.lengthSlides = inner.offsetWidth;
    if (e.target.closest('.carousel__arrow_right')) {this.count++;}
    if (e.target.closest('.carousel__arrow_left')) {this.count--;}
    if (e.target.closest('.carousel__button')) {
      let id = e.target.closest(".carousel__slide").dataset.id;
      let add = new CustomEvent('product-add', {
        bubbles: true,
        detail: id
      });
      this.elem.dispatchEvent(add);
    }
    this.shift(inner);
    this.condition(right, left);
  }

  shift(elem) {
    const move = this.lengthSlides * -this.count;
    elem.style.transform = `translateX(${move}px)`;
  }

  condition(right, left) {
    // right.style.display = this.count === this.lengthSlides - 1 ? 'none' : '';
    right.style.display = this.count <= 3 ? 'none' : '';
    left.style.display = this.count === 0 ? 'none' : '';
  }
}
