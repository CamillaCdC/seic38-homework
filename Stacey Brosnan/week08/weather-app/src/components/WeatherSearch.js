import React, {Component} from 'react';
import axios from 'axios';
import _ from 'underscore'

import SearchForm from './SearchForm';
import Info from './Info';

class WeatherSearch extends Component {
  constructor(){
    super();
      this.state = { data: null };
      this.fetchWeather = this.fetchWeather.bind(this);
  }

  fetchWeather(city) {
    console.log('Fetching', city)
    const weatherURL = 'http://api.openweathermap.org/data/2.5/weather';
    const weatherParams = {
      q: city,
      units: 'metric',
      appid: '535c7b3145849033512a4dfaab159c53'
    };


    axios.get(weatherURL, {params: weatherParams}).then((result) => {
      this.setState({data: result.data});
      console.log(result.data);
    }, () => {
      this.setState({data: null})
    });
    }

  render() {
    return (
        <div>
          <h1>Current Weather</h1>
          <h2>Search by city</h2>
            <SearchForm onSubmit={ this.fetchWeather }/>
            <Info data={ this.state.data }/>
        </div>
      );
    }
}

export default WeatherSearch;
