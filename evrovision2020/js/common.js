$(document).ready(function () {
    $(".menu_link").click(function () {
	   $(".modal_menu").fadeIn(150);
    });
	$(".close_link_menu").click(function () {
		$(".modal_menu").fadeOut(150);
		
    });
});

$(document).ready(function () {
    $(".search_link").click(function () {
		$(".modal_search").fadeIn(150);
    });
	$(".close_link_search").click(function () {
		$(".modal_search").fadeOut(150);
		
    });
});

$(document).ready(function () {
    $(".auth_link").click(function () {
	   $(".modal_auth").fadeIn(150);
		
    });
	$(".close_link_auth").click(function () {
		$(".modal_auth").fadeOut(150);
    });
});

$(document).ready(function () {
    $(".auth_vote").click(function () {
        $(".modal_vote").fadeIn(150);

    });
    $(".close_link_vote").click(function () {
        $(".modal_vote").fadeOut(150);
    });
});

$(document).ready(function () {
    $(".auth_vote_notlogedin").click(function () {
        $(".modal_vote_notlogedin").fadeIn(150);

    });
    $(".close_link_vote_notlogedin").click(function () {
        $(".modal_vote_notlogedin").fadeOut(150);
    });
});

$(document).ready(function () {
    $(".content__video").click(function () {
        $(".modal_video").fadeToggle(150);
		$("body").addClass("modal-active");
	  	tag.src = "https://www.youtube.com/iframe_api";
     	var firstScriptTag = document.getElementsByTagName('script')[0];
     	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    });
	$(".close_link_video").click(function () {
        $(".modal_video").fadeToggle(150);
		$("body").removeClass("modal-active");
		stopVideo();
    });

	// 29.01.2020
	$("header iframe").each(function(indx){if($(this).attr("src").indexOf('youtube.com')!=-1){$(this).wrap("<div class='embed-responsive'></div>");}});

	// 29.01.2020

});


$(document).bind('keydown', function(e) { 
        if (e.which == 27) {
			
		if ($(".modal_menu").css('display') === 'block') {
		$(".modal_menu").fadeOut(150);
		} 
		
		if ($(".modal_auth").css('display') === 'block') {
		$(".modal_auth").fadeOut(150);
		} 
		
		if ($(".modal_search").css('display') === 'block') {
		$(".modal_search").fadeOut(150);
		} 		
        }
    }); 



function enableCommAddForm(){
	$('.commentfield__form').addClass("commentfield__form_full");
	$('.commentfield__controls').css("display", "block");
	$('.comments__inputbox__close').fadeIn(200);
}
function disableCommAddForm(){
	$('.commentfield__form').removeClass("commentfield__form_full");
	$('.commentfield__controls').css( "display", "none");
	$('.comments__inputbox__close').fadeOut(200);
	$('.comments__inputbox__input').val('');
	}


