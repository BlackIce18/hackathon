$(document).ready(function() {
    Parallax();

    ScrollOneWindow();
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
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
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
        },
        afterRender: function(){},
    });
}