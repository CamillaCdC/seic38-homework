
//
// - Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// - Bonus #4: Pretty much go nuts or whatever.

  const cat = document.querySelector('img');

  cat.style.left = 0;
  cat.style.bottom = 600;


  const catWalk = function () {

        const numLeft = parseInt(cat.style.left);

        const width = document.body.clientWidth;
        const widthInt = parseInt(width);

      const left = parseInt(cat.style.left); //convert to int
      const right = left + 10;
      cat.style.left = right + 'px';
      // return numLeft;
      if (numLeft >= widthInt) {
          right = parseInt(cat.style.left);
          left = right - 500;
          cat.style.left = left + 'px';
      };


};

setInterval(catWalk, 15);
console.log(catWalk());

const width = document.body.clientWidth;
console.log(width);
