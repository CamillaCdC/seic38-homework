
const img = document.getElementsByTagName('img')[0]

img.style.marginLeft='0px'

const watchKittyFall = function () {

  var currentTop = parseInt(img.style.marginLeft); //convert to a number

  var newTop = currentTop +1;

  img.style.marginLeft = newTop + 'px' // add unites back again

  if (newTop > 960) {
    clearInterval(maxWidth);
  }

}

const maxWidth = setInterval(watchKittyFall, 1)
