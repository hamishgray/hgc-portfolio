///////////////////////////////////////
//      smooth-scrolling - http://css-tricks.com/snippets/jquery/smooth-scrolling/
///////////////////////////////////////
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});


///////////////////////////////////////
//      inserts current year
///////////////////////////////////////
$('.js-year').html(new Date().getFullYear());


///////////////////////////////////////
//      detects touch device
///////////////////////////////////////
if ("ontouchstart" in document.documentElement){
  $('html').addClass('touch');
} else {
  $('html').addClass('no-touch');
}


///////////////////////////////////////
//   Query string searcher
///////////////////////////////////////

function queryString(sParam){
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++){
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam){
      return sParameterName[1];
    }
  }
}


///////////////////////////////////////
//    Scroll fade
///////////////////////////////////////

function scrollFade(){
  var st = $(document).scrollTop()*1.8;
  var wh = $(window).height();
  var opac = ((wh - st) / wh);
  if(opac>0.2){
    $('.js-fade').css({
    	"opacity": opac
    });
  }else{
    $('.js-fade').css({
      "opacity": "0.2"
    });
  }
}

$(document).ready(function() { scrollFade(); });
$(document).scroll(function() { scrollFade(); });



///////////////////////////////////////
//    BG image swap
///////////////////////////////////////

var bgContainer = $('.js-bg-image');
var bgImage = bgContainer.children();
var defaultImage = bgContainer.data('bg-image');

$('.js-project-link').mouseenter(function(){
  var projectImage = $(this).data('bg-image');
  bgContainer.removeClass('is-active').fadeOut(1000);
  setTimeout(function(){
    bgImage.css({ 'background-image': 'url("' + projectImage + '")' });
    bgContainer.fadeIn(1000).addClass('is-active');
  },1000);
}).mouseleave(function(){
  bgContainer.removeClass('is-active').fadeOut(1000);
  setTimeout(function(){
    bgImage.css({ 'background-image': 'url("' + defaultImage + '")' });
    bgContainer.fadeIn(1000).addClass('is-active');
  },1000);
});


