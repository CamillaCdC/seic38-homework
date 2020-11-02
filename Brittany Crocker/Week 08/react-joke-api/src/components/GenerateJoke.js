import React, { Component } from 'react';

class GenerateJoke extends Component {
  constructor () {
    super();
    this.state = {
      query: ''
    }
    this._handleClick = this._handleClick.bind(this)

  }
  _handleClick(event) {
    this.setState({query: event.target.value})
    this.props.onClick( this.state.query )
  }

  render() {
    return (
        <div>
        <button value="Programming" onClick={ this._handleClick }>Programming</button>
        </div>
    )
  }
}

export default GenerateJoke
