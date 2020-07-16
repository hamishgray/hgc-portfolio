
$(document).ready(function(){
  setTimeout(function(){
    $('body').addClass('animate');
  },500);
});


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

$('body').addClass('loading');
$(document).ready(function(){
  setTimeout(function(){
    $(document).scrollTop('0')
    $('body').removeClass('loading').addClass('ready');
  },1000);
});