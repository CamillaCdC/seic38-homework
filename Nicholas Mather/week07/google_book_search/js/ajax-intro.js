const fetchBook = function () {
  //get results div
  results = document.querySelector('div')
  // Clear books already found
  if (results.lastElementChild != null) {
    results.removeChild(results.lastElementChild)
    results.removeChild(results.lastElementChild)
  }

  //Create a new request. Get title from page @ create search URL
  const xhr = new XMLHttpRequest();
  let title = document.getElementById('search').value;
  let url = `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`;

  // console.log(title, url) //check title and URL are correct

  //Get info from url
  xhr.open('GET', url);
  xhr.send();

  // When information is ready
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4 ) {
      return
    };

    // Set up page elements
    const h2 = document.createElement('h2');
    const img = document.createElement('img')

    //grab correct data and send to page element
    const data = JSON.parse( xhr.responseText)
    h2.innerHTML = data.items[0].volumeInfo.title
    img.src = data.items[0].volumeInfo.imageLinks.thumbnail

    results.appendChild( h2 )
    results.appendChild( img )


    // console.log( title ) //For finding items within data
  };
};

document.getElementById('search_button').addEventListener('click', fetchBook);
