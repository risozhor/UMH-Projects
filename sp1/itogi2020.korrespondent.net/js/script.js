$(function() {


    var screen = $( window ).width();
    if ( screen > 1024 ){
        $('#fullpage').fullpage({
            //Navigation
            menu: '.header',
            lockAnchors: false,
            anchors:['main', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: ['firstSlide', 'secondSlide'],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
    
            //Scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            scrollBar: true,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: true,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: true,
            continuousHorizontal: true,
            scrollHorizontally: true,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: true,
            normalScrollElements: '#element1, .element2',
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowOptions: null,
            touchSensitivity: 15,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,
    
            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,
    
            //Design
            controlArrows: true,
            verticalCentered: false,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,
            parallax: false,
            parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    
            //Custom selectors
            sectionSelector: '.section',
            slideSelector: '.slide',
    
            lazyLoading: true,
    
            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
            afterResize: function(){},
            afterResponsive: function(isResponsive){},
            afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
            onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
        });

        $('.arrow-down').click(function () {
            $.fn.fullpage.moveSectionDown();
        })

        var $imgs = $(".section_main").find(".event__image"),
            i = 0;

        function changeImage(){
            var next = (++i % $imgs.length);
            $($imgs.get(next - 1)).fadeOut(500);
            $($imgs.get(next)).fadeIn(500);
            if (i ==  $imgs.length){
                i = 0
            }
        }
        var interval = setInterval(changeImage, 2000);


        $('.fp-controlArrow').addClass('animated pulse infinite')
    };

});