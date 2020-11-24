import React, { Component } from 'react';
import axios from 'axios';

import PokeForm from './PokeForm'
import Card from './Card'





class PokeFind extends Component {
  constructor() {
    super();
    this.state = {pokemon: [] };
  }


  fetchImages(terms) {
    console.log('searching pokiapi for...', terms)
    const pokiURL = `https://pokeapi.co/api/v2/pokemon/charizard`;

    axios.get(pokiURL).then(results => {
      console.log(results);
      this.setState({ pokemon: results.data })
    });
  }

  render () {
    return (
      <div>
        <h1>Pokedex</h1>
        <PokeForm onSubmit= { this.fetchImages }/>
        <Card pokemon= { this.state.pokemon }/>
      </div>
    );
  }
};




export default PokeFind;
