import React, {Component} from 'react';

class SearchForm extends Component {
  //to take the title from user
  state = {
    title: ''
  }
  // this will handle the submit and will pass the -
  // tilte that has been passed to the BookEngine component.
  _handleSubmit= (e) => {
    e.preventDefault();
    this.props.onSubmit( this.state.title );
    this.setState ( { title: '' } )
  }
  //this will take the input and assigns it to the state.
  _handleInput= (e) => {
    this.setState( { title: e.target.value });
  }

  render(){
    return(

      <div className='book-finder'>

        <header>
            <h1> Book Finder Using Ajax </h1>
        </header>

        <form onSubmit ={ this._handleSubmit }>
          <label><h2>Search for the book: </h2></label>
          <input type='text'
                 className='book-name'
                 placeholder='Das Kapital'
                 onInput={this._handleInput}
                 value={this.state.title}
                 required
          />
          <button className='btn-bookFinder'> Search </button>
        </form>

      </div>
    );
  }
}

export default SearchForm;
