var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
  }];

for (i = 0; i < books.length; i++) {
  const $item = $("<li>").html(`${ books[i].title } by ${ books[i].author }`);
  const $list = $('<ul>').append( $item );
  $('body').append($list);
};
