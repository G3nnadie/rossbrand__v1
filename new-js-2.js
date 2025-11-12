
$(document).ready(function () {

  // Header fix
  function bodyIndentTop() {
    let headerHieght = $('.q-header--fix').outerHeight(true);
    $('.q-body-topIndent').css('padding-top', headerHieght);
  }
  bodyIndentTop();

  $(window).resize(function() {
    bodyIndentTop();
  });

  $(window).scroll(function() { 
    var top = $(document).scrollTop();
    if (top > 40) {
      $('.q-header--fix').addClass('q-header--fix--active');
    }
    else {
      $('.q-header--fix').removeClass('q-header--fix--active');
    }
  });

  // Open nav
  $('.q-navbar-toggle').on('click', function() {
    $('.q-header--fix').toggleClass('q-heaer--fix--noScroll')
    $('.q-nav').slideToggle(200);
    $(this).toggleClass('q-active');
  });

  // Open subnav
  $('.q-nav__item--drop .q-nav__link span').on('click', function(e) {
    e.preventDefault();
    $(this).parent().next().slideToggle(200);
  })

  // Nav panel open mob
  $('.q-nav__panelMob-item--cliendS').on('click', function(e) {
    e.preventDefault();
    $('.q-nav__clientS .q-subnav').slideToggle(200);
    $(this).toggleClass('q-nav__panelMob-item--active');
  });

  $('.q-nav__panelMob-item--phone').on('click', function() {
    $('.q-nav__form').slideToggle(200);
    $(this).toggleClass('q-nav__panelMob-item--active');
  });

  // Open messengers
  $('.q-messengers__open').on('click', function() {
    $('.q-messengers__item').toggleClass('q-messengers__item--active');
  });

  // Catalog aside open list
  // $('.one-side-menu:first-child').addClass('one-side-menu--open');
  // $('.one-side-menu:first-child').find('.one-side-menu-list').show();

  $('.one-side-menu-arrow').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.one-side-menu').toggleClass('one-side-menu--open');
    $(this).parents('.one-side-menu-tit').next().slideToggle(200);
  });

  // Solutions
  $('.q-solutions__dn').hide();
  $('.q-solutions__more .q-btn').on('click', function(e) {
    e.preventDefault();
    $('.q-solutions__dn').toggle(200);
    if ($(this).text() == 'Показать еще') {
      $(this).text('Показать меньше')
    }
    else {
      $(this).text('Показать еще');
    }

    const sWrap = $('.q-solutions__wrap');
    sWrap.toggleClass('q-solutions__wrap--fix');

    if (sWrap.hasClass('q-solutions__wrap--fix')) {
      $('.inner-wrapper-sticky').removeClass('inner-wrapper-sticky-stop');
      $('.q-solutions__wrap--fix').stickySidebar({
        topSpacing: 60,
        bottomSpacing: 30,
        containerSelector: '.q-solutions__inner'
      });
    } else {
      $('.inner-wrapper-sticky').addClass('inner-wrapper-sticky-stop');
    }
  });

  // Hero sl
  var swiper = new Swiper(".q-hero__sl", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination-hero",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // 768: {
        
      // },
    },
  });

  // Tasks
  var swiper2 = new Swiper(".q-tasks__nav", {
    spaceBetween: 0,
    onlyExternal: true,
    allowTouchMove: false,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    watchOverflow: true,
    watchSlidesVisibility: true,
  });

  var swiper3 = new Swiper(".q-tasks__body", {
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    spaceBetween: 24,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination-tasks",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper2,
    },
    breakpoints: {
      992: {
        onlyExternal: true,
        allowTouchMove: false,
      },
    },
  });

  document.querySelectorAll(".m-tasks__next").forEach((btn) => {
    btn.addEventListener("click", () => {
      swiper3.slideNext();
    });
  });

});