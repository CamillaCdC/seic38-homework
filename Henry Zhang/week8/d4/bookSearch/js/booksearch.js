  const fetchCover = function (event) {
  event.preventDefault(); // Don't leave this page.

  const title = document.getElementById('title').value;

  const xhr = new XMLHttpRequest(); // readyState: 0
  const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`;
  xhr.open('GET', url); // readyState: 1
  xhr.send(); // THIS IS ASYNC // readyState: 2 (=> 3 => 4)

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return; // not ready yet.

    const data = JSON.parse( xhr.responseText );
    const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
    document.getElementById('cover').setAttribute('src', cover);
  };

};

const form = document.getElementById('search-form');
form.addEventListener('submit', fetchCover);
