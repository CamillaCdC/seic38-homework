
const fetchBook = function (event) {
  event.preventDefault();
  
  const title = document.getElementById('book_title').value;
  console.log(title);

  const xhr = new XMLHttpRequest();
  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`;

  xhr.open ('GET', url);
  xhr.send();

  xhr.onreadystatechange = function (){
    if (xhr.readyState !== 4) return;

    const data = JSON.parse( xhr.responseText );
    const cover = data.items[0].volumeInfo.imageLinks.thumbnail
    console.log(cover);
    document.getElementById('cover').setAttribute('src', cover);

 };

};

  const form = document.getElementById('search-form');
  form.addEventListener('submit', fetchBook);
