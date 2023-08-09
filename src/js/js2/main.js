(function($) {
  "use strict";

  // Css Function Js
    const bgSelector = $("[data-bg-img]");
    bgSelector.each(function (index, elem) {
      let element = $(elem),
        bgSource = element.data('bg-img');
      element.css('background-image', 'url(' + bgSource + ')');
    });
    
    const Bgcolorcl = $("[data-bg-color]");
    Bgcolorcl.each(function (index, elem) {
      let element = $(elem),
        Bgcolor = element.data('bg-color');
      element.css('background-color', Bgcolor);
    });

  // Responsive Menu
  var $offcanvasNav = $("#offcanvasNav a");
  $offcanvasNav.on("click", function () {
    var link = $(this);
    var closestUl = link.closest("ul");
    var activeLinks = closestUl.find(".active");
    var closestLi = link.closest("li");
    var linkStatus = closestLi.hasClass("active");
    var count = 0;

    closestUl.find("ul").slideUp(function () {
      if (++count == closestUl.find("ul").length)
        activeLinks.removeClass("active");
    });

    if (!linkStatus) {
      closestLi.children("ul").slideDown();
      closestLi.addClass("active");
    }
  });

  // Menu Activeion Js
    var cururl = window.location.pathname;
    var curpage = cururl.substr(cururl.lastIndexOf('/') + 1);
    var hash = window.location.hash.substr(1);
    if((curpage === "" || curpage === "/" || curpage === "admin") && hash === "")
      {
      } else {
        $(".header-navigation li").each(function()
      {
        $(this).removeClass("active");
      });
      if(hash != "")
        $(".header-navigation li a[href='"+hash+"']").parents("li").addClass("active");
      else
      $(".header-navigation li a[href='"+curpage+"']").parents("li").addClass("active");
    }

  // Swiper Hero Slider One JS
  var mainlSlider = new Swiper('.hero-slider-container', {
    slidesPerView : 1,
    slidesPerGroup: 1,
    loop: true,
    speed: 700,
    spaceBetween: 0,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });

  // Swiper Hero Slider Two JS
  var mainlSliderTwo = new Swiper('.hero-two-slider-container', {
    slidesPerView : 1,
    slidesPerGroup: 1,
    loop: true,
    speed: 700,
    spaceBetween: 0,      
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".hero-two-slider-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  // Product Banner Slider Js
  var brandLogoSlider = new Swiper('.banner-slider-container', {
    autoplay: false,
    slidesPerView : 3,
    spaceBetween: 30,
    speed: 500,
    breakpoints: {
      1200: {
        slidesPerView : 3,
      },
      768: {
        slidesPerView : 3,
        spaceBetween: 30,
      },
      320: {
        slidesPerView : 2,
        spaceBetween: 15,
      },
      0: {
        slidesPerView : 1,
      },
    },
  });

  // Brand Logo Slider Js
  var brandLogoSlider = new Swiper('.brand-logo-slider-container', {
    autoplay: false,
    slidesPerView : 5,
    spaceBetween: 100,
    speed: 500,
    breakpoints: {
      1200: {
        slidesPerView : 5,
      },
      768: {
        slidesPerView : 4,
      },
      576: {
        slidesPerView : 3,
      },
      480: {
        slidesPerView : 3,
      },
      0: {
        slidesPerView : 2,
      },
    },
  });

  // Product Details Slider Nav
  var productNav = new Swiper('.single-product-nav-slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    mousewheel: {
      invert: true,
    },
  });

  // Product Details Slider Thumb
  var productThumb = new Swiper('.single-product-thumb-slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: productNav
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  // Product Modal Slider
  var ProductThumb = new Swiper('.single-product-quick-view-slider', {
    slidesPerView : 1,
    loop: true,
    speed: 1000,
    spaceBetween : 0,
    autoplay: false,
    navigation: {
      nextEl: '.single-product-quick-view-slider .swiper-button-next',
      prevEl: '.single-product-quick-view-slider .swiper-button-prev',
    },
    freeMode: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });

  // Mouse Move Parallax
  document.addEventListener("mousemove", parallax);
    function parallax(e) {
    if(window.innerWidth >= 768){
      this.querySelectorAll('.mousemove-layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const x = (window.innerWidth - e.pageX * speed)/80;
        const y = (window.innerHeight - e.pageY * speed)/80;
        layer.style = `transform: translateX(${x}px) translateY(${y}px) !important`;
      })
    }
  }

  // Checkout Toggle Active
  $('.checkout-coupon-active').on('click', function(e) {
    e.preventDefault();
    $('.checkout-coupon-content').slideToggle(1000);
  });

  //Checkout Page Checkbox Accordion
  $("#create_pwd").on("change", function() {
    $(".account-create").slideToggle("100");
  });

  $("#ship_to_different").on("change", function() {
    $(".ship-to-different").slideToggle("100");
  });

  $('.checkout-toggle').on('click', function() {
    $('.open-toggle').slideToggle(1000);
  });

  var checked = $( '.sin-payment input:checked' )
  if(checked){
    $(checked).siblings( '.payment-box' ).slideDown(900);
  };
  $( '.sin-payment input' ).on('change', function() {
    $( '.payment-box' ).slideUp(900);
    $(this).siblings( '.payment-box' ).slideToggle(900);
  });

  // Nice Select JS
  $('select').niceSelect();

  // Product Quantity JS
  var proQty = $(".pro-qty");
  proQty.append('<div class= "dec qty-btn">-</div>');
  proQty.append('<div class="inc qty-btn">+</div>');
  $('.qty-btn').on('click', function (e) {
    e.preventDefault();
    var $button = $(this);
    var oldValue = $button.parent().find('input').val();
    if ($button.hasClass('inc')) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    $button.parent().find('input').val(newVal);
  });

  // Ajax Contact Form JS
  var form = $('#contact-form');
  var formMessages = $('.form-message');

  $(form).submit(function(e) {
    e.preventDefault();
    var formData = form.serialize();
    $.ajax({
      type: 'POST',
      url: form.attr('action'),
      data: formData
    }).done(function(response) {
      // Make sure that the formMessages div has the 'success' class.
      $(formMessages).removeClass('alert alert-danger');
      $(formMessages).addClass('alert alert-success fade show');

      // Set the message text.
      formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
      formMessages.append(response);

      // Clear the form.
      $('#contact-form input,#contact-form textarea').val('');
    }).fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
      $(formMessages).removeClass('alert alert-success');
      $(formMessages).addClass('alert alert-danger fade show');

      // Set the message text.
      if (data.responseText === '') {
        formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
        formMessages.append(data.responseText);
      } else {
        $(formMessages).text('Oops! An error occurred and your message could not be sent.');
      }
    });
  });

  // Scroll Top Hide Show
  var varWindow = $(window);
  varWindow.on('scroll', function(){
    if ($(this).scrollTop() > 250) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  //Scroll To Top Animate
  $('.scroll-to-top').on('click', function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

})(window.jQuery);