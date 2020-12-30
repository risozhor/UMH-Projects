
  // $(window).on('load  scroll',function () {
       var elements = document.getElementsByClassName('stiky');
       for (var i = 0; i < elements.length; i++) {
           new hcSticky(elements[i], {
               stickTo: elements[i].parentNode,
               top: 10,
               followScroll:false
           });
       }
   //});


$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});
$(function() {
    $("#Go_Top_Right").scrollToTop();
});
// Go top button
(function(){
    var butt = $('.js-go-top');
    butt.on('click', function(e) {
        e.preventDefault();
        var body = $("html, body");
        body.animate({
            scrollTop: 0
        }, 1500);
    });

    $('.wrapper').waypoint(function(direction) {
        if(direction==="down") {
            // console.log('down')
            butt.removeClass('fadeOutUp').addClass('fadeInUp');
        } else if(direction==="up") {
            butt.removeClass('fadeInUp').addClass('fadeOutUp');
            // console.log('up')
        }
    });
})();

var Swiper_games = new Swiper ('.games-slider', {
    slidesPerView: 6,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow_n',
        prevEl: '.arrow_p'
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    breakpoints: {
        991: {
            slidesPerView: 4
       },
        767: {
            slidesPerView: 3
        },
        575: {
            slidesPerView: 2
        },
        358: {
            slidesPerView: 1
        }
    }
});

var videoswiper = new Swiper ('.video-photo-swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

  var mainnewsswiper = new Swiper ('.mainnews-swiper', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
      },
      breakpoints: {
          767: {
              slidesPerView: 2
          },
          575: {
              slidesPerView: 1,
              spaceBetween: 0
          }
      }
  });

$('.show-news-btn').click(function(){
    $(this).text(function(i,old){
        return old=='Меньше новостей' ?  'Больше новостей' : 'Меньше новостей';
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
});
  $('.modal').on('shown.bs.modal', function () {
      $(this).find('[autofocus]').focus();
  });

//запрещаем закрывать логин-форму при клике за инпутом до отправки формы
  $(document).on("click.bs.dropdown.data-api", ".login-form .dropdown-menu", function (e) { e.stopPropagation() });

  //брендирование футер
  $(window).on('resize load',function () {
      if($('body').hasClass('branding')){
          $('.road').width($('.container').width()+20);
      }

  });

  // перемещаем блок "ГЛАВНОЕ"  и премиум-баннер на мобильных
  $(window).on('resize load' , function (){
      if ($(window).width()<='974')
      {
          $('.main-news-container>*').appendTo('.mob-news-container');
          $('.premium-banner>*').appendTo('.mob-premium-banner');
      }
      else {
          $('.mob-news-container>*').appendTo('.main-news-container');
          $('.mob-premium-banner>*').appendTo('.premium-banner');
      }
  });


  //Оборачиваем видеофрейм
  // $(window).on('load',function () {
  //     $(".news-blocks-container iframe").wrap("<div class='embed-responsive embed-responsive-4by3'></div>");
  // });