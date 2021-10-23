//Sub Problems
//get image to slide to left and right when click on the button
//get image to slide using arrow keys
//get image to slide using dots

//use translateX() to slide left and right
//use index number to assign image at current position
//overflow: hidden -> visible

// Variables
const sliderContainer = document.querySelector('.slider_container');
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

let curSlide = 0;
const maxSlide = slides.length;

// Functions

const goToSlide = function () {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
};

const nextSlide = function () {
  if (curSlide >= 0) {
    curSlide++;
  }
  if (curSlide === maxSlide) {
    curSlide = 0;
  }
  goToSlide();
};

const prevSlide = function () {
  if (curSlide === 0) {
    // curSlide = maxSlide - 1; !!!!!work here!!!!!
  }
  goToSlide();
};

function init() {
  goToSlide(0);
}
init();
//Event handlers

rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', prevSlide);
