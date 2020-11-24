const launchManifest = function (event) {
  event.preventDefault(); // Don't leave this page.

  const title = $('#title').val();
  const url = `https://api.spacexdata.com/v3/launches/${ title }`;

  // Deferreds => Promises => async/await
  $.ajax(url).done(function (data) {
    console.log(data.forEach)
    const manifest = data.links.;
    console.log(data.flight_number)
    $('#manifest').attr('src', manifest);
  }).fail(function () {
    console.error('There was error!');
  });

};
  $(document).ready(function () {
    const $form = $('#search-form');
    $form.on('submit', launchManifest);
  });
