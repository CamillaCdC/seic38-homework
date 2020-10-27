const fetchFact = function () {

  let searchTerm = $('#search').val()
  $.ajax(`
  }`).done(function (info) {
    $('#submit').after(`<p>${info.weather}</p>`)
  });

};
$(document).ready(function() {
  $('#submit').on('click', fetchFact)
});
