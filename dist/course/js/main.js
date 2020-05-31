var map, myLatlng;

var career_sider = null;

var cost_sider = null;

var fe_page = getParameterByName('c');

if(fe_page === 'frontend'){

    window.location.href = "http://prog.kiev.ua/fe.html";

}

$(document).ready(function() {
    mainNav();
    $(window).scroll(function () {
        mainNav();
    });

    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 600) $('.menu-fix').stop().animate({
            "opacity": '0.8',
            "top": '0'
        });
        else $('.menu-fix').stop().animate({
            "opacity": '0',
            "top": '-300'
        });
    };
});

$(document).ready(function(){





    $('video').on('ended', function () {

        this.load();

        this.play();

    });



    $(".wrapper").mouseup(function(e)

    {

        var faq = $(".faq-item-modal");

        if(!faq.has(e.target).length)

        {

            $('.close-faq').trigger('click');

        }

    });



    $('.close-faq').on('click', function(){

        $('.faq-modal-wrap').removeClass('active');

        $('.faq').removeClass('modal-open-type');

    });

    var now = new Date();

    Date.prototype.addHours= function(h){
        this.setHours(this.getHours()+h);
        return this;
    }

    var dead_1 = new Date().addHours(24*5);

    var dead_2 = new Date().addHours(24*5);

    console.log(dead_1)

    // if (Date.parse(dead_1) > Date.parse(now)) {

        initializeClock('timer-1', dead_1);

    // }



    // if (Date.parse(dead_2) > Date.parse(now)) {

        initializeClock('timer-2', dead_2);

    // }









    $('.faq-item-link').on('click', function(){

        var faq_head = $(this).html();

        var faq_content = $(this).closest('.faq-item').find('.faq-answer').html();

        $('.faq-item-modal .faq-modal-header-item').html(faq_head);

        $('.faq-item-modal .faq-modal-content').html(faq_content);

        if($(window).width() < 767){

            var offset_top = $(this).offset().top;

            var offset_pr = $('.faq').offset().top;

            offset_top = offset_top - offset_pr;

            $('.faq-modal-wrap').css('top', offset_top + 'px');

        }

        $('.faq-modal-wrap').addClass('active');

        $('.faq').addClass('modal-open-type');

    });



    $('body').on('click', '.active .detail-bars', function(){

        $(this).closest('.section').find('.detail-menu').removeClass('active-menu');

        $(this).closest('.menu').removeClass('active');

    });



    $('body').on('click', '.shedule .detail-bars', function(){

        $(this).closest('.section').find('.detail-menu').removeClass('active-menu');

        $(this).closest('.menu').removeClass('active');

    });



    $('.menu-detail a').on('click', function(){

        if(!$(this).closest('.menu-wrap').hasClass('active')){

            if(!$(this).closest('.menu').hasClass('active')){

                $(this).closest('.section').find('.detail-menu').toggleClass('active-menu');

                $(this).closest('.menu').toggleClass('active');

            }

        }



    });

    $('.menu-detail a').click(function(){
        $('.submenu-fix').addClass('active');
    });

    $('.detail-bars').addClass('det');

    $('.det').click(function(){
        $('.submenu-fix').removeClass('active');
    });






    $('.open-menu').on('click', function () {

        $(this).closest('.section').find('.detail-menu').toggleClass('active-menu');



    });



    $('.close-bars').on('click', function(){

        $(this).closest('.section').find('.detail-menu').removeClass('active-menu');

    });



    // $('.contacts-item').on('click', function(e){

    //     e.preventDefault();

    //     if(!$(this).hasClass('active')){

    //         $('.contacts-item').removeClass('active');

    //         var f_ad = $(this);

    //         var pt = f_ad.data('xy-p').split(',');

    //         var ct = f_ad.data('xy-c').split(',');

    //         var hint = f_ad.data('hint');

    //         initialize(pt, ct, hint);

    //         $(this).addClass('active')

    //     }

    // });





    // $('.contacts-item').on( "tap", function( event ) {

    //     event.preventDefault();

    //     $('.contacts-item').removeClass('active');

    //     var f_ad = $(this);

    //     var pt = f_ad.data('xy-p').split(',');

    //     var ct = f_ad.data('xy-c').split(',');

    //     var hint = f_ad.data('hint');

    //     initialize(pt, ct, hint);

    //     $(this).addClass('active')

    // } );



    // $('.contacts-item').on( "taphold", function( event ) {

    //     event.preventDefault();

    //     $('.contacts-item').removeClass('active');

    //     var f_ad = $(this);

    //     var pt = f_ad.data('xy-p').split(',');

    //     var ct = f_ad.data('xy-c').split(',');

    //     var hint = f_ad.data('hint');

    //     initialize(pt, ct, hint);

    //     $(this).addClass('active')

    // } );





    $('.reviews-slider').bxSlider({

        pager: false,

        prevSelector: '.reviews-prev',

        nextSelector: '.reviews-next',

        mode: 'fade',

        auto: false,

        minSlides: 1,

        maxSlides: 1,

        slideMargin: 0,

        adaptiveHeight: true,

        moveSlides: 1,

        onSliderLoad: function(){



        },

        onSlideBefore:function($slideElement, oldIndex, newIndex){



        }

    });



    // $('.modal-open').fancybox({
    //
    //     autoSize: true,
    //
    //     type: 'inline',
    //
    //     closeBtn: false,
    //
    //     padding: 0,
    //
    //     scrolling: 'no',
    //
    //     fixed: false,
    //
    //     autoCenter: false,
    //
    //     helpers : {
    //
    //         overlay : {
    //
    //             css : { 'overflow' : 'hidden' }
    //
    //         }
    //
    //     },
    //
    //     beforeShow: function() {
    //
    //         $('form').find('input[type=text]').val('');
    //
    //         $('form').find('input[type=text]').parents('.form-field').removeClass('correct incorrect');
    //
    //         if(this.element.hasClass('order-link')){
    //
    //             $('#order-modal .main-form-title').html(this.element.data('title'));
    //
    //             $('#order-modal [name="from"]').val(this.element.data('from'));
    //
    //             $('#order-modal textarea').val('');
    //
    //             $('#order-modal textarea').html('');
    //
    //             $('#order-modal .send').text(this.element.data('btn'));
    //
    //         }
    //
    //
    //
    //
    //
    //         $(".fancybox-skin").css("background-color", "transparent");
    //
    //     },
    //
    //     afterClose: function() {
    //
    //         $('form').find('input[type=text]').val('');
    //
    //         $('form').find('input[type=text]').parents('.form-field').removeClass('correct incorrect');
    //
    //     }
    //
    // }).click(function() {
    //
    //     if (typeof($(this).data('from')) !== 'undefined') {
    //
    //
    //
    //     }
    //
    // });
    //
    //
    //
    // $('.modal-close, .close-btn, .close-modal').click(function() {
    //
    //     $.fancybox.close();
    //
    //     return false;
    //
    // });



    $('body').on('click', '.scroll', function(event) {

        $('.detail-menu').removeClass('active-menu');

        $('.menu').removeClass('active');

        $('.menu-wrap').removeClass('active');

        $('.mobile-nav').removeClass('active');

        $('.wrapper').removeClass('over-no');

        var anchor = $(this);

        $('html, body').stop().animate({

            scrollTop : $(anchor.data('scroll')).offset().top +  "px"

        }, 1200, 'easeInOutExpo');

        event.preventDefault();



    });



    $('.mobile-nav').on('click', function(){

        $(this).toggleClass('active');

        $('.menu-wrap').toggleClass('active');

        $('.wrapper').toggleClass('over-no');

    });



    $('.fancybox').fancybox({

        helpers: {

            overlay: {

                locked: false

            }

        }

    });



    $('.send').on('click', function(){

        $(this).parents('form').submit();
        dataLayer.push({'event': 'form-ok'});

    });



    $('form').submit(function() {

        if(!$(this).closest('div').hasClass('liqpay-form')){

            $(this).isCorrectRequest();

            return false;

        }



    });



    $('.pay-btn').on('click', function(){

        var amount = $(this).data('amount');

        var descr = $(this).data('descr');

        $('.liqpay-form [name="amount"]').val(Math.round(amount + amount*0.02));

        $('.liqpay-form [name="descr"]').val(descr);

        $('.liqpay-form form').submit();

    });







    if($(window).width() < 1030){

        $('.menu-wrap .menu').scrollbar();

    }







    $(window).resize(function(){

        $('.detail-menu').removeClass('active-menu');

        $('.menu').removeClass('active');

        $('.menu-wrap').removeClass('active');

        $('.mobile-nav').removeClass('active');

        $('.wrapper').removeClass('over-no');



        setTimeout(function(){

            if($(window).width() < 1030){

                $('.menu-wrap .menu').scrollbar();

                career_sider = $('.career-list').slick({

                    dots: true,

                    infinite: false,

                    arrows: false,

                    speed: 500,

                    fade: true,

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    responsive:[

                        {

                            breakpoint: 1029,

                            settings: {

                                slidesToShow: 1,

                                slidesToScroll: 1

                            }

                        }

                    ]

                });



                if($('.cost-item').length > 1){

                    cost_sider = $('.cost-list').slick({

                        dots: true,

                        infinite: false,

                        arrows: false,

                        speed: 500,

                        fade: true,

                        adaptiveHeight: true,

                        slidesToShow: 1,

                        slidesToScroll: 1,

                        responsive:[

                            {

                                breakpoint: 1029,

                                settings: {

                                    slidesToShow: 1,

                                    slidesToScroll: 1

                                }

                            }

                        ]

                    });

                }







            }else{



                if($('.cost-item').length > 1){

                    cost_sider.slick('unslick');

                }

                career_sider.slick('unslick');

                $('.menu-wrap .menu').scrollbar('destroy');

            }

        }, 100);



    });





});







$(window).scroll(function(){



});



$(window).load(function(){

    if($(window).width() > 1070){

        setTimeout(function(){

            var video = '<video id="homescreen_video" preload="auto" muted="true" loop autoplay="autoplay" poster="/images/bg/poster.jpg"><source src="/video/bg_2.mp4" type="video/mp4"></video>';

            $('.video-wrap').prepend(video).addClass('active');





        }, 3000);



    }





    // var f_ad = $('.contacts-item').eq(0);

    // // var pt = f_ad.data('xy-p').split(',');

    // var ct = f_ad.data('xy-c').split(',');

    // var hint = f_ad.data('hint');



    // initialize(pt, ct, hint);

    // setTimeout(function(){

    //     $("#share").ayoshare(

    //         location.href,

    //         true,

    //         false,

    //         true,

    //         false,

    //         false,

    //         false,

    //         false,

    //         true,

    //         false,

    //         false

    //     );

    // }, 2000);



    if($(window).width() < 1030){

        career_sider = $('.career-list').slick({

            dots: true,

            infinite: false,

            arrows: false,

            speed: 500,

            fade: true,

            slidesToShow: 1,

            slidesToScroll: 1,

            responsive:[

                {

                    breakpoint: 1029,

                    settings: {

                        slidesToShow: 1,

                        slidesToScroll: 1

                    }

                }

            ]

        });



        if($('.cost-item').length > 1){

            cost_sider = $('.cost-list').slick({

                dots: true,

                infinite: false,

                arrows: false,

                speed: 500,

                fade: true,

                adaptiveHeight: true,

                slidesToShow: 1,

                slidesToScroll: 1,

                responsive:[

                    {

                        breakpoint: 1029,

                        settings: {

                            slidesToShow: 1,

                            slidesToScroll: 1

                        }

                    }

                ]

            });

        }




    }





});



function getTimeRemaining(endtime) {

    var t = Date.parse(endtime) - Date.parse(new Date());

    var seconds = Math.floor((t / 1000) % 60);

    var minutes = Math.floor((t / 1000 / 60) % 60);

    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);

    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {

        'total': t,

        'days': days,

        'hours': hours,

        'minutes': minutes,

        'seconds': seconds

    };

}



function initializeClock(id, endtime) {

    var clock = document.getElementById(id);

    var daysSpan = clock.querySelector('.days');

    var hoursSpan = clock.querySelector('.hours');

    var minutesSpan = clock.querySelector('.minutes');

    var secondsSpan = clock.querySelector('.seconds');



    function updateClock() {

        var t = getTimeRemaining(endtime);



        daysSpan.innerHTML = ('0' + t.days).slice(-2);

        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);

        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);

        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);



        if (t.total <= 0) {

            clearInterval(timeinterval);

        }

    }



    updateClock();

    var timeinterval = setInterval(updateClock, 1000);

}



(function($) {

    $.fn.isCorrectRequest = function() {

        this.find('input[type=text]').parents('.form-field').removeClass('correct incorrect');



        var nameInput = $(this).find('[name = name]');

        var telephoneInput = $(this).find('[name = phone]');

        var emailInput = $(this).find('[name = email]');



        nameInput.val($.trim(nameInput.val()));

        emailInput.val($.trim(emailInput.val()));





        if(nameInput.val() != undefined){

            if(nameInput.val().length === 0)

            {

                nameInput.parents('.form-field').addClass('incorrect');

                nameInput.focus();

                return false;

            }else{

                nameInput.parents('.form-field').addClass('correct');

            }

        }



        if(telephoneInput.val() != undefined){

            if(telephoneInput.val().length === 0)

            {

                telephoneInput.parents('.form-field').addClass('incorrect');

                telephoneInput.focus();

                return false;

            }else{

                telephoneInput.parents('.form-field').addClass('correct');

            }

        }



        var form = $(this);

        var formData = new FormData($(this)[0]);

        var url = form.attr('action');

        $.ajax({

            type: 'POST',

            url: url,

            data: formData,

            cache: false,

            contentType: false,

            processData: false,

            async: false,

            success: function(data)

            {

                $('form').find('input[type=text]').val('');

                $('form textarea').val('');

                $('form textarea').html('');

                $('form').find('input[type=text]').parents('.form-field').removeClass('correct incorrect');

                $('.thanks-link').trigger('click');

                setTimeout(function(){

                    $('#thanks-modal .close-modal').trigger('click');

                }, 3500);

            },

            error: function(answer)

            {

                alert('Please, try again!');

            }

        });

    };

})(jQuery);



function initialize(pt, ct, hint) {



    myLatlng = new google.maps.LatLng(ct[0], ct[1]);

    var myOptions = {

        scrollwheel: false,

        zoom: 17,

        center: myLatlng,

        mapTypeId: google.maps.MapTypeId.ROADMAP

    };





    var markerLatlng1 = new google.maps.LatLng(pt[0], pt[1]);



    map = new google.maps.Map(document.getElementById('map'), myOptions);











    var marker1 = new google.maps.Marker({

        position: markerLatlng1,

        map: map,

        title: hint

    });



    var infoWindow = new google.maps.InfoWindow;



    var onMarkerClick = function() {

        var marker = this;

        var latLng = marker.getPosition();

        var infoWindowContent = marker.title;

        infoWindow.setContent('<div class="scrollFix">'+infoWindowContent+'</div>');

        infoWindow.open(map, marker);

    };

    google.maps.event.addListener(map, 'click', function() {

        infoWindow.close();

    });



    google.maps.event.addListener(marker1, 'click', onMarkerClick);



}



function getParameterByName(name, url) {

    if (!url) url = window.location.href;

    name = name.replace(/[\[\]]/g, "\\$&");

    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),

        results = regex.exec(url);

    if (!results) return null;

    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, " "));

}
