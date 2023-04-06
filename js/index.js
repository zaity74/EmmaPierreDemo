// Arrows
let arrowLeft = document.querySelector('.bi-arrow-left-circle');
let arrowRight = document.querySelector('.bi-arrow-right-circle');

// Slide container
let slideContainer = document.querySelector('.slide-container');
// Onclick event
function slideRight() {
    slideContainer.style.transform = 'translateX(-10%)';
  }
  function slideLeft() {
    slideContainer.style.transform = 'translateX(10%)';
  }

  arrowRight.addEventListener('click',slideRight);
  arrowLeft.addEventListener('click',slideLeft);