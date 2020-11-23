const catImg = document.querySelector('img');
catImg.style.left = "0px";


// const catWalk = function () {
//   const begin = parseInt(catImg.style.left);
//   const walk = begin + 10;
//   catImg.style.left = walk + 'px';
// };
//
// const beginWalk = setInterval(catWalk, 50);

const catWalk = function () {
    if ( catImg.style.left === '1200px') {
        clearInterval(beginWalk);
        const walkBack = setInterval(catWalkBack, 50);
    } else {
        const begin = parseInt(catImg.style.left);
        const walk = begin + 10;
        catImg.style.left = walk + 'px';
    }
  };
const catWalkBack = function () {
  if ( catImg.style.left === '10px') {
    clearInterval(walkBack);
  } else {
    catImg.style.transform = 'scaleX(-1)';
    const begin = parseInt(catImg.style.left);
    const walk = begin - 10;
    catImg.style.left = walk + 'px';
  }
}
const beginWalk = setInterval(catWalk, 50);
