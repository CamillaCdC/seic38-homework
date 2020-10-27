const fetchWeather = function(event) {
  event.preventDefault();

    const $city = $('#city').val();
    console.log($city);

    const url = `http://api.openweathermap.org/data/2.5/weather?q={${$city}}&appid={535c7b3145849033512a4dfaab159c53}`;

    console.log(url);

    $.ajax(url).done(function (data){
        console.log(data);
})
};

const fetchDog = function() {

    const url = `https://dog.ceo/api/breeds/image/random?json`;

    console.log(url);

    $.ajax(url).done(function (data){
      const dog = data.message;
      $('#dog').attr('src', dog);
}).fail(function(){
  console.error('There was an error')
})
};

const fetchNASA = function() {

    const url = `https://api.nasa.gov/planetary/apod?api_key=xXkY38Nq2dNPaJLI0dnEABfZe5so0GsFYnp8Oaqh`;

    console.log(url);

    $.ajax(url).done(function (data){
      $('#Nasa_paragraph').text(data.explanation);
      $('#NASA').attr('src', data.url);
}).fail(function(){
  console.error('There was an error')
})
};


$(document).ready( function () {
  const $form = $('#search-form');
  $form.on('submit', fetchWeather );
  $('#fetch').on('click', fetchDog);
  fetchDog();
  // $('#nasa').on('click', fetchDog);
  fetchNASA();
});


// 535c7b3145849033512a4dfaab159c53
