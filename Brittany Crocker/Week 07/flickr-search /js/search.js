const state = {
  lastPageReached: false,
  pageNumber: 1,
  requestInProgress: false
};

const searchFlickr = function (keywords) {
  if (state.lastPageReached) {
    return;
  }

  state.requestInProgress = true;

  const flickURL = 'https://api.flickr.com/services/rest?jsoncallback=?' // JSONP
  $.getJSON(flickURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: state.pageNumber ++
  }).done(showImages).done(function (info) {
    if (info.photos.page >= info.photos.pages) {
      state.lastPageReached = true
    }
  });

};

const showImages = function (results) {

  _(results.photos.photo).each(function (photo) {
  const thumbnailURL = generateURL(photo);
  const $img = $(`<img>`, {src: thumbnailURL})
  $img.appendTo('#images')
  })
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
    '_q.jpg'
  ].join('');
}

$(document).ready(function () {


  $('#search').on('submit', function (event) {
    event.preventDefault();



    const searchTerms = $('#query').val();
      $('h2').text(searchTerms)
      searchFlickr(searchTerms);
  });

  const chilleSearchFlickr = _.debounce( searchFlickr, 250, true)

  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
      if (scrollBottom <= 400) {
        const searchTerms = $('#query').val();
        chilleSearchFlickr(searchTerms)
        $('body').append
    };
  });
});
