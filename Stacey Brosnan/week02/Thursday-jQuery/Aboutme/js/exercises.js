
$("body").css({fontFamily: "Arial, sans-serif" });

$('#nickname').html("Stacky");
$('#favorites').html("All the stuff");
$('#hometown').html("Dingle");


const $items = $('#li');
  for (let i = 0; i < $items.length; i++) {
         $items[i].addClass = "listitem";
}
/// can use instead of loop $('li').addClass('item');

const $image = $('<img>');
$image.attr(`src`, `https://via.placeholder.com/350x150`);
$("body").append($image);

//easier way to do it is
//$(<img src = `https://via.placeholder.com/350x150`)appendTo('body');
