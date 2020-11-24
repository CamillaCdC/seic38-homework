
var img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
function catWalk() {
  img.style.left = (parseInt(img.style.left) + 10) + 'px'
}

window.setInterval(catWalk, 50);
//2
var img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
function catWalk() {
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + 10) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}
window.setInterval(catWalk, 50);

//3
var img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
var walkForwards = true;
function catWalk() {
  var currentLeft = parseInt(img.style.left);

  if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
    walkForwards = false;
  }
  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }

  if (walkForwards) {
    img.style.left = (currentLeft + 10) + 'px';
  } else {
    img.style.left = (currentLeft - 10) + 'px';
  }
}
window.setInterval(catWalk, 50);
