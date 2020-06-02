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
//    Animate logo paths
///////////////////////////////////////

var path = $('.hp__pane-logo__path');
$('.hp__pane-logo__path').each(function(){
  var length = this.getTotalLength();
  $(this).css({ 'stroke-dasharray': length });
  $(this).css({ 'stroke-dashoffset': length });
});



///////////////////////////////////////
//    BG image swap
///////////////////////////////////////


function bgImageChange(background){
  var bgContainer = $('.js-bg-image');
  var bgImage = bgContainer.children();
  // if not animating
  if( bgContainer.hasClass('is-ready') ){
    bgContainer.removeClass('is-ready');
    bgContainer.fadeOut(1000);
    setTimeout(function(){
      bgImage.css({ 'background-image': 'url("' + background + '")' });
      bgContainer.fadeIn(1000);
      bgContainer.addClass('is-ready');
    },1000);
  }
}


$('.js-project-link').mouseenter(function(){
  var background = $(this).data('bg-image');
  bgImageChange(background);
}).mouseleave(function(){
  var defaultBackground = $('.js-bg-image').data('bg-image');
  setTimeout(function(){
    bgImageChange(defaultBackground);
  },1000);
});



///////////////////////////////////////
//    Page load out
///////////////////////////////////////

$('.js-exit-link').click(function(){
  event.preventDefault();

  var url = $(this).attr('href');
  $('body').addClass('exiting');
  setTimeout(function(){
    document.location.href = url;
  },1000);
});

$(document).ready(function(){
  $('body').addClass('ready');
});