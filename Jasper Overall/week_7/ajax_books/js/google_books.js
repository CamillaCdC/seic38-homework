const fetchData = function(  ) {
  const title = document.getElementById('fetch').value 
  const xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4){
      return;
    }
    
    if (document.getElementById('heading')){
      document.getElementById('heading').remove()
    }
    
    if (  document.getElementById('title_image') ){
        document.getElementById('title_image').remove()
    }
  
    
    const data = JSON.parse( xhr.responseText );
    if (data.totalItems > 0){
      const img = document.createElement('img');
      img.id = 'title_image'
      const heading = document.createElement('h1');
      heading.id = 'heading'
      console.log(data)
      heading.innerHTML = data.items[0].volumeInfo.title 
      document.body.appendChild(heading)
      img.src = data.items[0].volumeInfo.imageLinks.thumbnail
      document.body.appendChild(img)
    } else {
      const heading = document.createElement('h1');
      heading.id = 'heading'
      heading.innerHTML = 'Book Not Found'
      document.body.appendChild(heading)
    }
  }
  
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`)
  
  xhr.send()
  
};

document.getElementById('submit').addEventListener('click', fetchData)
