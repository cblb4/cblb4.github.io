// JavaScript for arrow scrolling
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const serviceContainer = document.querySelector('.service-container');

// Scroll distance per click
const scrollAmount = 300;

leftArrow.addEventListener('click', () => {
  serviceContainer.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

rightArrow.addEventListener('click', () => {
  serviceContainer.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});
