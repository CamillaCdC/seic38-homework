const fetchFact = function () {

  let searchTerm = $('#search').val()
  $.ajax(`api.openweathermap.org/data/2.5/weather?q={London}&appid={793ac2d1685cb9fbb4b94011f77ae0f3
  }`).done(function (info) {
    $('#submit').after(`<p>${info.weather}</p>`)
  });

};
$(document).ready(function() {
  $('#submit').on('click', fetchFact)
});
