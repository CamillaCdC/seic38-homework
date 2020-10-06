
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
$('body').css({'font-family': 'Arial, Sans Serif'});

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.

$('#nickname').html('Forcebe');
$('#favorites').html('Frozen Crown, Xoth, Wilderun & The Mountain Goats.');
$('#hometown').html('Sydney');


// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

$('body ul li').addClass('listitem');
$('.listitem').css({'color': 'red'});


// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

const $newImg = $('<img src="images/me.jpg"></img>');
$newImg.css({'width': '300px', 'height': '300px'});
$('body').append($newImg);

// const bodyNode = document.body;
// bodyNode.style.fontFamily = "Arial, sans-serif";
//
// const nicknameNode = document.getElementById('nickname');
// nicknameNode.textContent = "Forcebe"
//
// const favoritesNode = document.getElementById('favorites');
// favoritesNode.textContent = "Xoth, Wilderun, The Mountain Goats"
//
// const hometownNode = document.getElementById('hometown');
// hometownNode.textContent = "Sydney, Australia"
//
// const li = document.getElementsByTagName('li')
// for (i = 0; i < li.length; i++) {
//     li[i].className = 'listitem';
//
//   }
// const listItem = document.getElementsByClassName('listitem')
// for (i=0; i< listItem.length; i++){
// listItem[i].style.color = "red";
// }
//
// const newImg = document.createElement('img');
// newImg.src ="images/me.jpg"
// newImg.style.width = '300px'
// newImg.style.height = '300px'
// bodyNode.appendChild(newImg)
