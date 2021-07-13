////// DOCUMENT READY
$(document).ready(function () {
	////// Detect Daytime and apply theme
	// get user's time
	const currentTime = new Date();
	const currentHour = currentTime.getHours(); // returns a number between 0-23
	hourToMoment(currentHour);
	// Transform a number between 0-23 to a string
	// 'morning' | 'noon' | 'evening' | 'night'
	function hourToMoment(currentHour) {
		if (currentHour > 5 && currentHour < 11) {
			// return 'morning';
			$('html').attr('data-theme', 'morning');
		} else if (currentHour >= 11 && currentHour < 15) {
			$('html').attr('data-theme', 'noon');
		} else if (currentHour >= 15 && currentHour < 19) {
			$('html').attr('data-theme', 'evening');
		} else {
			$('html').attr('data-theme', 'night');
		}
	}
	// debugging
	/*for (let i = 0; i < 24; i++) {
	console.log(i + ': ' + hourToMoment(i));
	}*/
});

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

	////// Preload images
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

// // Animate graphic when in viewport
// $(window).on('scroll', function () {
// 	$('#stats').each(function () {
// 		if (isScrolledIntoView($(this))) {
// 			$(this).find('.progress').addClass('animate');
// 		}
// 	});
// });

// function isScrolledIntoView(elem) {
// 	var docViewTop = $(window).scrollTop() + 180;
// 	var docViewBottom = docViewTop + $(window).height();

// 	var elemTop = $(elem).offset().top;
// 	var elemBottom = elemTop + $(elem).height();

// 	return elemBottom <= docViewBottom && elemTop >= docViewTop;
// }

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

////// STATS ANIMATION
function animateStats() {
	$('.progress').addClass('motion');
}

const elements = document.querySelectorAll('#stats');

function handleIntersection(entries, observer) {
	entries.forEach((entry) => {
		if (entry.intersectionRatio > 0) {
			animateStats();
			observer.unobserve(entry.target);
		}
	});
}
$(document).ready(function () {
	const options = {
		root: null,
		rootMargin: '-100px',
		threshold: 0,
	};
	const observer = new IntersectionObserver(handleIntersection, options);
	elements.forEach((obs) => {
		observer.observe(obs);
	});
});
