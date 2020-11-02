import React, { Component } from 'react'
import axios from 'axios';

import ProgrammingJoke from './ProgrammingJoke'
import MiscJoke from './MiscJoke'
import DarkJoke from './DarkJoke'
import PunJoke from './PunJoke'
import DisplayJokes from './DisplayJokes'


class Jokes extends Component {

  constructor() {
    super();
    this.state = {
      joke: []
    }
    this.fetchProgrammingJoke = this.fetchProgrammingJoke.bind(this);
  }


fetchProgrammingJoke() {
  const jokeURL = 'https://sv443.net/jokeapi/v2/joke/Programming?type=single'

  axios(jokeURL).then( (result) => {
    const retrievedJoke = result.data.joke;
    this.setState({joke: retrievedJoke})
    console.log(retrievedJoke)
  })
}

fetchMiscJoke() {
  const jokeURL = 'https://sv443.net/jokeapi/v2/joke/Miscellaneous?type=single'

  axios(jokeURL).then( (result) => {
    const retrievedJoke = result.data.joke;
    this.setState({joke: retrievedJoke})
    console.log(retrievedJoke)
  })
}

fetchDarkJoke() {
  const jokeURL = 'https://sv443.net/jokeapi/v2/joke/Dark?type=single'

  axios(jokeURL).then( (result) => {
    const retrievedJoke = result.data.joke;
    this.setState({joke: retrievedJoke})
    console.log(retrievedJoke)
  })
}

fetchPunJoke() {
  const jokeURL = 'https://sv443.net/jokeapi/v2/joke/Pun?type=single'

  axios(jokeURL).then( (result) => {
    const retrievedJoke = result.data.joke;
    this.setState({joke: retrievedJoke})
    console.log(retrievedJoke)
  })
}


  render() {
    return(
      <div>
        <ProgrammingJoke onSubmit={ this.fetchProgrammingJoke } />
        <MiscJoke onSubmit={ this.fetchMiscJoke }/>
        <DarkJoke onSubmit={ this.fetchDarkJoke }/>
        <PunJoke onSubmit={ this.fetchPunJoke }/>
        <DisplayJokes joke={this.state.joke}/>
      </div>
    )
}
}

export default Jokes
