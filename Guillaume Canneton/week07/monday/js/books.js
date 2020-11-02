

$("#search-form").submit(function(event){
  event.preventDefault();
  let book = $("#input").val();
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${book.trim()}`);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    $("#title").text("Title: " + JSON.parse(xhr.responseText)["items"][0]["volumeInfo"]["title"]);
    $("#thumb").attr("src", JSON.parse(xhr.responseText)["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]);
    $("#author").text("Author: " + JSON.parse(xhr.responseText)["items"][0]["volumeInfo"]["authors"][0]);
    $("#published").text("Published: " + JSON.parse(xhr.responseText)["items"][0]["volumeInfo"]["publishedDate"]);
    $("#summary").text("Summary: " + JSON.parse(xhr.responseText)["items"][0]["volumeInfo"]["description"]);
  }
})
