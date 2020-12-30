function sliders_init() {
  var mySwiper = new Swiper ('.top-swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  var swiper = new Swiper('.wrld-tabs', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.lft',
      prevEl: '.rgt'
    }
  });
  // слайдеры рубрик
  var citySwiper = new Swiper ('#city_blc .swiper-container', {
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '#city_blc .red-arrow',
      prevEl: '#city_blc .red-arrow_prev'
    },
    breakpoints: {
      767: {
        // loop: false,
        slidesPerView: 'auto',
      }
    }
  });
  var movieSwiper = new Swiper ('#movie_blc .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    // loop: true,
    navigation: {
      nextEl: '#movie_blc .red-arrow',
      prevEl: '#movie_blc .red-arrow_prev'
    },
    breakpoints: {
      767: {
        // loop: false,
        slidesPerView: 'auto',
      }
    }
  });
  var musicSwiper = new Swiper ('#music_blc .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    // loop: true,
    navigation: {
      nextEl: '#music_blc .red-arrow',
      prevEl: '#music_blc .red-arrow_prev'
    },
    breakpoints: {
      767: {
        // loop: false,
        slidesPerView: 'auto',
      }
    }
  });
  var restaurantsSwiper = new Swiper ('#restaurants_blc .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    // loop: true,
    navigation: {
      nextEl: '#restaurants_blc .red-arrow',
      prevEl: '#restaurants_blc .red-arrow_prev'
    },
    breakpoints: {
      767: {
        // loop: false,
        slidesPerView: 'auto',
      }
    }
  });
  var artSwiper = new Swiper ('#art_blc .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    // loop: true,
    navigation: {
      nextEl: '#art_blc .red-arrow',
      prevEl: '#art_blc .red-arrow_prev'
    },
    breakpoints: {
      767: {
        // loop: false,
        slidesPerView: 'auto',
      }
    }
  });



  var karabasSwiper = new Swiper ('.swiper-karabas', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,


    // Navigation arrows
    navigation: {
      nextEl: '.red-arrow',
      prevEl: '.red-arrow_prev',
    },
    breakpoints: {
      767: {
        // loop: false,
        slidesPerView: 2,
      },

      575: {
        // loop: false,
        slidesPerView: 1,
      }
    }

  })


}

(function ($) {
  $(document).ready(function () {
    $('.rd-navbar').RDNavbar({
      stickUpClone: true,
      stickUpOffset: 250
    });
  });
})(jQuery);


$(window).on('load resize',function () {
  sliders_init();
});
sliders_init();

$('.scroll_to').click(function () {
  var scroll_el = $(this).attr('href');
  if ($(scroll_el).length != 0) {
    $('html, body').animate({scrollTop: $(scroll_el).offset().top-60 }, 800);
  }
  return false;
});

// $(window).on('load  scroll',function () {
var elements = document.getElementsByClassName('stiky');
for (var i = 0; i < elements.length; i++) {
  new hcSticky(elements[i], {
    stickTo: elements[i].parentNode,
    top: 67,
    followScroll:false
  });
}
//});

$('.show-news-btn').click(function(){
  $(this).text(function(i,old){
    return old=='Меньше новостей' ?  'Больше новостей' : 'Меньше новостей';
  });
});

lightbox.option({
  'showImageNumberLabel': false,
  'positionFromTop': 100,
  'wrapAround': true
});

function advancedfilter(){
  $('.filter-list').toggleClass('showed hidded');
  $('.filter-buttons .fas').toggleClass('fa-angle-down fa-angle-up');
}


// 05.02.2020
$("#article-content iframe").each(function(indx){if($(this).attr("src").indexOf('google.com/maps/embed')!=-1){$(this).wrap("<div class='emb-responsive'></div>");}});

// 05.02.2020

$(window).on('load resize',function () {

  var pswiper = new Swiper('.popular-news-tabs', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.lft2',
      prevEl: '.rgt2'
    }
  });
});


