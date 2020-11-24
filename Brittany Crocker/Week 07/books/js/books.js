const fetchBook = function () {
  let bookName = document.getElementById('book_name').value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${bookName}`);

  xhr.send();

  xhr.onreadystatechange =  function () {
    // Data is ready and retrieved when at readyState 4
    if (xhr.readyState !== 4) return;

    const data = JSON.parse(xhr.responseText);

    const h3 = document.createElement('h3');
      const title = data["items"][0]["volumeInfo"]["title"];
      h3.innerHTML = title;
      document.body.appendChild( h3 );

    const img = document.createElement('img');
      const thumbnail = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
      img.src = thumbnail;
      document.body.appendChild(img);

    const h5 = document.createElement('h5');
      const author = data["items"][0]["volumeInfo"]["authors"].join(" ");
      console.log(author);
      h5.innerHTML = `By ${author}`;
      document.body.appendChild(h5);

    try {
      const bookPrice_el = document.createElement('h6');
        const bookPrice = data["items"][0]["saleInfo"]["listPrice"]["amount"];
        bookPrice_el.innerHTML = bookPrice;
        document.body.appendChild(bookPrice_el);
      const currency = document.createElement('h6');
        const bookPrice_currency = data["items"][0]["saleInfo"]["listPrice"]["currencyCode"];
        currency.innerHTML = bookPrice_currency;
        document.body.appendChild(currency);
      };
    catch(err) {
      let bookPrice = "No price"
    };

    const p = document.createElement('p');
      const blurb = data["items"][0]["volumeInfo"]["description"];
      p.innerHTML = blurb;
      document.body.appendChild(p);




  };
};

document.getElementById('fetch').addEventListener('click', fetchBook);
