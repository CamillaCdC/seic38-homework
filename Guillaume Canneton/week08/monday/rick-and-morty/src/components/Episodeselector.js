import React, { Component } from 'react';

class Episodeselector extends Component {
  constructor() {
    super();
    this.state = {
      episode: ''
    };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({episode: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit( this.state.episode );
  }

  render() {
    return(
      <div>
        <h2>Choose an episode:</h2>
        <form onSubmit={ this._handleSubmit } >
          <input type="search" placeholder="12" required onInput={ this._handleInput } />
          <input type="submit" value="Find" />
        </form>
      </div>
    )
  }


}

export default Episodeselector;
