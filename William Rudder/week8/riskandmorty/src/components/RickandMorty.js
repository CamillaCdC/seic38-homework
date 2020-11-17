import React, {Component} from 'react';
import axios from 'axios';


import DeadorAlive from './DeadorAlive'
import ShowMortalImages from './ShowMortalImages'

// import Portrait from './Portrait';

class RickandMorty extends Component {

  constructor () {
  super();
  this.state = {
    images: [],
    name: [],
    alive: [],
    dead: []
  };
  this.fetchCharacterInfo = this.fetchCharacterInfo.bind(this);
  this.fetchCharacterMortalStatus = this.fetchCharacterMortalStatus.bind(this);
}

  fetchCharacterInfo() {
    var random = Math.floor(Math.random() * 19);
    const characterURL = `https://rickandmortyapi.com/api/character/${random}`
    axios(characterURL).then((results) => {
      console.log(results)
      const charName = (results.data.name)
      this.setState({name: charName})
      const charImage = (results.data.image)
      this.setState({images: charImage})

    });
  }

fetchCharacterMortalStatus() {
  const url = 'https://rickandmortyapi.com/api/character'
  axios(url).then((results) => {
    for (var i = 0; i <= 19; i++) {
          var status = results.data.results[i]["status"]

          // console.log(status)

          //alive members
          if (status === "Alive") {
          const charsalive =  results.data.results[i]["name"]
            this.setState({alive: charsalive})
            console.log(charsalive)
          } else if (status === "Dead") {
            const charsdead =  results.data.results[i]["name"]
              this.setState({dead: charsdead})
              console.log(charsdead)
          }
        }
  })
}

render() {
  return (
    <div>
        <h1> {this.state.name}  </h1>
        <button onClick={this.fetchCharacterInfo}>Random Rick and Morty Character</button>
        <DeadorAlive onSubmit={this.fetchCharacterMortalStatus} />
        <button onClick={this.fetchCharacterMortalStatus}>deadoralive</button>
        <ShowMortalImages alive={this.state.alive} dead={this.state.dead} />
        <img src={this.state.images}/>
      </div>
    );
 }
}

export default RickandMorty;
