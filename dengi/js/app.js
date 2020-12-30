
$(window).on('load',function () {
  $('.animate-part').addClass("animated");
})



$(".scroll_to").click(function(){
  var a=$(this).attr("href");
  if($(a).length!=0){
    $("html, body").animate({scrollTop:$(a).offset().top-20},800)
  }
  return false
});

var elements = document.getElementsByClassName('stiky');
for (var j = 0; j < elements.length; j++) {
  new hcSticky(elements[j], {
    stickTo: elements[j].parentNode,
     top: 20,
    followScroll:false
  });
}

$('.carousel').carousel({
  pause: true,
  interval: false
});