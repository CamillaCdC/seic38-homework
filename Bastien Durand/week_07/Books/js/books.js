
let userSearch

const fetchBook = function () {

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${userSearch}`);
  xhr.send();

  xhr.onreadystatechange = function () {
    if(xhr.readyState !== 4) return;

    const data = JSON.parse(xhr.responseText);

    const img = document.createElement('img')
    const book_image = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
    img.src = book_image
    document.body.appendChild(img)

    const h6 = document.createElement('h6')
    const book_author = data["items"][0]["volumeInfo"]["authors"].join(', ')
    h6.innerHTML = book_author
    document.body.appendChild(h6)

    const h5 = document.createElement('h5')
    const book_description = data["items"][0]["volumeInfo"]['description']
    h5.innerHTML = book_description
    document.body.appendChild(h5)

    const h4 = document.createElement('h4')
    const book_maturity_rating = data["items"][0]["volumeInfo"]["maturityRating"]
    h4.innerHTML = book_maturity_rating
    document.body.appendChild(h4)

    try {

    const h3 = document.createElement('h3')
    const book_list_price = data["items"][0]["saleInfo"]['retailPrice']['amount']
    h3.innerHTML = book_list_price
    document.body.appendChild(h3)

    const h2 = document.createElement('h2')
    const book_list_price_currency = data["items"][0]["saleInfo"]['retailPrice']['currencyCode']
    h2.innerHTML = book_list_price_currency
    document.body.appendChild(h2)

  } catch (err) {

    let book_list_price = "No price list"

  }};
}

document.getElementById('userInput').addEventListener('click', function () {
  userSearch = document.getElementById("inputField").value
  fetchBook();
})
