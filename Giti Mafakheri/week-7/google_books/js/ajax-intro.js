const fetchFact = function(){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=title?json');
  xhr.send();

xhr.onreadystatechange =function(){
if (xhr.readyState !== 4) return;


let x = document.createElement("IMG");
console.log(x);
let data = JSON.parse (xhr.responseText);
let url = data.items[0].volumeInfo.imageLinks.thumbnail;
console.log("url is");
console.log(url);
x.src = url;
document.body.appendChild(x);

};

};
document.getElementById('fetch').addEventListener('click', fetchFact);
