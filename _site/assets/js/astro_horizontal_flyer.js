$('#pulse-trigger').on('click', function() {
  var $this=$(this);
  var astro=$('#dark-astro');

  $this.removeClass('pulse-anim');
  $this.addClass('pulse-clear');
  astro.removeClass('dark-astro-pos');
  astro.addClass('dark-astro-pos-animate');

  $('.dark-astro-pos-animate').on('animationend webkitAnimationEnd oAnimationEnd', function() {
    astro.removeClass('dark-astro-pos-animate');
    astro.addClass('dark-astro-pos');
    $this.removeClass('pulse-clear');
    $this.addClass('pulse-anim');
  })
})
