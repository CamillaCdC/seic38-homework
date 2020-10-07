// console.log("The Cat Walk")

// Create a variable to store a reference to the img.


// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

const image = document.getElementsByTagName( 'img' )[0];
 image.style.left = "0px";


// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

const catWalk = function () {
let currentLeft = parseInt(image.style.left);
let newMovement = currentLeft + 10;
image.style.left = newMovement + 'px';
}
setInterval( catWalk, 250 );

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!













// const makeImageBigger = function( ) {
//   const img = document.querySelector( 'img' );
//   img.setAttribute( 'width', img.width + 1 );
//   if ( img.width < 50 ) {
//     clearInterval( makeBiggerID );
//   }
// };
//
// const makeBiggerID = setInterval( makeImageBigger , 50 );
