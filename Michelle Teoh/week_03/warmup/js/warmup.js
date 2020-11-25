var word = $('#words');
var visible = 0;

$('form').onClick('submit',function (e) {
  e.preventDefault();

  var fullWidth = window.innerWidth;
  var fullHeight = window.innerHeight;

  var elem = $('div');
  elem.textContent = word[visible];
  elem.style.position = 'absolute';
  elem.style.left = Math.round(Math.random() * fullWidth) + 'px';
  elem.style.top = Math.round(Math.random() * fullHeight) + 'px';
  $('elem').appendChild;

  visible++;
});
