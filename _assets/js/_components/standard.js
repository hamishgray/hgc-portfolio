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
//    Banner fade
///////////////////////////////////////

function bannerFade(){
  var st = $(document).scrollTop()*1.8;
  var wh = $(window).height();
  var opac = ((wh - st) / wh);
  if(opac>0.2){
    $('.js-bg-fade').css({
    	"opacity": opac
    });
  }else{
    $('.js-bg-fade').css({
      "opacity": "0.2"
    });
  }
}

$(document).ready(function() { bannerFade(); });
$(document).scroll(function() { bannerFade(); });



var bg = $('.page-bg--home');
var bgImage = $('.page-bg--home .page-bg__image');

bgImage.hide();
$('.js-project-link').mouseenter(function(){
  var projectColour = $(this).data('bg-colour');
  var projectImage = $(this).data('bg-image');
  if( bg.hasClass('is-ready') ){
    bgImage.css({
      'background-color': '#' + projectColour ,
      'background-image': 'url("' + projectImage + '")'
    });
    bg.removeClass('is-ready');
    bgImage.fadeIn(1000);
    bg.addClass('is-active');
  }else{
    setTimeout(function(){
      bgImage.css({
        'background-color': '#' + projectColour ,
        'background-image': 'url("' + projectImage + '")'
      });
      bg.removeClass('is-ready');
      bgImage.fadeIn(1000);
      bg.addClass('is-active');
    },1000);
  }

}).mouseleave(function(){
  bg.removeClass('is-active');
  bgImage.fadeOut(1000);
  setTimeout(function(){
    bg.addClass('is-ready');
  },1000);
});


