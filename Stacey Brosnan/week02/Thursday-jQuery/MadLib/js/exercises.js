  const $button = $('#lib-button');

  const makeMadLib = function() {

    const noun = $('#noun').val();
    const adjective = $('#adjective').val();
    const person = $('#person').val();

    const story = `${person} really likes ${adjective} ${noun}`;
    $('#story').html(story);

};

  $button.click('click', makeMadLib);

//$('#lib-button').on('click', makeMadLib);

$(document).ready(function(){

  console.log('the DOM is ready');

  $('h1').funText(33, 'candy');
});
