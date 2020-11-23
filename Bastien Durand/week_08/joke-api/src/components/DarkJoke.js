import React, { Component } from 'react';

class DarkJoke extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    }
    this._handleSubmit = this._handleSubmit.bind(this);
  }


  _handleSubmit(event) {
    event.preventDefault();
    console.log('Default Event Prevented')
    this.setState({ query: event.target.value })
    this.props.onSubmit( this.state.query )
  }


  render() {
    return(
      <div>
        <form onSubmit={ this._handleSubmit }>
          <button>Dark Joke</button>
        </form>
      </div>
    )
  }
}

export default DarkJoke
