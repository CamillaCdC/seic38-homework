// Create a new Javascript file and link to it with a script tag at the bottom.
// Add an event listener to the button so that it calls a makeMadLib function when clicked.




//function to generate random integer for picking a story
const getRandomInt = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

const madLib = function() {
  //clear previous output
  $('#story p').html('');

  //Get and clear inputs
  let noun = $('#noun').val();
  $('#noun').val('');

  let adjective = $('#adjective').val();
  $('#adjective').val('');

  let person = $('#person').val();
  $('#person').val('');

  //Array of stories
  const stories = [
    `${person} really likes ${adjective} ${noun}`,
    `${person} is a ${adjective} ${noun}`,
    `${person} wants some ${adjective} ${noun}`,
    `${person} dreams of ${adjective} ${noun}`,
    `${person} only eats ${adjective} ${noun}`,
    `${person} is a ${noun}. A ${adjective} ${noun}...`,
    `${adjective} ${person} fell on the ${noun}`
  ];

  //create output
  let story;
  if (person.length === 0 || adjective.length === 0 || noun.length === 0) {
    story = "Your story will be boring if you don't fill out all the fields!";
    $('#story').css('color', 'moccasin');
  } else {
    $('#story').css('color', '#dbdbdb');
    let i = getRandomInt(stories.length);
    story = stories[i];
  }
  let outputP = $('<p>').html(story);

  // append and fade in story
  $('#story').hide();
  $('#story').append(outputP)
  $('#story').fadeIn(750)

};

$('#lib-button').on('click', madLib);
$('body').keypress(function(event) {
  if (event.keyCode === 13) {
    madLib()
  }
})



// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")


// console.log('boo!');
//
// const libIt = document.getElementById('lib-button');
//
// const makeMadLib = function() {
//   const noun = document.getElementById('noun').value;
//   const adjective = document.getElementById('adjective').value;
//   const name = document.getElementById('person').value;
//   alert(`${name} is a ${adjective} ${noun}!`)
// };
//
// libIt.addEventListener('click', makeMadLib);
