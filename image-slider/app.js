//Sub Problems
//get image to slide to left and right when click on the button
//get image to slide using arrow keys
//get image to slide using dots

//use translateX() to slide left and right
//use index number to assign image at current position
//overflow: hidden -> visible

// Variables
const slider = function () {
  const sliderContainer = document.querySelector('.slider_container');
  const slides = document.querySelectorAll('.slide');
  const leftBtn = document.querySelector('.left');
  const rightBtn = document.querySelector('.right');
  const dotsContainer = document.querySelector('.dots_container');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach((_, i) => {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dot" data-value=${i}></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dot')
      .forEach((dot) => dot.classList.remove('dot_active'));
    document
      .querySelector(`.dot[data-value="${slide}"]`)
      .classList.add('dot_active');
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    if (curSlide >= 0) {
      curSlide++;
    }
    if (curSlide === maxSlide) {
      curSlide = 0;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    }
    if (curSlide > 0) {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  function init() {
    createDots();
    goToSlide(0);
    activateDot(0);
  }
  init();

  //Event handlers

  rightBtn.addEventListener('click', nextSlide);

  leftBtn.addEventListener('click', prevSlide);

  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dot')) {
      const slide = e.target.dataset.value;
      goToSlide(slide);
      activateDot(slide);
    }
  });

  window.addEventListener('keydown', function (e) {
    if (e.code === 'ArrowLeft') prevSlide();

    if (e.code === 'ArrowRight') nextSlide();
  });
};
slider();
