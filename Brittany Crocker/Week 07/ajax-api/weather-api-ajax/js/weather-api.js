const fetchFact = function () {

  let searchTerm = $('#search').val()
  $.ajax(`https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49
  `).done(function (info) {
    $('#submit').after(`<p>${info.title}</p>`)
    $('#submit').after(`<p>${info.species[0].name}</p>`)
    console.log(info.species)
  });

};
$(document).ready(function() {
  $('#submit').on('click', fetchFact)
});
