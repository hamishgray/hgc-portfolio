// general js for the project that wouldn't be a reuseable component

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


// Glow moving right to left
$(document).scroll(function() {
  var wh = $(window).height();
  var dh = $(document).height();
  var scrolled = $(document).scrollTop() / (dh-wh)*100;
  var glow = $('.background__glow');
  glow.css('right',scrolled-50 + "%");
});

