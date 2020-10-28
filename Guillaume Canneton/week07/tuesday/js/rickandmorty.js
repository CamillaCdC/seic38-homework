const fetchEpisode = function (event) {
  event.preventDefault();
  let $season = $('#season').val();
  let $episode = $('#episode').val();
  let episodeFetch = 0;
  if ( $season == 1 ) {
    episodeFetch = $episode;
  } else {
    episodeFetch = 11 + 10*(parseInt($season) - 2) + parseInt($episode);
  };

  const url = `https://rickandmortyapi.com/api/episode/${episodeFetch}`

  $('#data').empty()

  $.ajax(url).done(function(episode) {
    $('#data').append(`<h3 class="data" id="title">Title: ${episode.name}</h3>`);
    $('#data').append(`<h3 class="data" id="air_date">Air Date: ${episode.air_date}</h3>`);
    $('#data').append('<h3>List of Characters in this episode:</h3>');
    $('#data').append('<ul>');
    const chars = episode.characters;
    for ( i = 0; i < chars.length; i++) {
      $.ajax(chars[i]).done(function(character) {
      $('#data').append(`<li>${character.name}</li><img src=${character.image}>`)
      })
    $('#data').append('</ul>');
    };
  });


}

$(document).ready(function(){
  $('#fetch').on('click', fetchEpisode);
})
