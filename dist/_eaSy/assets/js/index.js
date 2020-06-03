$('.toggler').click(function (e){
	$('.menu nav ul').toggleClass('menuVisible');
	e.preventDefault();
});

$('header .slider').slick({
	speed: 500,
	fade: true,
	cssEase: 'linear',
	arrows: false
});

$('#latestWorks .slider').slick({
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 4,
	arrows: false,
	dots: true,
	responsive: [
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		}
	}, {
		breakpoint: 576,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		}
	}]
});