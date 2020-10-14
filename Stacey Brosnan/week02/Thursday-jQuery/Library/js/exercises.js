
const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];

// - Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page./

const $ul = $('<ul></ul>'); //detached DOM node


        for (let i = 0; i < books.length; i++){
        const book = books[ i ];
        const $item = (`<li>${ book.title } by ${ book.author }</li>`);

        if (book.alreadyRead){
          $item.addClass('already-read');
        }
        $('ul').appendTo($item);
    }

document.body.appendChild(ul);
//
// - Bonus: Use a ul and li to display the books.
// - Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// - Bonus: Change the style of the book depending on whether you have read it or not.
