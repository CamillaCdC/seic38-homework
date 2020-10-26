document.addEventListener("DOMContentLoaded", () => {
  console.log("is this thing on?");

  const searchString = () => {
    let input = document.getElementById("search-input");
    input = input.value.split(" ").join("%20");
    return `https://www.googleapis.com/books/v1/volumes?q=title:${input}`;
  };

  const newImage = (data) => {
    const thumbnail = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"];
    const img = document.createElement("img");
    img.setAttribute("src", thumbnail);
    const imgContainer = document.querySelector("#image-holder");
    imgContainer.innerHTML = "";
    imgContainer.append(img);
  };

  const newTitle = (data) => {
    let title = data["items"][0]["volumeInfo"]["title"];
    const p = document.createElement("p");
    p.setAttribute("class", "title is-5");
    p.textContent = title;
    const titleContainer = document.querySelector(".book-title");
    titleContainer.innerHTML = "";
    titleContainer.append(p);
  };

  const newDescription = (data) => {
    let description = data["items"][0]["volumeInfo"]["description"];
    const p = document.createElement("p");
    p.setAttribute("class", "subtitle is-6");
    p.textContent = description;
    const descriptionContainer = document.querySelector(".book-description");
    descriptionContainer.innerHTML = "";
    descriptionContainer.append(p);
  };

  const fetchBook = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `${searchString()}`);
    xhr.send();
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return;
      }
      data = JSON.parse(xhr.responseText);
      newImage(data);
      newTitle(data);
      newDescription(data);
    };
  };

  document.getElementById("search-button").addEventListener("click", () => {
    fetchBook();
  });
});
