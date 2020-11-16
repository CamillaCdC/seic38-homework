import React, { Component } from 'react';
import axios from 'axios';
import _ from 'underscore';
import Episodeselector from './Episodeselector.js';
import Characterlist from './Characterlist.js';
import Episodeinfos from './Episodeinfos.js';

class Rickandmorty extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      air_date: '',
      character: [{
        name: '',
        url: ''
      }]
    }
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(episode) {

    const url = `https://rickandmortyapi.com/api/episode/${episode}`
    axios(url).then((results) => {
      const title = results.name;
      const air_date = results.air_date;
      this.setState({
        title: title,
        air_date: air_date,
      })
    })
  }


  render() {
    return (
      <div>
        <h1>Rick and Morty episodes database</h1>
        <Episodeselector onSubmit={ this.fetchData }/>
        <Episodeinfos title={ this.state.title } air_date={ this.state.air_date } />
      </div>
    );
  }
}

export default Rickandmorty
