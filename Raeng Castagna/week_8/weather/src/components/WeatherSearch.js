import React, {Component} from 'react';
import axios from 'axios';
import _ from 'underscore';

import SearchForm from './SearchForm';
import Temperature from './Temperature';

class WeatherSearch extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
      city: '',
     };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather(city) {
    const weatherURL = 'http://api.openweathermap.org/data/2.5/weather';
    const weatherparams = {
      q: city,
      units: 'metric',
      appid: `cece7299dfef60cb67148539b99717d1`,
    };

    axios.get(weatherURL, {params: weatherparams}).then((result) => {
      console.log(result);
      // const temperature = _(results.data.main.temp).map(generateURL)
      // console.log(temperature)
      this.setState( { weatherData: result.data } );
    });
  }

  render() {
    return (
      <div>
        <h1> Open Weather Search </h1>
        <SearchForm onSubmit={ this.fetchWeather } />
        <Temperature data={ this.state.weatherData } />
      </div>
    )
  }
}

export default WeatherSearch;
