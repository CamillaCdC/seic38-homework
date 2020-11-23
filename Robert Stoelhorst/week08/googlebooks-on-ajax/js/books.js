console.log("is this working")

const getCover = $("#fetch").click(function() {
  const book = $("#getImage").val();
  // console.log(book)
  const xhr = new XMLHttpRequest();
  xhr.open ('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${book}`);
  xhr.send();
  console.log(xhr.responseText)

  xhr.onreadystatechange = function () {

    if (xhr.readyState !== 4) { return; }

    const img = document.createElement('img');
    img.className = "thumbnails";

    const data = JSON.parse(xhr.responseText);
    img.src = data.items[0]["volumeInfo"]["imageLinks"]["thumbnail"]

    const p = document.createElement('p');
    p.innerHTML = data.items[0]["volumeInfo"]["authors"]

          document.body.appendChild(img);
          document.body.appendChild(p);
  };
});
