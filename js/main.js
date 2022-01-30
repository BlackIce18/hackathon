$(document).ready(function(){
    //Parallax();

    ScrollOneWindow();
    Carousel();

    YandexMap();
    UploadFiles();
});
function Parallax() {
    var images = document.querySelectorAll('img.backgroundImage');
    new simpleParallax(images);
}

function ScrollOneWindow() {
    let isTyped = false;

    $('#main').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: false,
        sectionsColor: [],
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage', 'ninthPage'],
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

            if(anchorLink == "seventhPage") {
                if(isTyped === false) {
                    TypedScript();
                    isTyped = !isTyped;
                }
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



    var carousel = document.querySelector('.carousel2');
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

function TypedScript() {
    $(function(){

        new Typed("#typing",{
            strings: ["Неудовлетворены обслуживанием?", " Увидели происшествие?", " Есть интересные предложения?", " Сообщите нам, оставив подробности в заявке!"],
            typeSpeed: 70,
            backDelay: 1500,
            startDelay: 2500,
            loop: true,
            loopCount: 1,
            contentType: 'html',
        });

    });
}

function YandexMap() {
    document.cookie = "SameSite";
        // Функция ymaps.ready() будет вызвана, когда
        // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
        ymaps.ready(init);

        function init(){
            // Создание карты.
            var myMap = new ymaps.Map("map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [48.015885, 37.802837],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 9,
                controls: []
            });
            myMap.behaviors.disable('scrollZoom'); // отключаем масштабирование скролом
            myMap.controls.add("zoomControl", { // из элементов карты оставляем только масштабирование ползунком
                position: {top: 10, left: 10}
            });



            var loadControl = new ymaps.control.Button({
                data: { content: 'Добавить метку' },
                options: { maxWidth: 200, float: 'right', selectOnClick: false }
            });
            myMap.controls.add(loadControl);

            loadControl.events.add('click', function () {
                if (ymaps.Placemark) {
                    // Если модуль уже был загружен, то нет необходимости повторно обращаться к модульной системе.
                    addPlacemark();
                } else {
                    // Загружаем по требованию класс метки и оверлея метки.
                    // По умолчанию оверлей автоматически загружается после добавления метки на карту.
                    // В данном примере происходит асинхронная загрузка самого модуля метки и нет необходимости в отдельной подгрузке оверлея.
                    ymaps.modules.require(['Placemark', 'overlay.Placemark'])
                        .spread(function (Placemark, PlacemarkOverlay) {
                            // Добавляем в глобальную область видимости класс вручную,
                            // так как при использовании метода require модульной системы этого не происходит.
                            ymaps.Placemark = Placemark;
                            addPlacemark();
                        });
                }
            });

            function addPlacemark() {
                myMap.geoObjects.removeAll();

                var center = myMap.getCenter();

                // добавляем метку на карту
                var myPlacemark = new ymaps.Placemark(
                    center, {},
                    {
                        iconLayout: 'default#image', // обозначаем что будет использоваться пользовательское изображение
                        iconImageHref: 'images/267-2678109_map-point-google-map-marker-gif.png',  // указываем путь к картинке которая будет служить меткой
                        iconImageSize: [38, 59], // указываем размер изображения
                        iconImageOffset: [-19, -59] // обозначаем сдвиг от левого верхнего угла к точке изображения метки .
                    });

                myMap.geoObjects.add(myPlacemark) // добавляем метку на карту
            }
        }
}

function UploadFiles() {
    let fields = $('.field__file').each(function (input) {
        let label = input.nextElementSibling,
            labelVal = label.querySelector('.field__file-fake').innerText;

        $(input).on('change', function (e) {
            let countFiles = '';
            if (this.files && this.files.length >= 1)
                countFiles = this.files.length;

            if (countFiles)
                label.querySelector('.field__file-fake').innerText = 'Выбрано файлов: ' + countFiles;
            else
                label.querySelector('.field__file-fake').innerText = labelVal;
        });
    });
}