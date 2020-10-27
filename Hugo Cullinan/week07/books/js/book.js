

const getBook = function () {
  const xhr = new XMLHttpRequest();
  let bookValue = document.getElementById('title').value;
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q={${bookValue}}`);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4)  return;

    const data = JSON.parse( xhr.responseText );

    const title = document.createElement('h2');
    title.innerHTML = data.items[0].volumeInfo.title;
    const author = document.createElement('p');
    author.innerHTML = data.items[0].volumeInfo.authors[0];
    const published = document.createElement('p');
    published.innerHTML = data.items[0].volumeInfo.publishedDate;
    const thumb = document.createElement('img');
    thumb.src = data.items[0].volumeInfo.imageLinks.thumbnail;


    document.body.appendChild( title );
    document.body.appendChild( author );
    document.body.appendChild( published );
    document.body.appendChild( thumb );


  };
};
document.getElementById('submit').addEventListener('click', getBook);
