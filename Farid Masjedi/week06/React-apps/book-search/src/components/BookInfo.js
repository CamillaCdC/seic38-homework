import React, {Component} from 'react';

class BookInfo extends Component {

  // this function will check if there is an author or more than one -
  // author and will make a paragraph for it to use in the render() function.
  author = (authorArray) => {
    if (authorArray){
      if (authorArray.length === 1){
        return <p key={authorArray}><span>Author(s): </span>{authorArray[0]}</p>;
      }else{
        return <p key={authorArray}><span>Author(s): </span>{authorArray.join(', ')}</p>;
      };
    }
  }

  // info that comes from the props object which passed by BookEngine -
  // to the component, has many books and info about them. by mapping through -
  // each one we can achive them and assign them to an html tag.

  // according to the info that passed from BookEngine, the return of -
  // the info contains arrays and inside of each array, there are some info -
  // about the book achieved by axios.
  // each info is an array = [book title, link to google book,
                          //  thumbnail cover image, description about the book,
                          //  book author(s)]
  render(){
    return(
      <div>

        {this.props.info.map( (book) => (
          <div className='book-container'>
            <aside>

              <h4 key={ book[0] }> { book[0] } </h4>

              <a href={ book[1] } target='_blank' key={ book[1] }>
                <img src={ book[2] } key={ book[2] } />
              </a>

              <br />

              <a href={ book[1] } target='_blank' key={ book[1]+' link'}>
                Google Books Link
              </a>
              
              {this.author(book[4])}
            </aside>

            <main>
              <p key={ book[3] }> { book[3] } </p>
            </main>
          </div>

        ))}

      </div>
    );
  }
}

export default BookInfo;
