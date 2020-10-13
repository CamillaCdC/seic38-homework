
$('img').css('margin-top', '100px')

$('body').css('background-color', 'pink')


$('button#buttonR').click(function() {
  walkRight();
});

$('button#buttonL').click(function() {
  walkLeft();
})

$('button#walkLR').click(function() {
  walkLeft();
  walkRight();
})





const walkRight = function () {
  const $catRight = $('img').animate({left: "+=1500px"}, 1000)

}
const walkLeft = function () {
  const $catLeft = $('img').animate({left: "-=1500px"}, 1000)
}
