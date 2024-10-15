function initCarousel() {
  const self = document.querySelector('.carousel');
  const buttonRight = document.querySelector('.carousel__arrow_right');
  const buttonLeft = document.querySelector('.carousel__arrow_left');
  const selfSlides = document.querySelector('.carousel__slide');
  const selfInner = document.querySelector('.carousel__inner');
  let lengthSlides = selfSlides.length;
  let count = 0;

  function click(event) {
    if (event.target.closest('.carousel__arrow_right')) {count++;}
    if (event.target.closest('.carousel__arrow_left')) {count--;}
    shift();
  }

  self.addEventListener('click', click);

  function shift() {
    const move = selfInner.offsetWidth * (-count);
    selfInner.style.transform = `translateX(${move}px)`;
  }

  let condition = () => {
    // buttonRight.style.display = count === (lengthSlides - 1) ? 'none' : '';
    buttonRight.style.display = count <= 3 ? 'none' : '';
    buttonLeft.style.display = count === 0 ? 'none' : '';
  };
  condition();
}
