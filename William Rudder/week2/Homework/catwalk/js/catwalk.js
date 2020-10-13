// console.log("hello")
//
//
// var intFrameWidth = window.innerWidth-cat.clientWidth;
//
// const img = document.getElementById('cat');
// img.style.left = '0px';
// const doTheCatWalk = function () {
//   var currentLeft = parseInt(img.style.left); //convert to number
//   var newleft = currentLeft + 10;
//   img.style.left = newleft + 'px'; //add units back again
//   // stop the cat from walking if it reaches a cirtain amount of pixels
//   if (newleft >= intFrameWidth ) {
// clearInterval(stopcat);
//    clearInterval(stopcat);
//     img.style.transform = 'rotateY(180deg)';
//     var right = currentLeft - 10;
//       img.style.left = right + 'px';

//   }
//
// flipcat();
//   // img.style.left = newleft + 'px';
// }
//
// const stopcat = setInterval(doTheCatWalk, 10)
//


// Constants
const step = 10; // Amount of pixels to move the cat each step
// State
var direction = 1;
var catPosX = 0;


    const cat = document.getElementById("cat");
    cat.style.left = catPosX;




function catWalk() {
    catPosX += step * direction;
    cat.style.left = catPosX + "px";

    // If cat goes past end/right threshold turn around and walk back
    if (catPosX >= (window.innerWidth - cat.clientWidth)) {
        direction = -1
        cat.style.transform = "rotateY(180deg)";

    // If cat goes past start/left threshold turn around and walk back
    } else if (catPosX <= 0) {
        direction = 1;
        cat.style.transform = "rotateY(0deg)";
    }
}
  setInterval(catWalk, 50);
// //-------------------------cat2-----------------------//
//
// const cat2 = document.getElementById("cat2");
// cat.style.left = catPosX;
//
// setInterval(catWalk2, 50);
//
//
// function catWalk2() {
// catPosX += step * direction;
// cat2.style.left = catPosX + "px";
//
// // If cat goes past end/right threshold turn around and walk back
// if (catPosX >= (window.innerWidth - cat2.clientWidth - padding)) {
//     direction = -1
//     cat2.style.transform = "rotateY(180deg)";
//
// // If cat goes past start/left threshold turn around and walk back
// } else if (catPosX <= 0) {
//     direction = 1;
//     cat2.style.transform = "rotateY(0deg)";
// }
// }
