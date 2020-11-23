import SearchForm from './SearchForm';
import BookInfo from './BookInfo';
import React, {Component} from 'react';
import axios from 'axios';
import _ from 'underscore';

class BookEngine extends Component {
  // this info will change by the info that will comes by axios.
  state = {
    info: []
  }

  // this is the function that will do the axios(ajax) job and will give us -
  // book that in the google which related to the searched title.
  googleBookApi = (title) => {
    // url for using the google book api
    const bookURL = `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`;
    axios( bookURL ).then( (results) => {

      const books_info = _(results.data.items).map( (book) => {
        return [book.volumeInfo.title,
                book.volumeInfo.previewLink,
                book.volumeInfo.imageLinks.thumbnail,
                book.volumeInfo.description,
                book.volumeInfo.authors]
      });

      this.setState( {info: books_info});

    });
  }
  // this function will use SearchForm and BookInfo components.
  render(){
    return(
      <div className='container'>
        <SearchForm onSubmit={ this.googleBookApi }/>
        <BookInfo info={ this.state.info } />
      </div>
    );
  }
}

export default BookEngine;
