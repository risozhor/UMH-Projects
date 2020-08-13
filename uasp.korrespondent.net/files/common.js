$(window).resize(function () {
    if ($(this).width() > 480) {


        $(function () {
            $('.article__title a').hover(
	  function () {
	      $(this).parent().parent().find('.article__img-link').addClass("_hover");
	  },
	  function () {
	      $(this).parent().parent().find('.article__img-link').removeClass("_hover");
	  });
        });

        $(function () {
            $('.article__title h2 a').hover(
	  function () {
	      $(this).parent().parent().parent().find('.article__img-link').addClass("_hover");
	  },
	  function () {
	      $(this).parent().parent().parent().find('.article__img-link').removeClass("_hover");
	  });
        });

        $(function () {
            $('.article__title h3 a').hover(
	  function () {
	      $(this).parent().parent().parent().find('.article__img-link').addClass("_hover");
	  },
	  function () {
	      $(this).parent().parent().parent().find('.article__img-link').removeClass("_hover");
	  });
        });

        $(function () {
            $('.article_rubric_top .article__img').hover(
   function () {
       $(this).parent().parent().find('.article__title').css("text-decoration", "underline");
   },
   function () {
       $(this).parent().parent().find('.article__title').css("text-decoration", "none");
   });
        });

        $(function () {
            $('.blog-rubric__title a').hover(
	  function () {
	      $(this).parent().parent().parent().find('.article__img-link').addClass("_hover");
	  },
	  function () {
	      $(this).parent().parent().parent().find('.article__img-link').removeClass("_hover");
	  });
        });

        $(function () {
            $('.blog-rubric__content .article__img').hover(
   function () {
       $(this).parent().parent().find('.blog-rubric__title').css("text-decoration", "underline");
   },
   function () {
       $(this).parent().parent().find('.blog-rubric__title').css("text-decoration", "none");
   });
        });

    }
});


$(document).ready(function () {
    $(window).resize();
});



$(function () {
    $('.poll-archive__item .poll-ask a').click(function () {

        if ($(this).parent().parent().find('.poll-result').css("display") === "none") {
            $(this).parent().parent().find('.poll-result').css("display", "block");
            $(this).parent().parent().find('.poll_link').css("display", "block");
        }

        else {
            $(this).parent().parent().find('.poll-result').css("display", "none");
            $(this).parent().parent().find('.poll_link').css("display", "none");
        }
        return false;
    });
});
 
 
function changeClass1(){
    $('.inputbox_input').removeClass("_full_size");
    $('.inputbox_input').val("Ваш комментарий...");
    $('.inputbox_control').css( "display", "none");
}
function changeClass2(){
    $('.inputbox_input').addClass("_full_size");
    $('.inputbox_input').val("");
    $('.inputbox_control').css("display", "block");
}	


selection = {
	nonie: function() {
		return window.getSelection ? true : false;
	},

	getText: function() {
		return window.getSelection ? window.getSelection().toString() : (document.selection.createRange ? document.selection.createRange().text : "");
	},

	deselect: function() {
		window.getSelection ? window.getSelection().removeAllRanges() : (document.selection ? document.selection.empty() : false);
	}
};

function foundMistake(articleID, typeID) {
    if (articleID > 0) {
        $(document).keypress(function (e) {
            if ((e.keyCode == 10) || (e.keyCode == 13 && e.ctrlKey)) {
                var s = selection.getText();
                var l = s.length;
                var r = window.location.href;
                var t = document.title; 
                
                if (l > 0) {

                    if (l > 254) {
                        alert("Вы выделили слишком объемный участок текста. Укажите одно предложение с ошибкой.");
                    } else {
                        var msg = "Отправить сообщение об ошибке и продолжить чтение?";
                        msg += "\n-------------------------------------------------------\n";
                        msg += s;
                        msg += "\n-------------------------------------------------------\n";
                        if (confirm(msg)) {
                            $.post("/grammar.hnd", { text: s, id: articleID, type: typeID, cap: t, reff: r }, function (data) {
                                selection.deselect();
                            });
                        }
                    }
                }
            }
        });
    }
}

function FormDefaultButton(event, target) {
    // srcElement is for IE
    var element = event.target || event.srcElement;

    if (13 == event.keyCode && !(element && "textarea" == element.tagName.toLowerCase())) {
        var defaultButton;
        defaultButton = document.getElementById(target);

        if (defaultButton && "undefined" != typeof defaultButton.click) {
            defaultButton.click();
            event.cancelBubble = true;
            if (event.stopPropagation)
                event.stopPropagation();
            return false;
        }
    }
    return true;
}

$(function () {
    "use strict";
    var button = $(".back-top");
    var buttonLink = $(".back-top a");
    var hideAfterPixel = 400;
    button.hide();

    $(window).scroll(function() {
        if ($(window).scrollTop() > hideAfterPixel) {
            button.show();
        } else {
            button.hide();
        }
    });

    buttonLink.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
});
