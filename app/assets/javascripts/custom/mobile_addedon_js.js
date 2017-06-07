$('#bp-nav-trigger a').click(function () {
    var index = $(this).attr('href');
    $('body, html').animate({scrollTop: $(index).offset().top}, "slow");
    return false;
});

$('.nav a').on('click', function(){
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
});

$(document).ready(function () {
    /*var mySwiper = new Swiper ('.swiper-container', {
     //            direction: 'vertical',
     loop: true,
     speed: 500,
     observer:true,
     observeParents:true,
     autoplayDisableOnInteraction : false,
     autoplay:2000,

     // 如果需要分页器
     /!* pagination: '.swiper-pagination',

     // 如果需要前进后退按钮
     nextButton: '.swiper-button-next',
     prevButton: '.swiper-button-prev',

     // 如果需要滚动条
     scrollbar: '.swiper-scrollbar',*!/
     });*/
    var Swiper1 = new Swiper('#swiper-container1', {
        loop: true,
        speed: 500, observer: true,
        observeParents: true, autoplayDisableOnInteraction: false,
        autoplay: 3000,
        pagination: '.swiper-pagination',
    });
    var Swiper2 = new Swiper('#swiper-container2', {
        loop: true,
        speed: 500,
        observer: true, observeParents: true,
        autoplayDisableOnInteraction: false,
        autoplay: 3000,

        pagination: '.swiper-pagination',
    });
    Swiper1.params.control = Swiper2;//需要在Swiper2初始化后，Swiper1控制Swiper2
    Swiper2.params.control = Swiper1;//需要在Swiper1初始化后，Swiper2控制Swiper1
    var Swiper3 = new Swiper('#swiper-container3', {
        control: [Swiper1, Swiper2],//控制前面两个Swiper
    });

    //menue
    var $menue = $('.header_l');
    var $hiddenUl = $('.hidden_ul');
    var speed = 0;
    var num = 0;
    $menue.click(function () {
        if ($hiddenUl.css('display') == 'none') {
            $hiddenUl.show();
        } else if ($hiddenUl.css('display') == 'block') {
            $hiddenUl.hide();
        }
    });
    $('.muneu_li').click(function () {
        $hiddenUl.hide();
    })
});

//        scroll
window.onscroll = function () {
    var maxWidth = 750;
    var deviceWidth = document.documentElement.clientWidth;
    var size = deviceWidth / 10;
    var scrollTop = (document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop) / size;
//            console.log(scrollTop);
//            console.log(deviceWidth);
    if (deviceWidth < 320) {
        if (scrollTop >= 36) {
//                    alert('ip5')
            $('.lineBox>li>p').show(100);
            $('.led_cover').show(700);
            $('.brake_cover').show(700);
            $('.hub_cover').show(700);
            $('.seat_cover').show(700);
            $('.gps_cover').show(700);
            $('.built_cover').show(700);
        } else if (scrollTop <= 22 || scrollTop >= 56) {
            $('.lineBox>li>p').hide(100);
            $('.led_cover').hide();
            $('.brake_cover').hide();
            $('.hub_cover').hide();
            $('.seat_cover').hide();
            $('.gps_cover').hide();
            $('.built_cover').hide();
        }
    }
    if (deviceWidth >= 320 && deviceWidth < 375) {
        if (scrollTop >= 37) {
//                    alert('ip5+++')
            $('.lineBox>li>p').show(100);
            $('.led_cover').show(700);
            $('.brake_cover').show(700);
            $('.hub_cover').show(700);
            $('.seat_cover').show(700);
            $('.gps_cover').show(700);
            $('.built_cover').show(700);
        }
        else if (scrollTop <= 22 || scrollTop >= 56) {
            $('.lineBox>li>p').hide(100);
            $('.led_cover').hide();
            $('.brake_cover').hide();
            $('.hub_cover').hide();
            $('.seat_cover').hide();
            $('.gps_cover').hide();
            $('.built_cover').hide();
        }
    }
    if (deviceWidth >= 375 && deviceWidth < 414) {
        if (scrollTop >= 37) {
//                    alert('ip6+++')
            $('.lineBox>li>p').show(100);
            $('.led_cover').show(700);
            $('.brake_cover').show(700);
            $('.hub_cover').show(700);
            $('.seat_cover').show(700);
            $('.gps_cover').show(700);
            $('.built_cover').show(700);
        } else if (scrollTop <= 22 || scrollTop >= 56) {
            $('.lineBox>li>p').hide(100);
            $('.led_cover').hide();
            $('.brake_cover').hide();
            $('.hub_cover').hide();
            $('.seat_cover').hide();
            $('.gps_cover').hide();
            $('.built_cover').hide();
        }
    }
    if (deviceWidth >= 414 && deviceWidth < 750) {
        if (scrollTop >= 39) {
//                    alert('ip7+++')
            $('.lineBox>li>p').show(100);
            $('.led_cover').show(700);
            $('.brake_cover').show(700);
            $('.hub_cover').show(700);
            $('.seat_cover').show(700);
            $('.gps_cover').show(700);
            $('.built_cover').show(700);
        } else if (scrollTop <= 22 || scrollTop >= 56) {
            $('.lineBox>li>p').hide(100);
            $('.led_cover').hide();
            $('.brake_cover').hide();
            $('.hub_cover').hide();
            $('.seat_cover').hide();
            $('.gps_cover').hide();
            $('.built_cover').hide();
        }
    }
    if (deviceWidth >= 750) {
        if (scrollTop >= 43) {
//                    alert('ip7+++')
            $('.lineBox>li>p').show(100);
            $('.led_cover').show(700);
            $('.brake_cover').show(700);
            $('.hub_cover').show(700);
            $('.seat_cover').show(700);
            $('.gps_cover').show(700);
            $('.built_cover').show(700);
        } else if (scrollTop <= 28 || scrollTop >= 55) {
            $('.lineBox>li>p').hide(100);
            $('.led_cover').hide();
            $('.brake_cover').hide();
            $('.hub_cover').hide();
            $('.seat_cover').hide();
            $('.gps_cover').hide();
            $('.built_cover').hide();
        }
    }
};
window.sr = ScrollReveal();
sr.reveal('.sr-slogan', {
    origin: 'top',
    duration: 500,
    scale: 1.1,
    mobile: true,
}, 300);
//        console.log(scrollTop);
$('#FAQ').click(function () {
    $('.zezao').show();
    $('.faq').show();
});
$('.close').click(function () {
    $('.zezao').hide();
    $('.faq').hide();
});
setTimeout(function () {
    $('.circle').show(700);
}, 800);

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
    $('.term2').show();
});
$('.close2').click(function () {
    $('.zezao').hide();
    $('.term2').hide();
});
$('.zezao').click(function () {
    $('.zezao').hide();
    $('.term').hide();
    $('.faq').hide();
    $('.term2').hide();
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