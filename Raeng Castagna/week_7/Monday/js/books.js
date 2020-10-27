console.log('Hello World')

// https://www.googleapis.com/books/v1/volumes?q=search+terms
const fetchBook = function (key) {

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${key}`);
  xhr.send();
  console.log('the ready state changed', xhr.responseText);

  // const result = xhr.responsiveText["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  // const result = xhr.responseText["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  // console.log(result)

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    console.log('something', xhr.responsiveText)

    // create a paragraph on the dom.
    const p = document.createElement('p');
    // gets the book out of the input data
    const data = JSON.parse (xhr.responseText);
    // console.log(data)
    const title = data['items'][0]["volumeInfo"]['title']
    const authors = data['items'][0]["volumeInfo"]['authors']
    // console.log(data['items'][0]["volumeInfo"])
    // console.log('testing', title)
    p.innerHTML = `<strong>Title:</strong> ${title} by: <strong>${authors} </strong> `;
    document.body.appendChild (p);

    const img = document.createElement('img')
    img.src = data['items'][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    // console.log(img.src)
    img.innerHTML = `Cover: ${img.src}`
    document.body.appendChild (img);
  };
};

// event listener, onclick of button fetch book data from search input.
// Send to fetchBook function
document.getElementById('button').onclick = function () {
  const bookTitle = document.getElementById('search').value;
  fetchBook(bookTitle);
}
