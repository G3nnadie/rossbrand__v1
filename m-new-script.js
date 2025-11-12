
$(document).ready(function () {

  // Categories sl
  var swiper = new Swiper(".m-categories__sl", {
    loop: false,
    spaceBetween: 20,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    breakpoints: {
      768: {
        slidesPerView: 4,
        allowTouchMove: false,
      },
    },
  });

});