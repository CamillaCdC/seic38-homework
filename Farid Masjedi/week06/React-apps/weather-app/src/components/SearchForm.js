import React, {Component} from 'react';

class SearchForm extends Component {
  // this state will update by what the user will input.
  state={
    city: ''
  }

  // this will handle the submit event. after the submitting, the city state will sent -
  // as an argument to the function that assigned to the SearchForm component in -
  // WeatherEngine component. after that the value of the input will be ''.
  _handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit( this.state.city );
    this.setState( { city: '' } );
  }

  // by inputing the city state will change to what inputed.
  _handleInput = (e) => {
    this.setState( { city: e.target.value } );
  }
  // form to input and submit.
  render(){
    return(
      <div className="head">
        <header>
          <h1>Weather</h1>
        </header>

        <form onSubmit={ this._handleSubmit } >
          <label> City Name: </label>
          <input type='text'
                 placeholder='Sydney'
                 onInput= {this._handleInput}
                 className='city'
                 value= {this.state.city}
                 required />
          <button className='search'> Search </button>
        </form>
      </div>
    )
  }
}

export default SearchForm;
