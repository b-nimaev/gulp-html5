$('.toggler').click(function (e){
	$('.menu nav ul').toggleClass('menuVisible');
	e.preventDefault();
});

$('.slider').slick({
	speed: 500,
	fade: true,
	cssEase: 'linear'
});