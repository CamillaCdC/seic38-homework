const xhr = new XMLHttpRequest();
var booksearch = $("#bookbutton").click(function(){
        var book = $("#booksearch").val();
        console.log(book)
        xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${book}`);
        xhr.send();
        console.log(xhr.responseText)
        xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      //create a paragraph
      const img = document.createElement('img');
      const data = JSON.parse(xhr.responseText);
       img.src = data.items[0]["volumeInfo"]["imageLinks"]["thumbnail"]
      const p = document.createElement('p');
      p.innerHTML = data.items[0]["volumeInfo"]["authors"]
      document.body.appendChild(img);
      document.body.appendChild(p);
      };
    });
