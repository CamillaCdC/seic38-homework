console.log("Meow")

const catImg = document.getElementsByTagName("img")[0]

console.log(catImg)


catImg.style.marginLeft='0px'
catImg.style.marginTop='0px'

const catWalk = function() {
  let currentPos = parseInt(catImg.style.marginLeft)
  let newPos = currentPos + 1
  catImg.style.marginLeft = newPos + 'px'

  if (newPos > 250) {
clearInterval(timeoutInt)

  }

}

const timeoutInt = setInterval(catWalk, 25);

//
// const catFalling = function () {
//   const currentPosTop = parseInt(catImg.style.marginTop)
//   const newPosTop = currentPosTop + 1
//   catImg.style.marginTop = newPosTop + 1
//
// }
