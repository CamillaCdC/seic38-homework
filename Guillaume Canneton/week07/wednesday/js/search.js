const searchFlickr = function (keywords) {
  console.log('Searching For', keywords);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    page: page, //this value is here to change the page each time you refresh the search by scrolling
    text: keywords,
    format: 'json'
  }).done(showImages).done(function (info){
    console.log(info)
  });
};

const showImages = function (results)  {
  _( results.photos.photo).each(function (photo) {
    const thumbnailURL = generateThumbURL(photo);
    const photoURL = generatePhotoURL(photo);
    //the next line append a thumnail in a 'a' tag that give access to the large image
    $('#images').append(`<a href="${photoURL}" target="_blank"><img src="${thumbnailURL}"></a>`)
  });
};

const generateThumbURL = function(p) {
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

//this function create the URL for the large image insted of thumbnail
const generatePhotoURL = function(p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_b.jpg'
  ].join('');
}

let page = 1; //set the first search to the page 1
$(document).ready( function() {
  $('#search').on('submit', function (event) {
    event.preventDefault();
    const searchTerms = $('#query').val()
    $('#images').empty();
    page = 1; // set the search to page 1 if you make a new search
    searchFlickr(searchTerms);
  });
  let timeout;
  $(window).on('scroll', function() {
    clearTimeout(timeout); // the timeout function is here to avoid multiple refresh of the search when you scroll fast
    timeout = setTimeout(function(){
      const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
      if (scrollBottom <= 100 ) {
        const searchTerms = $('#query').val();
        page += 1; // increase by one each time you scroll to show result from the next page
        searchFlickr(searchTerms);
      }
    },500)
  });
});
