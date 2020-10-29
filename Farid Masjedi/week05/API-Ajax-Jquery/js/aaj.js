let week_days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// the function to use ajax every time the button clicked
const currentWeather = function(e){
  e.preventDefault();

  // the name of the city which inputed by user.
  let $city = $('#city').val();

  // OpenCage Geocoding API : https://opencagedata.com/api
  // this api will give the latitude and longitude of every city.
  // using the api url to use it
  const lt_ln = `https://api.opencagedata.com/geocode/v1/json?q=${ $city }&key=18d24c7af78f44ea9ec92c73aebf5b93`;

  // using ajax with jquery to have the result of the api
  $.ajax(lt_ln).done( function(data_new){
    let $lat = data_new.results[0].geometry.lat;
    let $lng = data_new.results[0].geometry.lng;

    // OpenWeather API : https://openweathermap.org/api
    // this api will give many information about the temperature of the day and forecasting the next 7 days weather
    // using the api url to use it
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${$lat}&lon=${$lng}&appid=9c064eab136615c60ca46c935f092a07&exclude=hourly`;

    // calling the ajax with jquery to have the result.
    $.ajax(url).done( function(data){
      // this will take the index of today in the week_days array
      let today_day = new Date().getDay()

      // making a div for putting the name of the city and the day
      $container_city = $('<div id=container-city></div>');
      $container_city.append(`<h2>${$city.charAt(0).toUpperCase()+$city.slice(1)}</h2>`);
      $container_city.append(`<h3>${week_days[today_day]}</h3>`);
      // $('#container').append($container_city);

      // creating a new div for putting the weather icon and the temperature with -
      // kelvin degree and celsius degree
      $container_day = $('<div id=container-day></div>')

      $container_icon = $('<div id=container-icon></div>');
      $container_icon.append(`<img src="${'http://openweathermap.org/img/wn/'+data.current.weather[0].icon+'.png'}">`);
      $container_icon.append(`<p> ${data.current.weather[0].main} </p>`)
      $container_day.append($container_icon);

      // putting both of them and appending to the div with container-div id
      $container_current_temp = $('<div id=container-Ctemp></div>');
      // converting kelvin to celcius : c = k - 273.15
      $container_current_temp.append(`<p>${data.current.temp} \u00B0&#8490</p>
                                      <p>${(data.current.temp-273.15).toFixed(2)} &#8451</p>`);
      $container_day.append($container_current_temp);
      // $('#container').append($container_day);

      // creating a new div for putting more information of today temperature and wind speed
      $container_temp_info = $('<div id =container-Tinfo></div>');
      $container_temp_info.append(`<p>Day: ${(data.daily[0].temp.day-273.15).toFixed(1)} &#8451;</p>
                                   <p>Night: ${(data.daily[0].temp.night-273.15).toFixed(1)} &#8451;</p>
                                   <p>Max: ${(data.daily[0].temp.max-273.15).toFixed(1)} &#8451;</p>
                                   <p>Min: ${(data.daily[0].temp.min-273.15).toFixed(1)} &#8451;</p>
                                   <p>Wind speed: ${data.daily[0].wind_speed} (m/s)</p>`);

      // appending all to the div#container
      // $('#container').append($container_temp_info);

      // creating new div for forecasting the next 7 days
      $container_table = $('<div id=table></div>');
      // $('#container').append($container_table);

      // this will iterate into one of the result of the api (daily) and will give us -
      // different results.
      for (i=1; i<8; i++){
        day_index = (today_day+i)%7;
        $next_day = $(`<p>${week_days[day_index]}</p>`)
        $next_img = $('<img>').attr('src','http://openweathermap.org/img/wn/'+data.daily[i].weather[0].icon+'.png');
        $next_temp_max_c = $(`<p> ${(data.daily[i].temp.max-273.15).toFixed(2)} &#8451</p>`);
        $next_temp_min_c = $(`<p> ${(data.daily[i].temp.min-273.15).toFixed(2)} &#8451</p>`);

        // making different ids for the divs as we can then give them `display:inline-block` -
        // - css.
        $container_T = $(`<div id="container_${i}"><div>`);
        $container_T.append($next_img);
        $container_T.append($next_day);
        $container_T.append($next_temp_max_c);
        $container_T.append($('<hr>'));
        $container_T.append($next_temp_min_c);
        $container_table.append($container_T);

        // making the value of input to be null.
        $('#city').val(null);
      };

      // $('#container').append($('<hr>').attr('style','border-color:rgba(35,15,35,0.75)'));
      $('#head').after($('<hr>').attr('style','border-color:rgba(35,15,35,0.75)'));
      $('#head').after($container_table);
      $('#head').after($container_temp_info);
      $('#head').after($container_day);
      $('#head').after($container_city);

    });
  });
};

// the event listener
$(document).ready( function(){
  $('form').on('submit',currentWeather);
})
