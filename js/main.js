$(document).ready(function() {
    Parallax();

    ScrollOneWindow();
    Carousel();
});

function Parallax() {
    var images = document.querySelectorAll('img.backgroundImage');
    new simpleParallax(images);
}

function ScrollOneWindow() {
    $('#main').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: false,
        sectionsColor: [],
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: false/*{
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        }*/,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.screen',
        animateAnchor: false,

        //events
        onLeave: function(index, nextIndex, direction){
            if(index == 2) {
                $('.mainContent > .col > .number').animate({
                    opacity: 0,

                }).css({
                    "transform":"translateY(-20px)"
                });

                $('.mainContent > .col > .text').animate({
                    opacity: 0,
                }).css({
                    "transform":"translateY(-20px)"
                });

                $('.mainContent > .col > .circleWithImage').animate({
                    opacity: 0,
                }).css({
                    "transform":"scale(0) translateY(50px)"
                });
            }
            if(index == 3) {
                /*$('.thirdScreen > .content > .slider').css({"transform":"scale(0)"});*/
            }
            if(index == 4) {
                /*$('.fourthScreen > .content > .slider').css({"transform":"scale(0)"});*/
            }
            if(index == 5) {
                /*$('.fifthScreen > .content > .slider').css({"transform":"scale(0)"});*/
            }
        },
        afterLoad: function(anchorLink, index){
                //using index
/*
                if(index == 3){
                    alert("Section 3 ended loading");
                }
*/
                if(anchorLink == 'secondPage') {
                    $('.mainContent > .col > .number').animate({
                        opacity: 1,

                    },function () {
                        $('.mainContent > .col > .text').animate({
                            opacity: 1,
                        }).css({
                            "transform":"translateY(0px)"
                        });
                    }).css({
                        "transform":"translateY(0px)"
                    });

                    $('.mainContent > .col > .circleWithImage').animate({
                        opacity: 1,
                    }).css({
                        "transform":"scale(1) translateY(0px)"
                    });
                }

            if(anchorLink == "thirdPage") {
                $('.thirdScreen > .content > .slider').css({"transform":"scale(1)"});
                $('.thirdScreen > .content > .SliderNavigation > .sliderNav > .activeNavItem').animate({
                    opacity: 1,
                }, 1000, function(){
                    $('.thirdScreen > .content > .SliderNavigation > .sliderNav > .navItems').animate({
                        opacity: 1,
                    }, 250);
                }).css({"transform":"scale(1)"});
            }

            if(anchorLink == "fourthPage") {
                $('.fourthScreen > .content > .slider').css({"transform":"scale(1)"});
                $('.fourthScreen > .content > .SliderNavigation > .sliderNav > .navItems').css({"opacity":"1"})
            }

            if(anchorLink == "fifthPage") {
                $('.fifthScreen > .content > .slider').css({"transform":"scale(1)"});
                $('.fifthScreen > .content > .SliderNavigation > .sliderNav > .navItems').css({"opacity":"1"})
            }
        },
        afterRender: function(){},
    });
}

function Carousel() {
    var carousel = document.querySelector('.carousel');
    var flkty = new Flickity( carousel, {
        prevNextButtons: false,
        autoPlay: 1500,
        imagesLoaded: true,
        percentPosition: false,
        fade: true
    });

    var imgs = carousel.querySelectorAll('.carousel-cell img');
// get transform property
    var docStyle = document.documentElement.style;
    var transformProp = typeof docStyle.transform == 'string' ?
        'transform' : 'WebkitTransform';

    flkty.on( 'scroll', function() {
        flkty.slides.forEach( function( slide, i ) {
            var img = imgs[i];
            var x = ( slide.target + flkty.x ) * -1/3;
            img.style[ transformProp ] = 'translateX(' + x  + 'px)';
        });
    });
}
