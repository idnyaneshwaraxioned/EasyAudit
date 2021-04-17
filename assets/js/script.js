/* Author: 

*/

$(document).ready(function () {

	$('.banner-slider').slick({
	});

	$('.team-slider').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 997,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 2
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

	$('.hamburger').click(function(){
		$('.hamburger').toggleClass('active');
		$('.menu').toggleClass('active');
	})

});






















