const bookFinder= function(){

  // take the name of the book from input
  let bookTitle = document.querySelector('#book-name').value;

  const xhr = new XMLHttpRequest();
  //using the google books API for a book which the name of it has been inputed.
  xhr.open('GET',`https://www.googleapis.com/books/v1/volumes?q=title:${ bookTitle }`);
  xhr.send();

  // finding the book
  xhr.onreadystatechange = function(){
    if (xhr.readyState !== 4) return;

    // take the first result
    let data = JSON.parse(xhr.responseText).items[0];
    // take the link to google book for this book
    let bookPreviewLink = data.volumeInfo.previewLink;
    // take the description
    let bookDesc = data.volumeInfo.description;
    // take the thumbnail image of cover
    let imgSrc = data.volumeInfo.imageLinks.thumbnail;
    // take the author(s) of the book
    let authors = data.volumeInfo.authors;
    // this will make the author(s) out of the array
    let bookAuthors = ''
    if (authors.length === 1) {
      bookAuthors = authors[0];
    }else{
      bookAuthors = authors.join(', ');
    };

    // making an div to append main and aside into it -
    // to have a better view.
    const bookDiv = document.createElement('div');
    // set an id for the div for making different css.
    bookDiv.setAttribute('id','book-container');

    ///////////////////////////////////////////////////////////
    // creating aside element
    const bookInfo = document.createElement('aside');

    // giving the image into it by creating it and giving the src to it
    const bookImg = document.createElement('img');
    bookImg.setAttribute('src',imgSrc);
    bookImg.setAttribute('alt',bookTitle);
    bookInfo.appendChild(bookImg);

    // appending an <br> to it for better view
    const br = document.createElement('br');
    bookInfo.appendChild(br);

    // making a link to the book
    const bookA = document.createElement('a');
    bookA.innerText = bookTitle.toUpperCase();
    bookA.setAttribute('href',bookPreviewLink );
    bookA.setAttribute('target','_blank');
    bookInfo.appendChild(bookA);

    // making a <p> for the name of author(s)
    const bookAu = document.createElement('p');
    bookAu.innerHTML = `<span>Author(s): </span>${bookAuthors}`;
    bookInfo.appendChild(bookAu);


    ///////////////////////////////////////////////////////////
    // creating the main element
    const bookDescription = document.createElement('main');

    // giving the book description to a <p> and appending it to main
    const bookP = document.createElement('p');
    bookP.innerText = bookDesc;
    bookDescription.appendChild(bookP);
    ////////////////////////////////////////////////////////

    // making a book div that contain main and aside and append it -
    //  to the mainDiv which the existed div with container id.
    const mainDiv = document.querySelector('#container');
    bookDiv.appendChild(bookInfo);
    bookDiv.appendChild(bookDescription);

    mainDiv.appendChild(bookDiv);

    // making the value of input to be null.
    document.querySelector('#book-name').value = null;
  };
};

// making the bookFinder function to be ready for action and waiting for click on -
// the exited button.
document.getElementById('btn-bookFinder').addEventListener('click',bookFinder);
