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
	slidesToScroll: 3,
	arrows: false
});