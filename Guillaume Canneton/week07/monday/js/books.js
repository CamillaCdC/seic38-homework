// $(document).ready(function() {
//
// });


let book = '';
const request = new XMLHttpRequest();
$("#fetch").click(function(){
  book = $("#input").val();
  request.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${book.trim()}`);
  request.send();
  request.onreadystatechange = function() {
    if (request.readyState !== 4) return;
    $("#title").text("Title: " + JSON.parse(request.responseText)["items"][0]["volumeInfo"]["title"]);
    $("#thumb").attr("src", JSON.parse(request.responseText)["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]);
    $("#author").text("Author: " + JSON.parse(request.responseText)["items"][0]["volumeInfo"]["authors"][0]);
    $("#published").text("Published: " + JSON.parse(request.responseText)["items"][0]["volumeInfo"]["publishedDate"]);
    $("#summary").text("Summary: " + JSON.parse(request.responseText)["items"][0]["volumeInfo"]["description"]);
  }
})
