$(function() {
    $('.accordion').on('click', function(e) {
      e.preventDefault();
      var target = $(this).next();
  
      if (target.hasClass('hide')) {
        target.removeClass('hide');
        target.addClass('show');
        $('.accordion div img').css('transform','rotate(180deg)');
        $(this).css('font-weight','900');
      } else {
        target.addClass('hide');
        target.removeClass('show');
        $('.accordion div img').css('transform','rotate(360deg)');
        $(this).css('font-weight','300');
      }
    })
  })
  