var options = {

    url: "js/countries.json",
  
    getValue: "name",
  
    list: {
      match: {
        enabled: true
      }
    },
  
    theme: "square"
  };

   $('.slider-for').slick({
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    asNavFor: '.slider-nav',
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
            centerMode: true,
            infinite: true,
            centerPadding: '15px',
        }
      }
    ]
  });
  $('.slider-nav').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    asNavFor: '.slider-for',
  });

  $('.header-carus-init').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style="display: inline-block;"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17L1 9L9 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="" aria-disabled="false"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L9 9L1 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });

  $('.items-carus').slick({
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style="display: inline-block;"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17L1 9L9 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="" aria-disabled="false"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L9 9L1 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false
        }
      }
    ]
  });

  $('.top-cat-carus').slick({
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style="display: inline-block;"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17L1 9L9 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="" aria-disabled="false"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L9 9L1 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false
        }
      }
    ]
  });

$('.more-list a').click(function (e) {
    e.preventDefault(); 
    
    $('.other-cat-wrap').slideToggle();
    $(this).toggleClass('open');
    if($(window).width() < 992) {
      $('.other-cat-wrap-in').slick('setPosition');
    }
});

$(document).on('hidden.bs.modal', function (event) {
  if ($('.modal:visible').length) {
    $('body').addClass('modal-open');
  }
});

$('.header-top-mob-search').click(function (e) {
    e.preventDefault(); 
    $(this).toggleClass('active');
    $(".search").fadeToggle(); 
});

$(document).click(function(e) {
  if($(window).width() < 992) {
    if (!$(e.target).is('.search, .search *, .header-top-mob-search, .header-top-mob-search *')) { 
      $('.header-top-mob-search').removeClass('active');
      $(".search").fadeOut(); 
    }
  }
});

$('.show-hide-mobtop').click(function (e) {
    e.preventDefault(); 
    $('.header-mobile-wrap').addClass('open'); 
    $('.bg-plan').fadeIn();
    $('body').addClass('open-mobile');
});

$('.header-mobile-menu-in > ul > li > a').click(function (e) {
    e.preventDefault(); 
    
    if($(this).parent().hasClass('active')) {
      $('.header-mobile-menu-in > ul > li').removeClass('active');
      $('.header-mobile-menu-in > ul > li ul').slideUp();
    }
    else {
      $('.header-mobile-menu-in > ul > li').removeClass('active');
      $(this).parent().addClass('active');
      $('.header-mobile-menu-in > ul > li ul').slideUp();
      $(this).parent().find('ul').slideDown();
    }
});

if($('body .bg-plan').length){
  $('body .bg-plan').remove();
  $('body').prepend('<div class="bg-plan"></div>');
}
else {
  $('body').prepend('<div class="bg-plan"></div>');
}

$('.bg-plan').click(function (e) {
    e.preventDefault(); 
    $(this).fadeOut();
    $('body').removeClass('open-mobile');
    $('.header-mobile-wrap').removeClass('open'); 
});

$('.close-mob').click(function (e) {
  e.preventDefault(); 
  $('.bg-plan').fadeOut();
  $('body').removeClass('open-mobile');
  $('.header-mobile-wrap').removeClass('open'); 
});

$('.show-cat').click(function (e) {
    e.preventDefault(); 
    $('.header-bot-in > nav').slideToggle();
});

if($(window).width() < 992) {
  $('.other-cat-wrap-in').slick({
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style="display: inline-block;"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17L1 9L9 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="" aria-disabled="false"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L9 9L1 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false
        }
      }
    ]
  });
}

$('.footer-mob-menu > ul > li > a').click(function (e) {
  e.preventDefault(); 
  
  if($(this).parent().hasClass('active')) {
    $('.footer-mob-menu > ul > li').removeClass('active');
    $('.footer-mob-menu > ul > li ul').slideUp();
  }
  else {
    $('.footer-mob-menu > ul > li').removeClass('active');
    $(this).parent().addClass('active');
    $('.footer-mob-menu > ul > li ul').slideUp();
    $(this).parent().find('ul').slideDown();
  }
});

$('.tender-form-send button').click(function (e) {
    e.preventDefault(); 
    $('.tender-form').fadeOut(0);
    $('.thank-form').fadeIn();
});

$('.contact-form-left button').click(function (e) {
    e.preventDefault(); 
    $('.contact-form-in').fadeOut(0);
    $('.thank-form').fadeIn();
});


$(".phone-mask").inputmask("+7 (999) 999-99-99");

$('.carus-inside').slick({
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow: '<button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style="display: inline-block;"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17L1 9L9 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="" aria-disabled="false"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 17L9 9L1 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  responsive: [
    {
      breakpoint: 1430,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false
      }
    }
  ]
});

// style select
if($('select').length) {
  $('select').select2({
    minimumResultsForSearch: -1
      //matcher: matchCustom
  });
}

if($('.add-feed-file').length) {
  var fileInput  = document.querySelector( ".add-feed-file input" ),  
      button     = document.querySelector( ".add-feed-file label i" ),
      the_return = document.querySelector(".add-feed-file label");
        
  button.addEventListener( "keydown", function( event ) {  
      if ( event.keyCode == 13 || event.keyCode == 32 ) {  
          fileInput.focus();  
      }  
  });
  button.addEventListener( "click", function( event ) {
    fileInput.focus();
    return false;
  });  
  fileInput.addEventListener( "change", function( event ) {  
      $('.add-feed-file').append('<span>' + this.value + '</span>') 
  });  
}

$('.add-feed-file').on('click', 'span', function (e) {
    e.preventDefault(); 
    $(this).remove();
});


/////////////////// product +/-
$(document).ready(function() {
  $('.num-in span').click(function () {
      var $input = $(this).parents('.num-block').find('input.in-num');
    if($(this).hasClass('minus')) {
      var count = parseFloat($input.val()) - 1;
      count = count < 0 ? 0 : count;
      $input.val(count);
      if (count < 1) {
        if($('.one-size-check').length) {
          $(this).parents('.one-size-check').addClass('dis');
          sumAllSizes()
        }
      }
      else {
        if($('.one-size-check').length) {
          $(this).parents('.one-size-check').removeClass('dis');
          sumAllSizes()
        }
      }
      
    }
    else {
      var count = parseFloat($input.val()) + 1
      $input.val(count);
      if (count > 0) {
        if($('.one-size-check').length) {
          $(this).parents('.one-size-check').removeClass('dis');
          sumAllSizes()
        }
        $(this).parents('.num-block').find(('.minus')).removeClass('dis');
      }
    }
    
    $input.change();
    return false;
  });
  
});
// product +/-


if($('.date-inp').length) {
  $('.date-inp').datepicker([options])
}

if($(window).width() > 767) {
  $('.one-page-filt-bot .one-page-filt-bt a').click(function (e) {
      e.preventDefault(); 
      
      if ($(this).parents('.one-page-filt-bot').find('input:checked').length > 1) {
        var chooseNum = $(this).parents('.one-page-filt-bot').find('input:checked').length;
        $(this).parents('.one-page-filt').removeClass('active').addClass('has-choose').find('.one-page-filt-chooses span').text(chooseNum);
        $('.one-page-filt-bot').slideUp();

      }
      else if ($(this).parents('.one-page-filt-bot').find('input:checked').length == 1) {
        var chooseName = $(this).parents('.one-page-filt-bot').find('input:checked').next().next().text();
        $(this).parents('.one-page-filt').removeClass('active').addClass('has-choose').find('.one-page-filt-chooses span').text(chooseName);
        $('.one-page-filt-bot').slideUp();
        $('.clear-all').slideDown();
      }
      else {
      }
  });
}

if($(window).width() < 767) {
  // кнопка применить фильтр для моб
  $('.mob-conf-bt a').click(function (e) {
      e.preventDefault(); 

      $( ".one-page-filt-bot").each(function() {
        if($(this).find('input:checked').length >= 1) {
          var chooseNum = $(this).find('input:checked').length;
          $(this).parents('.one-page-filt').addClass('has-choose').find('.one-page-filt-chooses span').text(chooseNum);
          //$('.one-page-filt-bot').slideUp();
        }
      });

      $('.clear-all').slideDown();

  });

  // показать кнопку при выборе селекта
  $('.one-filter-check').click(function (e) {
    //e.preventDefault(); 
    $('.mob-conf-bt').fadeIn();
  });

  // кнопка позать фильтры
  $('.mob-show-filter').click(function (e) {
    e.preventDefault(); 
    $('.page-filter-left').slideToggle(); 
  });

  // Показать сайдбар
  $('.show-side, .search-page h1 span').click(function (e) {
      e.preventDefault(); 
      $(this).toggleClass('open');
      $('.page-side aside').css({ top : ($(this).position().top + $(this).height()) })
      $('.page-side aside .side-menu').slideToggle(); 
  });

  $(document).click(function(e) {
    if (!$(e.target).is('.show-side, .show-side *, .page-side, .page-side *')) { 
      /* тут указываем блоки которые недолжны реагировать на закрытие. В нашем случае это блок самой кнопки .block-bt и все что внутри нее (.block-bt *) */
      $('.page-side aside .side-menu').slideUp(); // Закрываем сам блок
      $('.show-side').removeClass('open');
    }
  });
}

$('.one-page-filt-chooses i').click(function (e) {
    e.preventDefault(); 
    $(this).parents('.one-page-filt').removeClass('active has-choose'); 
});

$('.one-page-filt-name').click(function (e) {
    e.preventDefault(); 
    if(!$(this).parents('.one-page-filt').hasClass('active')) {
      if($(window).width() > 767) {
        $('.one-page-filt-bot').slideUp();
        $('.one-page-filt').removeClass('active');
      }
      $(this).parents('.one-page-filt').toggleClass('active').find('.one-page-filt-bot').slideToggle(); 
    }
    else {
      if($(window).width() > 767) {
        $('.one-page-filt-bot').slideUp();
        $('.one-page-filt').removeClass('active');
      }
      else {
        $(this).parents('.one-page-filt').find('.one-page-filt-bot').slideUp();
        $(this).parents('.one-page-filt').removeClass('active');
      }
    }
});


// закрываем кликая на пустое место
$(document).click(function(e) {
  if (!$(e.target).is('.one-page-filt-bot, .one-page-filt-bot *, .one-page-filt, .one-page-filt *')) { 
    /* тут указываем блоки которые недолжны реагировать на закрытие. В нашем случае это блок самой кнопки .block-bt и все что внутри нее (.block-bt *) */
    $('.one-page-filt-bot').slideUp(); // Закрываем сам блок
    $('.one-page-filt').removeClass('active');
  }
});

/////////////////////////// product page
$('.product-big-slider-init').slick({
  arrows: false,
});

$('.one-thumb-prod a').click(function (e) {
    e.preventDefault(); 
    $('.one-thumb-prod').removeClass('active');
    $(this).parent().addClass('active');
    $('.product-big-slider-init').slick('slickGoTo', $(this).parent().index());
});


function sumAllSizes() {
  var sumNum = 0;
  $( ".one-size-check:not(.dis)").each(function() {
    sumNum = sumNum + parseInt($(this).find('input').val());
  });

  if(sumNum > 0) {
    $('.choose-sizes-stat').text(sumNum + ' товара');
    $('.bt-stat span').text(sumNum);
    $('.choose-sizes-top').addClass('choose-inp');    
  }
  else {
    $('.choose-sizes-stat').text(sumNum + ' товара');
    $('.bt-stat span').text(sumNum);
    $('.choose-sizes-top').removeClass('choose-inp');    
  }
  
  console.log(sumNum);
}

$('.choose-sizes-top').click(function (e) {
    e.preventDefault(); 
    $(this).toggleClass('active');
    $('.choose-sizes-bot').fadeToggle();
});

$('.bt-ok').click(function (e) {
  e.preventDefault(); 
  $(this).removeClass('active');
  $('.choose-sizes-bot').fadeOut();
});

$(document).click(function(e) {
  if (!$(e.target).is('.choose-sizes-top, .choose-sizes-top *, .choose-sizes-bot, .choose-sizes-bot *')) { 
    /* тут указываем блоки которые недолжны реагировать на закрытие. В нашем случае это блок самой кнопки .block-bt и все что внутри нее (.block-bt *) */
    $('.choose-sizes-bot').fadeOut(); // Закрываем сам блок
    $('.choose-sizes-top').removeClass('active');
  }
});

$('.prod-bt a').click(function (e) {
    e.preventDefault(); 

    if($(window).width() > 767) {
      $(this).fadeOut();
      $('.prod-video').addClass('open');
    }
    else {

      $(this).fadeOut();

      var vid = document.getElementById("myVideo");

      playVid();

      function playVid() {
          vid.play();
      }

      function pauseVid() {
          vid.pause();
      }
    }
});
////////////////////////// end product page




//FORM
$(".calling_form").click(function(){
    $(this).css('display', 'none');
    $('.form_hidden').slideDown("slow");
});

jQuery(".form_hidden").submit(function(){ 
    $(this).css('display', 'none');
    $('.partnership_block_first').css('display', 'none');
    $('.partnership_success').slideDown("slow");
    jQuery('.form_hidden').trigger( 'reset' );
    return false; 
});

$(".thx_button").click(function(){
    $('.partnership_success').css('display', 'none');
    $('.partnership_block_first').slideDown("slow");
    $('.calling_form').css('display', 'block');
});

jQuery(".new_form").submit(function(){ 
    $(this).css('display', 'none');
    $('.partnership_block_first').css('display', 'none');
    $('.partnership_success').slideDown("slow");
    jQuery('.form_hidden').trigger( 'reset' );
    return false; 
});

$(".thx_button").click(function(){
    $('.partnership_success').css('display', 'none');
    $('.partnership_block_first').slideDown("slow");
    $('.new_form').css('display', 'block');
});

//SEARCH HEADER
$(".search_header").focus(function(){
    $('.focus_search__wrapper').slideDown("fast");
});
$(".search_header").focusout(function(){
    $('.focus_search__wrapper').slideUp("fast");
});

//menu
$(".menu_box").click(function(){
    $(this).toggleClass("is-active");
    $(this).find('.hamburger').toggleClass("is-active");
    $('.mob_nav').toggleClass('is-active');
    $('body').toggleClass('menu-opened');
});

$(".header-bot--cat--new").click(function(){
    $('.mob_nav__new').toggleClass('is-active');
    $('body').toggleClass('menu-opened--inner');
});

$(".close_mob_nav").click(function(){
    $(this).find('.hamburger').removeClass("is-active");
    $('.mob_nav__new').removeClass('is-active');
    $('body').removeClass('menu-opened--inner');
});
$(".mob_nav_bg").click(function(){
    $(this).find('.hamburger').removeClass("is-active");
    $('.mob_nav__new').removeClass('is-active');
    $('body').removeClass('menu-opened--inner');
});



$('.catalog_slider').not('.unslick').each(function() {
    var slickInduvidual = $(this);
    var slideCount = null;
    slickInduvidual.on('init', function(event, slick) {
        slideCount = slick.slideCount;
        setSlideCount();
        setCurrentSlideNumber(slick.currentSlide);
    });
    slickInduvidual.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        setCurrentSlideNumber(nextSlide);
    });
    slickInduvidual.slick({
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
                centerMode: true,
                infinite: true,
                centerPadding: '15px',
            }
          }
        ]
    });

    function setSlideCount() {
        var $el = slickInduvidual.closest('.section').find('.to');
        $el.text((slideCount > 9) ? slideCount : '0' + +slideCount);
    }

    function setCurrentSlideNumber(currentSlide) {
        var $el = slickInduvidual.closest('.section').find('.from');
        $el.text((currentSlide > 8) ? currentSlide + 1 : '0' + +(currentSlide + 1));
    }

    
    $(' button.prev').click(function() {
        $(this).closest('section').find(".catalog_slider").slick('slickPrev');
    });
    $(' button.next').click(function() {
        $(this).closest('section').find(".catalog_slider").slick('slickNext');
    });
    //console.log(slideCount);
});

$('.colletion_catalog__slider').not('.unslick').each(function() {
    var slickInduvidual = $(this);
    var slideCount = null;
    slickInduvidual.on('init', function(event, slick) {
        slideCount = slick.slideCount;
        setSlideCount();
        setCurrentSlideNumber(slick.currentSlide);
    });
    slickInduvidual.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        setCurrentSlideNumber(nextSlide);
    });
    slickInduvidual.slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
          },
          {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
          }
        ]
    });

    function setSlideCount() {
        var $el = slickInduvidual.closest('.section').find('.to');
        $el.text((slideCount > 9) ? slideCount : '0' + +slideCount);
    }

    function setCurrentSlideNumber(currentSlide) {
        var $el = slickInduvidual.closest('.section').find('.from');
        $el.text((currentSlide > 8) ? currentSlide + 1 : '0' + +(currentSlide + 1));
    }

    
    $(' button.prev').click(function() {
        $(this).closest('section').find(".colletion_catalog__slider").slick('slickPrev');
    });
    $(' button.next').click(function() {
        $(this).closest('section').find(".colletion_catalog__slider").slick('slickNext');
    });
    //console.log(slideCount);
});


$('.how_working__slider').not('.unslick').each(function() {
    var slickInduvidual = $(this);
    var slideCount = null;
    slickInduvidual.on('init', function(event, slick) {
        slideCount = slick.slideCount;
        setSlideCount();
        setCurrentSlideNumber(slick.currentSlide);
    });
    slickInduvidual.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        setCurrentSlideNumber(nextSlide);
    });
    slickInduvidual.slick({
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
          },
          {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
          }
        ]
    });

    function setSlideCount() {
        var $el = slickInduvidual.closest('.section').find('.to');
        $el.text((slideCount > 9) ? slideCount : '0' + +slideCount);
    }

    function setCurrentSlideNumber(currentSlide) {
        var $el = slickInduvidual.closest('.section').find('.from');
        $el.text((currentSlide > 8) ? currentSlide + 1 : '0' + +(currentSlide + 1));
    }

    
    $(' button.prev').click(function() {
        $(this).closest('section').find(".how_working__slider").slick('slickPrev');
    });
    $(' button.next').click(function() {
        $(this).closest('section').find(".how_working__slider").slick('slickNext');
    });
    //console.log(slideCount);
});
//mob nav
$('.mob_nav-middle .nav-link').click( function() {
  $('.mob_nav-middle .nav-link').toggleClass('disabled');
  $(this).toggleClass('active').removeClass('disabled');
});

$('.js-client').click( function() {
  $('.client-menu').removeClass('inactive').toggleClass('visible');
});

$('.js-call').click( function() {
  $('.nav-element').toggleClass('inactive');
  $('.call-me').removeClass('inactive').toggleClass('visible');
});

$('.call-me a').click( function() {
  $('.nav-element').addClass('inactive');
  $('.thnx-wrapper').removeClass('inactive').toggleClass('visible');
});

$('.thnx-wrapper a').click( function() {
  $('.nav-element').addClass('inactive');
  $('.main-menu').removeClass('inactive').addClass('visible');
  $('.js-call').removeClass('active');
  $(this).closest('.thnx-wrapper').addClass('inactive');
  $('.call-me').removeClass('visible');
  $('.mob_nav-middle .nav-link').removeClass('disabled');
});

/*$('.js-client').click( function() {
  $('.nav-element').toggleClass('inactive');
  $('.client-menu').removeClass('inactive').toggleClass('visible');
  $('.thnx-wrapper').addClass('inactive');
  $('.call-me').addClass('inactive');
});

$('.js-call').click( function() {
  $('.nav-element').toggleClass('inactive');
  $('.call-me').removeClass('inactive').toggleClass('visible');
});

$('.call-me a').click( function() {
  $('.nav-element').addClass('inactive');
  $('.thnx-wrapper').removeClass('inactive').toggleClass('visible');
});

$('.thnx-wrapper a').click( function() {
  $('.nav-element').addClass('inactive');
  $('.main-menu').removeClass('inactive').addClass('visible');
  $('.js-call').removeClass('active');
  $(this).closest('.thnx-wrapper').addClass('inactive');
  $('.call-me').removeClass('visible');
});*/

$('.w-photo button').click( function() {
  $('.photo-wrapper').addClass('visible');
});

$('.photo-close').click( function() {
  $('.photo-wrapper').removeClass('visible');
});


//anchors
$(".scroll_anchor").on("click", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
  top = $(id).offset().top - 150;
  $('body,html').animate({scrollTop: top}, 1000);
});

//anchors
$(".search_w_photo .search_photo__wrapper button").on("click", function (event) {
  $('.photo_search__hidden').toggleClass('search_w_photo_visible');
});


$(".search_w_photo .close_js").on("click", function (event) {
  $('.photo_search__hidden').removeClass('search_w_photo_visible');
});


jQuery(".header_callback").submit(function(){ 
    $('.call-me-from').css('display', 'none');
    $('.call_me_form_thx').css('display', 'block');
    jQuery('.header_callback').trigger( 'reset' );
    return false; 
});

$(" .btn_green__thx").on("click", function (event) {
  $('.call-me-from').css('display', 'block');
  $('.call_me_form_thx').css('display', 'none');
});

//14.10
$(document).ready(function() {

  $('.w-submenu a').click( function() {
      $(this).closest('.w-submenu').find('.second-level').addClass('visible');
      return false;
  });

  $('.category-title .back').click( function() {
    $(this).closest('.w-submenu').find('.second-level').removeClass('visible');
  });

  $('.menu-dropdown > a').click( function() {
    $(this).closest('.menu-dropdown').toggleClass('active');
    $(this).closest('.menu-dropdown').find('ul').slideToggle();
  });


});
