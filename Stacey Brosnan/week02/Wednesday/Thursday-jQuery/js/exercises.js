
  const $button = $('#lib-button');

  const makeMadLib = function() {
    const story = "";
    //get the noun
    const noun = $('#noun').val();
    story.html(noun);
    const adjective = $('#adjective').val();
    const person = $('#person').val();

    story = noun + "really likes"; //${ adjective } ${noun}`;
    $('#story').html(story);

};

  $button.click('click', makeMadLib);
  //
  // const story = $('#person') + "really likes" +
  // $(`#adjective`), $(`#noun`);
  // $('#story').innerText = story;
