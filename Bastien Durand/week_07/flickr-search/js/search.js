const state = {
  nextPage: 1,
  lastPageReached: false,
};

const searchFlickr = function (keywords) {

  if(state.lastPageReached) {
    return;
  }

  console.log('Searching for', keywords);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: state.nextPage++
  }).done(showImages).done(function (info) {
    console.log(info)
    if (info.photos.page >= info.photos.pages) {
      state.lastPageReached =  true;
    }
  })
};

const showImages = function (results) {
  _( results.photos.photo ).each(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL});
    $img.appendTo('#images');
  });
}

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
     '_q.jpg' // queue represents different sizes (in flickr docs)
  ].join('');
}


$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Disable the form submission

    state.nextPage = 1;
    state.lastPageReached = false;
    $('#images').empty();

    const searchTerms = $('#query').val();

    searchFlickr(searchTerms)
  });

  const chillSearchFlickr = _.debounce(searchFlickr, 4000, true);

// Extremely twitchy
  $(window).on('scroll', _.debounce(function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom < 400) {
      const searchTerms = $('#query').val();
      chillSearchFlickr(searchTerms);

  }
}))
})
