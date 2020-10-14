// - Create a new Javascript file and link to it with a script tag at the bottom.
// - (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// - (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// - Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// - Create a new img element and set its src attribute to a picture of you. Append that element to the page.

const bodyNode = document.body;
bodyNode.style.fontFamily = "Arial, sans-serif";

document.getElementById('nickname').innerHTML = 'Hongs';

document.getElementById('favorites').innerHTML = 'My plants, Secret Hitler, and my neighbours cat';

document.getElementById('hometown').innerHTML = 'Auckland, New Zealand';

const items = document.getElementsByTagName ('li');
for ( let i = 0; i < items.length; i++ ){
  items[i].className = 'ListItems';
}

const image = document.getElement('img');
image.src = "http://via.placeholder.com/400x600";
document.body.appendChild(image);

// const nicknameNode = document.getElementById('nickname');
// nicknameNode.textContent = "Hongs"

// const favoritesNode = document.getElementById('favorites');
// favoritesNode.textContent = "My plants, Secret Hitler, and my neighbour's cat"
//
// const hometownNode = document.getElementById('hometown');
// hometownNode.textContent = "Auckland, New Zealand"

// const li = document.getElementsByTagName('li');
// for ( let i = 0; i < li.length; i++ ) {
// li[i].className = 'Listitem';
// console.log(li[i].className);
//   }



//
// ## The Book List
//
// Keep track of which books you read and which books you want to read!
//
// - Create a webpage with an h1 of "My Book List".
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Copy this array of books:
// ```javascript
// var books = [
//   {title: 'The Design of EveryDay Things',
//    author: 'Don Norman',
//    alreadyRead: false
//   },
//   {title: 'The Most Human Human',
//   author: 'Brian Christian',
//   alreadyRead: true
//   }];
// ```
// - Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// - Bonus: Use a ul and li to display the books.
// - Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// - Bonus: Change the style of the book depending on whether you have read it or not.
