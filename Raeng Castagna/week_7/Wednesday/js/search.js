// console.log($.fn.jquery, _.VERSION);

let pageCounter = 1;
let onScroll = true;

const searchFlickr = function (keywords) {
  console.log('Searching for', keywords);
  // console.log('searching for', page)

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods like POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: pageCounter,
  }).done(showImages).done(function (info) {
    console.log(info);
  }); // inside showImages you will find the bahaviour we now want.
};

const showImages = function (results) {
  // console.log('about to show images', results);
  // iterate through photo objects
  _(results.photos.photo).each(function (photo) {
    // console.log(photo);
    const thumbnailURL = generateURL(photo);
    // console.log(thumbnailURL);
    const $img = $(`<img>`, {src: thumbnailURL});
    // console.log($img);
    $img.appendTo('#images'); // or could write it like $('#images').append($img)
  })
  // figure out the URL
  // display that URL in an image.
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
    '_q.jpg' // you can change 'q' to somethign else for different sizes (see docs)
  ].join('');
}

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // disable the form submission.
    // console.log('searching....')
    const searchTerms = $('#query').val();
    searchFlickr(searchTerms);
  });

  // scrolls through the window on user scroll,
  $(window).on('scroll', function () {
    // console.log('scroll detected', Math.random());
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    // console.log(scrollBottom)
    if (scrollBottom <= 400 && onScroll) {
      onScroll = false;
      // console.log('near the bottom!');
      const searchTerms = $('#query').val();
      searchFlickr(searchTerms);
    }
  });
});
