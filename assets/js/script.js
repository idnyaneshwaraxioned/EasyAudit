/* Author: 

*/

$(document).ready(function () {

	$('.banner-slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
	});

	$('.team-slider').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 997,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});


	// ============== humburger btn===============

	$('.hamburger').click(function () {
		$('.hamburger').toggleClass('active');
		$('.menu').toggleClass('active');
	})


	// ========== Counter ==============
	$('.count').counterUp({
		delay: 10,
		time: 1000
	});

});






















