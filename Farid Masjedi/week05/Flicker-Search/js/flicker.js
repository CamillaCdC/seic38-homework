// this variable going to change the page of the data that comes from -
// flickr api and by scrolling down, it changes.
let currentPage = 1;

// this will check the scrollBottom . once it comes to be less than 400px -
// this will change to false and make the scroll to not work many times.
let oneScroll = true;

// this index_id and image_id will be passed to the images for css purposes.
let index_id = 0;
let image_id = ['id0','id1','id2','id3','id4','id5'];

// flickrSearch function for taking the keyword that user will input, and the -
// number of the page (currentPage)
const flickrSearch = function($keyword,currentPage){
  // flickerURL : this is the url to call a Json data from flickr api.
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: $keyword,
    format: 'json',
    // this has been added to bring the different pages of images from flickr api.
    page: currentPage
  }).done(flickrImage);
};

const flickrImage = function(info){

  // this will check if the page that we are in (of json data) to not be more than -
  // the pages numbers of the data. otherwise the last page images will be repeated.
  if (info.photos.pages > currentPage){
    _(info.photos.photo).each( function (photo){
      const thumbnailURL = generateURL(photo);

      // this link will show the image in flickr website.
      const link_flickr = `http://flickr.com/photo.gne?id=${photo.id}`;

      // the id is making from the image_id array and index_id (at the top of -
      // this js). the index_id will be added by iterating through each photo -
      // and as the image_id has just 6 elements, the reminder of the index_id -
      // to number 6, will pass an element of the array as id to the image.
      const $link = $(`<a href=${link_flickr} target="_blank">
                       <img src=${thumbnailURL} id=${image_id[index_id%6]}>
                       </a>`);
      $('#images').append($link);
      // here we changed the oneScroll to true again as another time the -
      // scrollBottom comes less than 400px, then it works and show another -
      // images of another page of json data.
      oneScroll = true;
      index_id += 1;
    });
  }
};

const generateURL = function(photo){
  return [
    'http://farm',
    photo.farm,
    '.static.flickr.com/',
    photo.server,
    '/',
    photo.id,
    '_',
    photo.secret,
    '_n.jpg'
  ].join('');
};


$(document).ready(function(){

  $('#engine').on('submit', function(e){
    e.preventDefault();

    // this will make the div#images to be null if we search for another keyword.
    $('#images').html(null);
    // index_id going to be 0 again, as if the search comes for another keyword, the -
    // css setting works as before.
    index_id = 0;

    // take the keyword value.
    let $keyword = $('#keyword').val();
    flickrSearch($keyword);
  });

  $(window).on('scroll', function(){

    // there is a button to take the user to the top of the page. this will check -
    // if the scrollTop comes more than height of the window, then the button will -
    // pop up.
    if ($(window).scrollTop() > $(window).height()){
      $('#back_to_top').show();
      $('#back_to_top').css('top',`${$(window).height()-400}px`);
      $('#back_to_top').on('click', function(){
        $(window).scrollTop(0);
      })
    }else{
      // if the scrollTop is not greater than height of the window, the button -
      // will hide.
      $('#back_to_top').hide();
    }

    const scrollBottom = $(document).height()-$(window).height()-$(window).scrollTop();
    if (scrollBottom <= 400 && oneScroll){
      oneScroll = false;
      let $keyword = $('#keyword').val();
      // calling the flickrSearch function with the new page number.
      currentPage += 1;
      flickrSearch($keyword, currentPage);
    };
  });
});
