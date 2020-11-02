import React, { Component } from 'react';
import axios from 'axios'
import GenerateJoke from './GenerateJoke'
import DisplayJokes from './DisplayJokes'



class JokeSearch extends Component {
  constructor() {
    super()
    this.state = {
      joke: []
    }
    this.retrieveJoke = this.retrieveJoke.bind(this)
  }

  retrieveJoke() {
    const jokesURL = 'https://sv443.net/jokeapi/v2/joke/Any?type=single'
    axios(jokesURL).then( (results) => {
      const joke = results.data.joke
      this.setState({joke: joke})
    })
  }

  render(){
  return(
    <div>
    <GenerateJoke onClick={this.retrieveJoke}/>
    <DisplayJokes joke={ this.state.joke }/>
    </div>
  )}
}

export default JokeSearch;
