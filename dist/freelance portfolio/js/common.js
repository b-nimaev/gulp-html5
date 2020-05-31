let navbar = $('nav.navbar'),			// элемент прилипающий
	fixPosition = 500,					// кол-во пикселей от границы
	navbarStatus = false;				// некая оптимизация

$(window).on('scroll', function() {
	if ($(this).scrollTop() >= fixPosition && navbarStatus === false ) {
		navbarStatus = true;
		navbar.addClass('--fixed').animate({'top': '0%'}, 200, 'linear');
	} else if ($(this).scrollTop() < fixPosition && navbarStatus === true) {
		navbarStatus = false;
		navbar.animate({'top': '-100%'}, 400, 'linear', function() {
			navbar.removeAttr('style').removeClass('--fixed');
		});
	} 
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}