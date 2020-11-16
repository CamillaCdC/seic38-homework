queryDone = true
const searchFlickr  = function (keywords, getPage) {
  queryDone = false
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; //JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', //NOT AN HTTP METHOD >:(
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: getPage
  }).done(showImages).done(function (info) {
    console.log(info)
  }).done(function () {queryDone = true});
};

const showImages = function (results) {
  _( results.photos.photo).each(function (photo) {
    const thumbnailURL = generateURL(photo)
    const $img = $('<img>', {src: thumbnailURL});
    $img.appendTo('#images');
  });
;}

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
  ].join('')
}

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); //Disable form submission.
    const searchTerms = $('#query').val();
    searchFlickr(searchTerms, 1)
  });

  let page = 2

  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    if (scrollBottom <=400 && queryDone) {
      const searchTerms = $('#query').val();
      searchFlickr(searchTerms, page);
      console.log('page ', page)
      page = page + 1
    }

  })
});
