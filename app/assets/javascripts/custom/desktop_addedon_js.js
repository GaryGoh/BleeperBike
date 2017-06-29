$('#bp-nav-trigger a').click(function () {
    var index = $(this).attr('href');
    $('body, html').animate({scrollTop: $(index).offset().top}, "slow");
    return false;
});

$(document).ready(function () {
    var height = $('.scroll').height();
    console.log(height)
    if (height > 280) {
        $('.scroll').addClass('.overflow_hidden')
    }
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
//            console.log(scrollTop);
        if (scrollTop >= 1950) {
            $('.lineBox>li>p').show(100);
            $('.led_cover').show(700);
            $('.brake_cover').show(700);
            $('.hub_cover').show(700);
            $('.seat_cover').show(700);
            $('.gps_cover').show(700);
            $('.built_cover').show(700);
        } else if (scrollTop <= 1250 || scrollTop >= 2650) {
            $('.lineBox>li>p').hide(100);
            $('.led_cover').hide(700);
            $('.brake_cover').hide(700);
            $('.hub_cover').hide(700);
            $('.seat_cover').hide(700);
            $('.gps_cover').hide(700);
            $('.built_cover').hide(700);
        }
    };
    window.sr = ScrollReveal();
    sr.reveal('.sr-slogan', {
        origin: 'top',
        duration: 500,
        scale: 1.1,
        mobile: true,
    }, 300);
    //faq
    $('#FAQ').click(function () {
        $('.zezao').show();
        $('.faq').show();
    });
    $('.close').click(function () {
        $('.zezao').hide();
        $('.faq').hide();
    });
    $('#TERM').click(function () {
        $('.zezao').show();
        $('.term').show();
    });
    $('.close1').click(function () {
        $('.zezao').hide();
        $('.term').hide();
    });
    $('#POLICY').click(function () {
        $('.zezao').show();
        $('.policy').show();
    });
    $('.close2').click(function () {
        $('.zezao').hide();
        $('.policy').hide();
    });
    setTimeout(function () {
        $('.circle').show(700);
    }, 800);
    $('.zezao').click(function () {
        $('.zezao').hide();
        $('.term').hide();
        $('.faq').hide();
        $('.policy').hide();
    });

})
var navbar = document.getElementsByClassName('navbar');
var Goindex = document.getElementsByClassName('Goindex');
for (var i = 0; i < navbar.length; i++) {
//				var index = hover[i];
    navbar[i].setAttribute("id", i);
    var id = navbar[i].getAttribute("id");
//				console.log(hover[i])
    console.log(id);
//
}
for (var i = 0; i < Goindex.length; i++) {
//				var index = hover[i];
    Goindex[i].setAttribute("href", '#' + i);
    var index = Goindex[i].getAttribute("href");
//				console.log(hover[i])
    console.log(index);
//
}