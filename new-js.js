
// Scheme sl
if($(window).width() < 992) {
  var swiper = new Swiper(".w-scheme__sl", {
    spaceBetween: 16,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
  });
};

// Vantage sl
if($(window).width() < 992) {
  var swiper = new Swiper(".w-vantage__sl", {
    spaceBetween: 16,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
  });
};

// Range slider
$('.w-js-range-slider').ionRangeSlider({
  min: 1,
  max: 150,
  from: 60,
  postfix: " млн."
});