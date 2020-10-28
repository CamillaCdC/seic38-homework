document.addEventListener("DOMContentLoaded", () => {
  console.log("is this thing on?");

  $("#search-button").on("click", () => {
    const searchString = $("#search-input").val();
    $.ajax(`https://pokeapi.co/api/v2/pokemon/${searchString}`).done((info) => {
      $(
        "#image-holder, .pokemon-name, .pokemon-type, .pokemon-description"
      ).empty();
      $("<img>")
        .attr("src", info.sprites.front_default)
        .appendTo("#image-holder");
      $(".pokemon-name").text(`${info.name}`);
      $(".pokemon-type").text(`${info.types[0].type.name} type pokemon`);
      $.each(info.moves, (key, value) => {
        $("<p>").text(`${value.move.name}`).appendTo(".pokemon-description");
      });
    });
  });
});
