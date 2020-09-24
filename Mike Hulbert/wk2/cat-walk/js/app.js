
window.onload = function() {
  //checkJquery();
    onReady();
  }

// Check Jquery has loaded
const checkJquery = function () {
  if (window.jQuery) {
      alert("Jquery has loaded!");
  } else {
      alert("J query doesn't Work");
  }
}

//********************************* DOM **************************************//

const cat = document.getElementsByClassName('cat-gif')[0];
cat.style.position = 'absolute';
cat.style.left = '0px';

const walkRight = function () {
  const currentLeft = parseInt(cat.style.left); // convert to a number
  const newLeft = currentLeft + 10;
  cat.style.left = newLeft + 'px';
  if (cat.style.left === '1200px') {
    cat.style.left = '0px';
  }
}
setInterval(walkRight, 70);

// ******************************** JQUERY ***********************************//


//------------------------------ Video Source --------------------------------//

const videoID = 'background-video';
const sourceID = 'mp4video';

const changeSrc = function (url) {
  //$('#'+videoID).get(0).pause();
  $('#'+sourceID).attr('src', url);
  $('#'+videoID).get(0).load();
//  $('#'+videoID).get(0).play();
}

//Onclick the Home buttons src changes
$(".home-btn").on("click", function() {
  changeSrc("./assets/home.mp4");
});

//Onclick the Butterflies buttons src changes
$(".butter-btn").on("click", function() {
  changeSrc("./assets/butter.mp4");
});

//Onclick the Snow buttons src changes
$(".snow-btn").on("click", function() {
  changeSrc("./assets/snow.mp4");
});

//Onclick the Sea buttons src changes
$(".sea-btn").on("click", function() {
  changeSrc("./assets/sea.mp4");
});

//Onclick the Spooky buttons src changes
$(".spooky-btn").on("click", function() {
  changeSrc("./assets/spooky.mp4");
});

//Onclick the Office buttons src changes
$(".office-btn").on("click", function() {
  changeSrc("./assets/office.mp4");
});

//--------------------------------- On Ready ---------------------------------//

const onReady = function () {
  $('.video-home').show();
  $('.video-butter').hide();
  $('.video-snow').hide();
  $('.video-sea').hide();
  $('.video-scary').hide();
  $('.video-office').hide();
  //$('.btn-box').hide();
}

//********************************** END *************************************//
