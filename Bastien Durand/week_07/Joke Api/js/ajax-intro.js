const programmingJoke = function () {

  $.ajax('https://sv443.net/jokeapi/v2/joke/Programming?type=single').done(function (data) {
    $('#h3Container').after(`<p>${ data.joke }</p>`)
    console.log(data.joke)
  })
}

$(document).ready(function () {
  $('#programmingButton').on('click', programmingJoke);
});

const miscJoke = function () {

  $.ajax('https://sv443.net/jokeapi/v2/joke/Miscellaneous?type=single').done(function (data) {
    $('#h3Container').after(`<p>${ data.joke }</p>`)
    console.log(data.joke)
  })
}

$(document).ready(function () {
  $('#miscButton').on('click', miscJoke);
});

const darkJoke = function () {

  $.ajax('https://sv443.net/jokeapi/v2/joke/Dark?type=single').done(function (data) {
    $('#h3Container').after(`<p>${ data.joke }</p>`)
    console.log(data.joke)
  })
}

$(document).ready(function () {
  $('#darkButton').on('click', darkJoke);
});

const punJoke = function () {

  $.ajax('https://sv443.net/jokeapi/v2/joke/Pun?type=single').done(function (data) {
    $('#h3Container').after(`<p>${ data.joke }</p>`)
    console.log(data.joke)
  })
}

$(document).ready(function () {
  $('#punButton').on('click', punJoke);
});
