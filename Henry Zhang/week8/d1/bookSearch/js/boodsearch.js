const fetchCover = function (event){
    event.preventDefault();   // dont leave this page

    console.log('fetching cover');
    // get the title
    const title = document.getElementById('title').value;
    console.log(title);

    // fetch the book via AJAX
    const xhr = new XMLHttpRequest();
    const url = `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`;
    xhr.open('GET', url);     // step 1
    xhr.send();   //async   step 2    (3, 4)

    // console.log(xhr.responseText);

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;   // not ready yet
        // console.log(xhr.responseText);
        // convert the response to a js object
        const data = JSON.parse(xhr.responseText);
        // console.log( data.items );
        // extract the book cover
        const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
        // display the book cover
        document.getElementById('cover').setAttribute('src',cover);
        // document.getElenmentById('cover').src = cover;

    };

};

// find the button
// const button = document.getElenmentById('searh');
const form = document.getElementById('search-form');

// attach fetchCover to the button on click
// button.addEventListener('click',fetchCover);
form.addEventListener('submit',fetchCover);
