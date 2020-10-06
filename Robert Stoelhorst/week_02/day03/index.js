// const dong = document.getElementsByTagName("img")[0].setAttribute("class", "cat");
const img = document.getElementsByTagName("img")[0]; // image stored in "kitty"
img.style.position = "absolute";
img.style.left = "0px";
img.style.top = "300px";



const watchKittyWalk = function() {
  const startLeft = parseInt(img.style.left);
  const beginLeft = startLeft + 1;
  img.style.left = beginLeft + "px";
  if (img.style.left == 600 + "px") {
    clearInterval(clear);
 }
};
  const clear = setInterval(watchKittyWalk, 8)
