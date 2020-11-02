const pokeAdd = function (event) {
  event.preventDefault();

  const name = $('#name').val().toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${ name }/`;




  $.ajax(url).done(function (data) {
    const pokemon = data.sprites.front_default;
    const shiny = data.sprites.front_shiny;
    const hp = data.stats[0].base_stat;
    const atk = data.stats[1].base_stat;
    const def = data.stats[2].base_stat;
    const $name = $('<h3>').text(name);
    let $thumb = $('<img>').attr('src', pokemon);
    const $hp = $('<p>').text(`Health: ${hp}`);
    const $atk = $('<p>').text(`Attack: ${atk}`);
    const $def = $('<p>').text(`Defence: ${def}`);
    $('body').append($name, $thumb, $hp, $atk, $def);


    $($thumb).on('click',function () {
      $thumb.attr('src', shiny);
    });

  });

};

$(document).ready(function () {
  const $form = $('#search-form');
  $form.on('submit', pokeAdd);
});
