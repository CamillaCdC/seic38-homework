// Create a new Javascript file and link to it with a script tag at the bottom.

// Create a variable to store a reference to the img.

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// Bonus #4: Pretty much go nuts or whatever.
const dog = () => {
  const puppy = document.getElementById("puppy");
  const circle = document.getElementById("puppy-circle");
  let currentX = parseInt(puppy.style.left);
  let newX = 1;
  let endPosition = circle.offsetWidth - puppy.offsetWidth;
  let end = endPosition;
  let counter = 0;
  const swim = () => {
    if (currentX === end) {
      // dog has reached the end of the pool
      counter++;
      if (counter === 5) {
        clearInterval(timerId);
        let angle = 0;
        const swimTimerID = setInterval(function () {
          angle = (angle + Math.PI / 360) % (Math.PI * 2);
          dogSwim(angle);
        }, 9);
        const dogSwim = (angle) => {
          // use fancy maths to determine new X and Y positions
          let newX = 175 + 150 * Math.cos(angle);
          let newY = 175 + 150 * Math.sin(angle);
          puppy.style.left = newX + "px";
          puppy.style.top = newY + "px";
        };
      }
      if (puppy.style.transform === "rotateY(180deg)") {
        // make the puppy turn around if he's at an edge
        puppy.style.transform = "rotateY(360deg)";
      } else {
        puppy.style.transform = "rotateY(180deg)";
      }
      newX *= -1; // change direction of travel
      end = Math.abs(endPosition - end); // end becomes the other side of the pond
    }
    currentX += newX;
    puppy.style.left = currentX + "px";
  };
  let timerId = setInterval(swim, 5);
};
dog();
