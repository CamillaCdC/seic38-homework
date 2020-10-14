// const cat = document.getElementById("cat");
// cat.style.position = 'absolute';
// cat.style.left = '0px';
// cat.style.top = '30px';
// let w = window.outerWidth;
// const fadeTimerID = setInterval(walk, 40);
//
// const walk = function() {
//   let currentLeft = parseInt(cat.style.left);
//   let currentTop = parseInt(cat.style.top);
//   let newLeft = currentLeft + 3;
//   let newTop = currentTop +1;
//   cat.style.left = newLeft + 'px';
//   cat.style.top = newTop + 'px';
//   if (newLeft > w - 296) {
//     cat.style.transform = 'scaleX(-1)';
//     clearInterval(fadeTimerID);
//     fadeTimerID = setInterval(reverseCat, 40);
//  }
// }
//
// function stopFunction() {
//   clearInterval(fadeTimerID);
// }
//
// function startFunction() {
//   fadeTimerID = setInterval(walk, 40);(fadeTimerID);
// }
//
// function reverseCat(){
//   // cat.style.transform = 'scaleX(-1)';
//   let currentRight = parseInt(cat.style.right);
//   let currentTop = parseInt(cat.style.top);
//   let newLeft = currentRight +3;
//   let newTop = currentTop +1;
//   cat.style.left = newLeft + 'px';
//   cat.style.top = newTop + 'px';
//   if (newLeft < 0) {
//     cat.style.transform = 'scaleX(-1)';
//     clearInterval(fadeTimerID);
//     // fadeTimerID = setInterval(walk, 40);
//   }
// }
const cat = document.getElementById("cat");
cat.style.position = 'absolute';
cat.style.left = '0px';
cat.style.top = '0px';
let w = window.outerWidth;

const walk = function() {
  let currentLeft = parseInt(cat.style.left);
  let currentTop = parseInt(cat.style.top);
  let newLeft = currentLeft + 3;
  let newTop = currentTop +1;
  cat.style.left = newLeft + 'px';
  cat.style.top = newTop + 'px';
  if (newLeft > w - 296) {
    clearInterval(fadeTimerID);
    fadeTimerID = setInterval(reverseCat, 40);
  }
}

const fadeTimerID = setInterval(walk, 40);

function stopFunction() {
  clearInterval(fadeTimerID);
}

function reverseCat(){
  // cat.style.transform = 'scaleX(-1)';
  cat.style.transform = 'scaleX(-1)';
  let currentLeft = parseInt(cat.style.left);
  let currentTop = parseInt(cat.style.top);
  let newLeft = currentLeft -3;
  let newTop = currentTop +1;
  cat.style.left = newRight + 'px';
  cat.style.top = newTop + 'px';
  if (newRight > w -296) {
    // cat.style.transform = 'scaleX(-1)';
    clearInterval(fadeTimerID);
    // fadeTimerID = setInterval(walk, 40);
  }
}
