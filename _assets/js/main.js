// general js for the project that wouldn't be a reuseable component


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
    $('body').removeClass('loading');
  },1000);
});


///////////////////////////////////////
//    Cursor tracking icon
///////////////////////////////////////

$(document).bind('mousemove', function(e){
  var width = $('#cursor.active').width();
  $('#cursor.active').css({
     left:  e.pageX-width/2,
     top:   e.pageY-width
  });
});

$('.js-cursor').hover(
  function() {
    var type = $(this).data('cursor-type');
    $('#cursor').addClass('active');
    $('#cursor').addClass('cursor--' + type);
  }, function() {
    $('#cursor').removeClass();
  }
);



///////////////////////////////////////
//    Glow movement
///////////////////////////////////////

$(document).scroll(function() {
  var wh = $(window).height();
  var dh = $(document).height();
  var scrolled = $(document).scrollTop() / (dh-wh)*100;
  var glow = $('.background__glow');
  glow.css('right',scrolled-50 + "%");
});

