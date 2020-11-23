import React, {Component} from 'react';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({query: event.target.value});
  }

  _handleSubmit(event){
    event.preventDefault();
    console.log('About to search for', this.state.query)
    this.props.onSubmit( this.state.query );
  }

  render(){
    return(
      <form onSubmit={this._handleSubmit}>
        <input type="search" placeholder="London" required onInput={ this._handleInput }/>
        <input type="submit" value="search" />
      </form>
    );
  }
}

export default SearchForm;
