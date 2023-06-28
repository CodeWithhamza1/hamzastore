const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.slide-item');

// Responsive Carousel
let carouselWidth = carouselSlide.clientWidth;
let slideIndex = 0;
let translateX = 0;

function updateCarouselWidth() {
  carouselWidth = carouselSlide.clientWidth;
  translateX = -slideIndex * carouselWidth;
  carouselSlide.style.transform = `translateX(${translateX}px)`;
}

function slide() {
  translateX = -slideIndex * carouselWidth;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  carouselSlide.style.transform = `translateX(${translateX}px)`;
}

window.addEventListener('resize', () => {
  updateCarouselWidth();
});

carouselSlide.addEventListener('transitionend', () => {
  carouselSlide.style.transition = '';
});

// Automatic Slide
function automaticSlide() {
  if (slideIndex === carouselImages.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  slide();
}

setInterval(automaticSlide, 3000);















$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.menu').slideToggle('slow', function () {
            if ($(this).is(':hidden')) {
                $(this).removeAttr('style');
            }
        });
    });
});