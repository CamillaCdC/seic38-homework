// For each operation, create an event listener for the button,
const square = function() {
  let input = $('#square-input').val();
  let output = `${input}<sup>2</sup> = ${input * input}`
  outputP = $(`<p></p>`).html(output);
  $('#solution').append(outputP);
}

const half = function() {
  let input = $('#half-input').val();
  let output = `Half of ${input} is ${input / 2}`
  outputP = $(`<p></p>`).html(output);
  $('#solution').append(outputP);
}

const percent = function() {
  let input1 = $('#percent1-input').val();
  let input2 = $('#percent2-input').val();
  let output = `${input1} is ${Math.round(input1/input2 * 100)}% of ${input2}`;
  outputP = $(`<p></p>`).html(output);
  $('#solution').append(outputP);
}

const area = function() {
  let input = $('#area-input').val();
  let output = `A circle of radius ${input} units has an area of ${Math.round(Math.PI*(input * input))} units<sup>2</sup>`
  outputP = $(`<p></p>`).html(output);
  $('#solution').append(outputP);
}


const clear = function() {
  $('#solution p').html('');
}

$('#square-button').on('click', square);
$('#half-button').on('click', half);
$('#percent-button').on('click', percent);
$('#area-button').on('click', area);
$('#clear-button').on('click', clear);




// Bonus: respond to key presses so that the user doesn't have to click the button.
