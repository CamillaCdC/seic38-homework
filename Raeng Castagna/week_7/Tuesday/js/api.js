// console.log('Hello World')

const findWeather = function () {
  event.preventDefault();

  const city = $('#city').val();
  const apiKey = `cece7299dfef60cb67148539b99717d1`

  const urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  $.ajax(urlWeather).done(function (info) {
    console.log('data', info)
    const selectedCity = info.name
    const currentCity = info.main.temp
    const clouds = info.weather[0].description
    // console.log('currentCity', currentCity)
    $('#temperature').after(`<p>The temperature in ${selectedCity} is ${currentCity}°F, with ${clouds}</p>`)
  })
}

const findNasa = function () {
  event.preventDefault();

  const eventEntry = $('#nasa').val();

  const url = `https://api.nasa.gov/planetary/apod?api_key=zIIFQFDLceDliuyp08NYgLzprHALPawMji2aFNJI`
  $.ajax(url).done(function (info) {
    console.log('data', info)
    const factExplanation = info.explanation
    console.log(factExplanation)
    const imageUrl = info.url
    console.log(imageUrl)
    $('#nasa-display').after(`<p>${factExplanation}</p>`)
    $('#nasa-image').attr('src', imageUrl)
  })
};

const findQuote = function () {
  event.preventDefault();

  const dailyQuote = $('#bad-btn');

  const url = `https://breaking-bad-quotes.herokuapp.com/v1/quotes`
  $.ajax(url).done(function (info) {
    console.log('data', info)
    const author = info[0].author;
    console.log(author);
    const quote = info[0].quote;
    console.log(quote);
    $('#quote-display').after(`<p>${quote} - ${author}</p>`)
  })
};

$(document).ready(function () {
  const $form = $('#search-form');
  $form.on('submit', findWeather);

  $('#nasa-btn').on('click', findNasa);
  $('#bad-btn').on('click', findQuote);
});
