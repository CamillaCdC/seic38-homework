console.log('meow');
// Create a variable to store a reference to the img.
//
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.

//Get & storethe first object with an img tag
const cat = document.getElementsByTagName('img')[0];
// Set starting position at left of screen
cat.style.left = '0px'
// Get width of window to figure out walk boundaries
const width = window.innerWidth;
//Variable for direction of animation
let walkRight = true;

const catWalk = function() {
  //Current position is integer of pixels from left of screen
  const currentPos = parseInt(cat.style.left);

//If walking right and at right hand side of screen, start walking left
  if (walkRight && currentPos > (width - cat.width)) {
    walkRight = false;
  }
//If walking left and at left hand side of screen, start walking right
  if (!walkRight && currentPos <= 0) {
    walkRight = true
  }
//When walking right: face right (from CSS), move 10px right
  if (walkRight) {
    cat.className = 'cat-right'
    const newPos = currentPos + 10;
    cat.style.left = newPos + 'px';

//When walking left: face left (from CSS), move 10px left
  } else {
    cat.className = 'cat-left'
    const newPos = currentPos - 10;
    cat.style.left = newPos + 'px';

  }

};

//execute walk every 50 ms
const catTimer = setInterval(catWalk, 50);

//set up colours for rainbow effect
const bgColors = ["red", "orange", "yellow", "green", "cyan", "blue", "magenta"];
//contrasting colour array
const textColors = ["cyan", "blue", "#005AFF", "purple", "red", "yellow", "green"]
//add lame text
const p = document.createElement('p');
p.innerHTML = "embrace the low effort aesthetic";

document.body.appendChild(p);

//set up iterator for colours
let  i = 0;
//In 10 seconds...
setTimeout(function () {
  //cycle background colours every 100ms
  setInterval(function (){
  	document.body.style.backgroundColor = bgColors[i];
    p.style.color = textColors[i];
  	i++;
  	if (i === bgColors.length){
  		i=0;
  	}
  }, 100);
}, 10000);
