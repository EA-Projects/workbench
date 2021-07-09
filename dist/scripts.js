/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
////// DOCUMENT READY
$(document).ready(function () {});

// Smooth scroll
$(document).on('click', 'a[href^="#"]', function (event) {
	event.preventDefault();

	$('html, body').animate(
		{
			scrollTop: $($.attr(this, 'href')).offset().top,
		},
		500
	);
});

////// DOCUMENT LOAD
$(window).on('load', function () {
	wow = new WOW({
		boxClass: 'animate',
		animateClass: 'animated',
		offset: 200,
		mobile: true,
	});
	wow.init();

	// Preload images
	function preload(arrayOfImages) {
		$(arrayOfImages).each(function () {
			$('<img/>')[0].src = this;
		});
	}

	// Usage:

	preload([
		'images/hero-background-evening.jpg',
		'images/hero-background-morning.jpg',
		'images/hero-background-noon.jpg',
		'images/hero-background-night.jpg',
	]);

	// Add animation class to box
	setTimeout(function () {
		$('#opening .box').addClass('animated');
	}, 1400);

	// Trigger table sorting
	$('#table th.description').css('pointer-events', 'none');
	$('#table th.rank').click();
});

// Animate graphic when in viewport
$(window).on('scroll', function () {
	$('#stats').each(function () {
		if (isScrolledIntoView($(this))) {
			$(this).find('.progress').addClass('animate');
		}
	});
});

function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop() + 100;
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

////// STICKY MENU
$(window).scroll(function () {
	if ($(window).scrollTop() > 20) {
		$('#main-nav').addClass('sticky');
	} else {
		$('#main-nav').removeClass('sticky');
	}

	if ($(window).scrollTop() > 1500) {
		$('#back-to-top').fadeIn();
	} else {
		$('#back-to-top').fadeOut();
	}
});

////// DISABLE ANIMATIONS ON MOBILE
if (
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	) ||
	$(window).width() < 575
) {
	$('.animate').removeClass('animate'); // to remove transition
}

/******/ })()
;