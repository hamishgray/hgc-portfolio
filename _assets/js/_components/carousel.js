
// =========================================
//  SLIDER
// =========================================


function slider(target, direction){

  var slideTransition = 300;
  var gallery    = $('#'+target);
  var activeSlide = gallery.find('.gallery__slide.is-open');
  var nextSlide   = activeSlide.next('.gallery__slide');
  var prevSlide   = activeSlide.prev('.gallery__slide');
  var firstSlide  = gallery.find('.gallery__slide:first');
  var lastSlide   = gallery.find('.gallery__slide:last');


  if(direction == 'next'){

  /* NEXT SLIDE
   =======================================*/

    activeSlide.addClass('is-closing-next').removeClass('is-open');
    // prep transition
    if( nextSlide.length ) {
      nextSlide.addClass('is-next');
    }else{
      firstSlide.addClass('is-next');
    }
    // delay to allow for CSS transition
    setTimeout(function() {
      activeSlide.removeClass('is-closing-next').addClass('is-closed').hide();
    }, slideTransition);

    if ( nextSlide.length ) {
      nextSlide.show().removeClass('is-closed is-next').addClass('is-opening');
      setTimeout(function() {
        nextSlide.removeClass('is-opening').addClass('is-open');
      }, slideTransition);
    } else {
      firstSlide.show().removeClass('is-closed is-next').addClass('is-opening');
      setTimeout(function() {
        firstSlide.removeClass('is-opening').addClass('is-open');
      }, slideTransition);
    }

  }else if(direction == 'prev'){

  /* PREV SLIDE
   =======================================*/

    activeSlide.addClass('is-closing-prev').removeClass('is-open');
    // prep transition
    if( prevSlide.length ) {
      prevSlide.addClass('is-prev');
    }else{
      lastSlide.addClass('is-prev');
    }
    // delay to allow for CSS transition
    setTimeout(function() {
      activeSlide.removeClass('is-closing-prev').addClass('is-closed').hide();
    }, slideTransition);

    if ( prevSlide.length ) {
      prevSlide.show().removeClass('is-closed is-prev').addClass('is-opening');
      setTimeout(function() {
        prevSlide.removeClass('is-opening').addClass('is-open');
      }, slideTransition);
    } else {
      lastSlide.show().removeClass('is-closed is-prev').addClass('is-opening');
      setTimeout(function() {
        lastSlide.removeClass('is-opening').addClass('is-open');
      }, slideTransition);
    }

  }

}

$('.js-gallery-nav').on('click', function(event) {
  event.preventDefault();
  var direction = $(this).data('nav-direction');
  var target = $(this).data('target');;
  slider(target, direction);
});

