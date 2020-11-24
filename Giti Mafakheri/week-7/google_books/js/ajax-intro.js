const fetchFact = function(){

  const title = document.getElementById('title').value;
  const xhr = new XMLHttpRequest();
  const mainUrl =`https://www.googleapis.com/books/v1/volumes?q=title:${title}`;
  console.log(mainUrl);
  xhr.open('GET', mainUrl);
  xhr.send();

xhr.onreadystatechange =function(){
if (xhr.readyState !== 4) return;
let x = document.createElement("IMG");
let data = JSON.parse (xhr.responseText);
let url = data.items[0].volumeInfo.imageLinks.thumbnail;
x.src = url;
document.body.appendChild(x);

};

};

document.getElementById('fetch').addEventListener('click', fetchFact);
