const state = {
  nextPage: 1,
  lastPageReached: false
};

const searchFlickr = function (keywords) {
  if (state.lastPageReached) {
    return; // exit
  }

  console.log('Searching for', keywords);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods like POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: state.nextPage++
  }).done(showImages).done(function (info) {
    console.log( info );
    if (info.photos.page >= info.photos.pages) {
      state.lastPageReached = true;
    }
  });
};

const showImages = function (results) {
  _( results.photos.photo ).each(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL});
    $img.appendTo('#images'); // $('#images').append($img);
  });
};

const generateURL = function (p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg' // Change 'q' to something else for different sizes (see docs)
  ].join('');
}

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // disable the form submission.

    // Reset:
    state.nextPage = 1;
    state.lastPageReached = false;
    $('#images').empty();

    const searchTerms = $('#query').val();
    searchFlickr(searchTerms);
  });

  const chillSearchFlickr = _.debounce( searchFlickr, 4000, true );

  // Extremely twitchy
  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom <= 400) {
      const searchTerms = $('#query').val();
      chillSearchFlickr(searchTerms);
    }
  });
});
