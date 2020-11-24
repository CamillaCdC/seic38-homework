
$('#lib-button').on('click', function() {
  const noun = $('#noun').val();
  const adjective = $('#adjective').val();
  const person = $('#person').val();
  const story = `${ person } is made from ${ adjective } ${ noun }.`
  $('#story').html(story);
});

$('h1').funText(33,'candy');
