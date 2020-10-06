$(document).ready(function () {
  var img = $('img');
  $('#walk').click(function () {
    img.fadeIn(1000, function() {
      img.animate({
        left: $(window).width() - 400
      }, 3000, function () {
        img.addClass('back');
        img.animate( {
          left: '0px'
        }, 3000, function () {
          img.fadeOut(1000);
        })
      });
    });
  });
});
