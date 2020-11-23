import SearchForm from './SearchForm';
import WeatherInfo from './WeatherInfo';
import React, {Component} from 'react';
import axios from 'axios';
import _ from 'underscore';

// this class is the present the parent component.
class WeatherEngine extends Component {

  // state of this component will be the city, the todayInfo and forecastInfo -
  // that comes from the axios(ajax). the week_days are passed to give us the name -
  // of the days. show_result is a state that will make the WeatherInfo component -
  // to be displayed or not.( if there is no search started, this state is false -
  // and the WeatherInfo component will not be displayed.)
  state = {
    city: '',
    todayInfo: [],
    forecastInfo: [],
    week_days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    show_result: false
  }

  // the openweathermap ajax will give us a code of icon. the url of this image icon -
  // has specefic url. this function will take the icon code and give the url for -
  // the image.
  image_src = (icon) => {
    return 'http://openweathermap.org/img/wn/'+icon+'.png';
  }

  // this function will give us the information of two ajaxs. the first ajax will -
  // give us the latitude and longitude of the city. the city comes from SearchForm -
  // component. at the end of this function, it will change the state object of this -
  // component.
  weatherInfo = (city) => {

    const lt_ln = `https://api.opencagedata.com/geocode/v1/json?q=${ city }&key=18d24c7af78f44ea9ec92c73aebf5b93`;
    axios(lt_ln).then( (lat_lan) => {
      const lat = lat_lan.data.results[0].geometry.lat;
      const lng = lat_lan.data.results[0].geometry.lng;

      const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=9c064eab136615c60ca46c935f092a07&exclude=hourly`;

      axios(weatherURL).then ( (data) => {

        let today_day = new Date().getDay();

        const todayInfo = [this.state.week_days[today_day],
                           (data.data.current.temp-273.15).toFixed(2),
                           (data.data.daily[0].temp.day-273.15).toFixed(2),
                           (data.data.daily[0].temp.night-273.15).toFixed(2),
                           (data.data.daily[0].temp.max-273.15).toFixed(2),
                           (data.data.daily[0].temp.min-273.15).toFixed(2),
                           data.data.current.weather[0].main,
                           this.image_src(data.data.current.weather[0].icon),
                           (data.data.current.wind_speed*3.6).toFixed(2)
                           ];

        let forecastInfo = _(data.data.daily).map( (forecast,index) => {
          return [this.state.week_days[ (today_day+index)%7 ],
                  this.image_src(forecast.weather[0].icon),
                  (forecast.temp.max-273.15).toFixed(2),
                  (forecast.temp.min-273.15).toFixed(2)
                 ];
        });
        // the first element of the ajax gives us the information for today that -
        // we do not need it (as we have them in todayInfo variable).
        forecastInfo = forecastInfo.slice(1);
        // change the state object.
        this.setState( { city: city.charAt(0).toUpperCase()+city.slice(1),
                         todayInfo: todayInfo,
                         forecastInfo: forecastInfo,
                         show_result: true});
      });
    });
  }

  // point: the second component in the div is WeatherInfo that check if the -
  // show_result state is true, then it will be displayed, otherwise it is gonna be -
  // null.(not displayed)
  render(){
    return(
      <div className='container'>
        <SearchForm onSubmit={ this.weatherInfo } />
        { this.state.show_result ? <WeatherInfo city={ this.state.city }
                     todayInfo={ this.state.todayInfo }
                     forecastInfo={ this.state.forecastInfo }/> : null }
      </div>
    );
  }
}

export default WeatherEngine;
