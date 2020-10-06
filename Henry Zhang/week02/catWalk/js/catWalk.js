 console.log("It is show time");
// - Create a new Javascript file and link to it with a script tag at the bottom.


// - Create a variable to store a reference to the img.
// const img = document.querySelector('img');
// img.style.left = '0px';
// const catWalk = function () {
//   var currentLeft = parseInt(img.style.left); // convert to a number
//   var newLeft = currentLeft + 1;
//   img.style.left = newLeft + 'px'; // add units back again
// };
// setInterval(catWalk, 25);

// get the first img object
// const img = document.getElementsByTagName('img')[0];
// // start point   ps : need quotation mark
// img.style.left = '-296px';
// // function
// const catWalk = function () {
//     //convert to a number
//     let currentLeft = parseInt(img.style.left);
//     if (currentLeft < screen.width ) {
//     // added
//     let newLeft = currentLeft + 5;
//     // add units back
//     img.style.left = newLeft + 'px';
//     }
//     // else {
//     // img.style.left = '-210px';
//     // }
// }
//
// const timeId = setInterval(catWalk,25);




// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
const img = document.getElementsByTagName('img')[0];
// start point   ps : need quotation mark
img.style.left = '-296px';
// function
const catWalk = function () {
    //convert to a number
    let currentLeft = parseInt(img.style.left);

    if (currentLeft < screen.width - 296) {
        // added
        let newLeft = currentLeft + 5;
        // add units back
        img.style.left = newLeft + 'px';
    }
     if (currentLeft === screen.width -296){
         //rotateY
         img.style.transform = 'rotateY(180deg)';
         //

         // img.style.left = newleft +'px';

    }

}

const timeId = setInterval(catWalk,25);



// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// - Bonus #4: Pretty much go nuts or whatever.
