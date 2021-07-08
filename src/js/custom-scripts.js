////// DOCUMENT READY
$(document).ready(function () {
	/*

	$('.column a, #back-to-top a').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate(
			{
				scrollTop: $($(this).attr('href')).offset().top - 100,
			},
			750,
			'swing'
		);
	});*/
});

////// DOCUMENT LOAD
$(window).on('load', function () {
	/*$('.preloader').fadeOut(1000, function () {
		$('body').removeClass('loading');
	});*/
});

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
