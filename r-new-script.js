
$(document).ready(function () {

  // Modal

  $('.r-quick.view-js').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    const modalId = $(this).data('modal-name');
    const $modal = $('.' + modalId);

    if ($modal.length) {
      $modal.fadeIn(200);
    }
  });

  $(document).on('click', '.r-modal', function(e) {
    if ($(e.target).closest('.r-modal__box').length === 0) {
      $(this).fadeOut(200);
    }
  });

  $(document).on('click', '.r-modal__close', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).closest('.r-modal').fadeOut(200);
  });

  $(document).on('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      $('.r-modal').fadeOut(200);
    }
  });

  // Cancel link
  $('.r-advantages__item').on('click', function(e) {
    e.preventDefault();
  });

  // Product sl
  var swiper = new Swiper(".r-product__sl", {
    loop: false,
    spaceBetween: 20,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination-hero",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next--r-product",
      prevEl: ".swiper-button-prev--r-product",
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
    },
  });

  // Advantages sl
  if($(window).width() < 768){
    var swiper = new Swiper(".r-advantages__sl", {
      loop: false,
      spaceBetween: 20,
      slidesPerView: 'auto',
      observer: true,
      observeSlideChildren: true,
      observeParents: true,
      pagination: {
        el: ".swiper-pagination-hero",
        clickable: true,
      },
      breakpoints: {
        // 992: {
        //   spaceBetween: 20,
        //   slidesPerView: 4,
        // },
      },
    });
  };

  // Product sl
  var swiper = new Swiper(".r-vantage__sl", {
    loop: false,
    spaceBetween: 16,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next--r-vantage",
      prevEl: ".swiper-button-prev--r-vantage",
    },
    breakpoints: {
      768: {
        spaceBetween: 24,
      },
    },
  });

});