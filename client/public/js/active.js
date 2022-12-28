(function ($) {
	"use strict";

	/*------ Sticky menu start ------*/
	var $window = $(window);
	$window.on('scroll', function () {
		var scroll = $window.scrollTop();
		if (scroll < 300) {
			$(".sticky").removeClass("is-sticky");
		} else {
			$(".sticky").addClass("is-sticky");
		}
	});
	/*------ Sticky menu end ------*/


	/*-------- Background Image JS start --------*/
	var bgSelector = $(".bg-img");
	bgSelector.each(function (index, elem) {
		var element = $(elem),
			bgSource = element.data('bg');
		element.css('background-image', 'url(' + bgSource + ')');
	});
	/*-------- Background Image JS start --------*/


	/*------- Image zoom effect start -------*/
	$('.img-zoom').zoom();
	/*------- Image zoom effect end -------*/


	/*----- sticky sidebar start -----*/
	$('.is-stickyy').stickySidebar({
		topSpacing: 130,
		bottomSpacing: -20
	}); 
	/*----- sticky sidebar end -----*/


	/*------- tooltip active js start -------*/
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})
	/*------- tooltip active js start -------*/


	/*------ Hero main slider active start ------*/
	$('.hero-slider-active').slick({
		autoplay: false,
		fade: true,
		dots: true,
		arrows: false,
		speed: 1500,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		responsive: [{
			breakpoint: 768,
			settings: {
				arrows: false,
			}
		}]
	});
	/*------ Hero main slider active end ------*/


	/*-------- prodct details slider active start --------*/
    $('.product-large-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        asNavFor: '.pro-nav'
    });

    // product details slider nav active
    $('.pro-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-large-slider',
        centerMode: true,
        centerPadding: 0,
		focusOnSelect: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
	});
	/*-------- prodct details slider active end --------*/


	/*------ product slider active start ------*/
	$('.ht-slick-slider').slick();
	/*------ product slider active end ------*/


	/*------- nice select active start -------*/
	$('select').niceSelect();
	/*------- nice select active end -------*/


	/*-------- Off Canvas Open close start--------*/
	$(".off-canvas-btn").on('click', function () {
		$("body").addClass('fix');
		$(".off-canvas-wrapper").addClass('open');
	});

	$(".btn-close-off-canvas,.off-canvas-overlay").on('click', function () {
		$("body").removeClass('fix');
		$(".off-canvas-wrapper").removeClass('open');
	});
	/*-------- Off Canvas Open close end--------*/


	/*------- product view mode change js start -------*/
    $('.product-view-mode a').on('click', function (e) {
        e.preventDefault();
        var shopProductWrap = $('.shop-product-wrap');
        var viewMode = $(this).data('target');
        $('.product-view-mode a').removeClass('active');
        $(this).addClass('active');
        shopProductWrap.removeClass('grid-view list-view').addClass(viewMode);
	})
	/*------- product view mode change js end -------*/


	/*------- Countdown Activation start -------*/
	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			$this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time">%D</span><span class="single-countdown__text">Days</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">Hrs</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">Min</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span><span class="single-countdown__text">Sec</span></div>'));
		});
	});
	/*------- Countdown Activation end -------*/


	// quantity change js
    $('.pro-qty').prepend('<span class="dec qtybtn">-</span>');
    $('.pro-qty').append('<span class="inc qtybtn">+</span>');
    $('.qtybtn').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });


	/*-------- scroll to top start --------*/
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 600) {
			$('.scroll-top').removeClass('not-visible');
		} else {
			$('.scroll-top').addClass('not-visible');
		}
	});
	$('.scroll-top').on('click', function (event) {
		$('html,body').animate({
			scrollTop: 0
		}, 1000);
	});
	/*-------- scroll to top end --------*/


	/*------- Category Menu start -------*/
	// Variables
	var categoryToggleWrap = $('.category-toggle-wrap');
	var categoryToggle = $('.category-toggle');
	var categoryMenu = $('.category-menu');

	// Category Menu Toggles
	function categorySubMenuToggle() {
		var screenSize = $window.width();
		if (screenSize <= 991) {
			$('.category-menu .menu-item-has-children > a').prepend('<span class="expand menu-expand"></span>');
			$('.category-menu .menu-item-has-children ul').slideUp();
		} else {
			$('.category-menu .menu-item-has-children > a .menu-expand').remove();
			$('.category-menu .menu-item-has-children ul').slideDown();
		}
	}

	$(window).on({
		load: function () {
			categorySubMenuToggle();
		},
		resize: function () {
			categorySubMenuToggle();
		}
	});

	categoryToggle.on('click', function () {
		categoryMenu.slideToggle();
	});

	// Category Sub Menu
	$('.category-menu').on('click', 'li a, li a .menu-expand', function (e) {
		var $a = $(this).hasClass('menu-expand') ? $(this).parent() : $(this);
		if ($a.parent().hasClass('menu-item-has-children')) {
			if ($a.attr('href') === '#' || $(this).hasClass('menu-expand')) {
				if ($a.siblings('ul:visible').length > 0) $a.siblings('ul').slideUp();
				else {
					$(this).parents('li').siblings('li').find('ul:visible').slideUp();
					$a.siblings('ul').slideDown();
				}
			}
		}
		if ($(this).hasClass('menu-expand') || $a.attr('href') === '#') {
			e.preventDefault();
			return false;
		}
	});
	/*------- Category Menu end -------*/


	/*------- responsive mobile menu start -------*/
	//Variables
	var $offCanvasNav = $('.mobile-menu'),
		$offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

	//Add Toggle Button With Off Canvas Sub Menu
	$offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i></i></span>');

	//Close Off Canvas Sub Menu
	$offCanvasNavSubMenu.slideUp();

	//Category Sub Menu Toggle
	$offCanvasNav.on('click', 'li a, li .menu-expand', function (e) {
		var $this = $(this);
		if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
			e.preventDefault();
			if ($this.siblings('ul:visible').length) {
				$this.parent('li').removeClass('icon-show');
				$this.siblings('ul').slideUp();
			} else {
				$this.parent('li').addClass('icon-show');
				$this.closest('li').siblings('li').find('ul:visible').slideUp();
				$this.siblings('ul').slideDown();
			}
		}
	});
	/*------- responsive mobile menu end -------*/


	/*------- Checkout Page accordion start -------*/
    $("#create_pwd").on("change", function () {
        $(".account-create").slideToggle("100");
    });

    $("#ship_to_different").on("change", function () {
        $(".ship-to-different").slideToggle("100");
    });

    // Payment Method Accordion
    $('input[name="paymentmethod"]').on('click', function () {
        var $value = $(this).attr('value');
        $('.payment-method-details').slideUp();
        $('[data-method="' + $value + '"]').slideDown();
	});
	/*------- Checkout Page accordion start -------*/


	// Mailchimp for dynamic newsletter
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'https://company.us19.list-manage.com/subscribe/post?u=2f2631cacbe4767192d339ef2&amp;id=24db23e68a'

    });


    // mailchimp active js
    function mailChimpResponse(resp) {
        if (resp.result === 'success') {
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);

        } else if (resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }
    }

}(jQuery));