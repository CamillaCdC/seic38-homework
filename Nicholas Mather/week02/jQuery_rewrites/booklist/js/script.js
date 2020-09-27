const books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false,
   cover: 'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg'
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true,
  cover: 'https://brianchristian.org/images/The-Most-Human-Human-Paperback-Front-Cover.jpg'
  }];

//   Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

// for (i=0; i < books.length; i++) {
//   let $bookP = $('<p></p>').html(`${books[i].title}, by ${books[i].author} `)
//   $('body').append($bookP);
// };

// Bonus: Use a ul and li to display the books.

// $('body').append($('<ul></ul>'));
//
// for (i=0; i < books.length ; i++) {
//   let $bookli = $('<li></li>').html(`${books[i].title}, by ${books[i].author} `);
//   $('ul').append($bookli);
// };

// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.

// $('body').append($('<ul></ul>'));
//
// for (i=0; i < books.length ; i++) {
//   let $newImg = $('<img></img>').attr('src', books[i].cover);
//   $newImg.css({'width': '200px', 'height': '310px' });
//   let $bookli = $('<li></li>').html(`${books[i].title}, by ${books[i].author} `);
//   $('ul').append($bookli, $newImg);
// };


// Bonus: Change the style of the book depending on whether you have read it or not.

$('body').append($('<ul></ul>'));

for (i=0; i < books.length ; i++) {
  let $newImg = $('<img></img>').attr('src', books[i].cover);
  $newImg.css({'width': '200px', 'height': '310px' });
  let $bookli = $('<li></li>').html(`${books[i].title}, by ${books[i].author} `);
  if (books[i].alreadyRead) {
    $bookli.css({'opacity': '0.4'});
  }
  $('ul').append($bookli, $newImg);
};


// const createBooklist = function(obj) {
//   const body = document.body;
//   const newUl = document.createElement('ul');
//   for (i=0; i < obj.length; i++) {
//     const newBook = document.createElement('li');
//     const newImage = document.createElement('img');
//     newBook.textContent = `${obj[i].title} by ${obj[i].author}`;
//     newImage.src = obj[i].cover;
//     newUl.appendChild(newBook);
//     newUl.appendChild(newImage);
//     if (obj[i].alreadyRead) {
//         newBook.className = 'read'
//         console.log(obj[i]);
//     } else {
//       newBook.className = 'not-read'
//       console.log(obj[i]);
//       console.log(newUl);
//     }
//
//   }
//   body.appendChild(newUl);
// }
// createBooklist(books);
