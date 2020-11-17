const express = require('express');
const axios = require('axios');
const ejs = require('ejs');

const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs);

const PORT = 1337;

server.get('/', (req,res) => {
  res.render('home.ejs');
});

var week_days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

server.get('/city-weather', ( req, res) => {
  const lt_ln = `https://api.opencagedata.com/geocode/v1/json?q=${ req.query.city }&key=18d24c7af78f44ea9ec92c73aebf5b93`;
  axios.get(lt_ln).then( (data) => {
      const lat = data.data.results[0].geometry.lat;
      const lng = data.data.results[0].geometry.lng;
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=9c064eab136615c60ca46c935f092a07&exclude=hourly`;
      const today_day_index = new Date().getDay();
      const today_day = week_days[today_day_index];

      axios.get(url).then( (result) => {
        var next_day_array=[];
        var next_img_array=[];
        var next_day_max_temp=[];
        var next_day_min_temp=[];
        
        for( i=1; i<8; i++){
          day_index = (today_day_index+i)%7;
          next_day_array.push(week_days[day_index]);
          next_img_array.push('http://openweathermap.org/img/wn/'+result.data.daily[i].weather[0].icon+'.png');
          next_day_max_temp.push((result.data.daily[i].temp.max-273.15).toFixed(2));
          next_day_min_temp.push((result.data.daily[i].temp.min-273.15).toFixed(2))
        }
        res.render('weather.ejs', {cityName: req.query.city,
                                   day: today_day,
                                   src: 'http://openweathermap.org/img/wn/'+result.data.current.weather[0].icon+'.png',
                                   main: result.data.current.weather[0].main,
                                   temp: (result.data.current.temp-273.15).toFixed(2),
                                   day_temp: (result.data.daily[0].temp.day-273.15).toFixed(1),
                                   night_temp: (result.data.daily[0].temp.night-273.15).toFixed(1),
                                   max: (result.data.daily[0].temp.max-273.15).toFixed(1),
                                   min: (result.data.daily[0].temp.min-273.15).toFixed(1),
                                   wind: ((result.data.daily[0].wind_speed)*3.6).toFixed(2),
                                   next_days: next_day_array,
                                   next_days_icon: next_img_array,
                                   next_days_max: next_day_max_temp,
                                   next_days_min: next_day_min_temp
      })
    })
  })
})
server.listen(PORT, () => console.log(`Now serving on http://localhost:${ PORT }/`));
