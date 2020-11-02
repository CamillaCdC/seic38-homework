let pageCounter = 1;
const searchFlickr = (keywords) => {
  const flickrURL = "https://api.flickr.com/services/rest?jsoncallback=?";
  $.getJSON(flickrURL, {
    method: "flickr.photos.search",
    api_key: "2f5ac274ecfac5a455f38745704ad084",
    page: pageCounter++,
    text: keywords,
    format: "json",
  }).done((info) => {
    if (info.photos.page <= info.photos.pages) {
      console.log(info);
      showImages(info);
      console.log(`current page is ${info.photos.page} / ${info.photos.pages}`);
    }
  });
};

const showImages = (results) => {
  _.each(results.photos.photo, (photo) => {
    const thumbnailURL = generateURL(photo);
    const originalURL = generateLargePicURL(photo);
    const $a = $("<a>", { href: originalURL, target: "_blank" });
    const $img = $("<img>", { src: thumbnailURL });
    $a.append($img).appendTo("#images");
  });
};

const generateURL = (p) => {
  return [
    "http://farm",
    p.farm,
    ".static.flickr.com/",
    p.server,
    "/",
    p.id,
    "_",
    p.secret,
    "_q.jpg",
  ].join("");
};
const generateLargePicURL = (p) => {
  return [
    "http://flickr.com/photos/",
    p.owner,
    "/",
    p.id,
    "/sizes/",
    "o/",
  ].join("");
};

$(document).ready(() => {
  $("#search").on("submit", function (event) {
    pageCounter = 1;
    $("#images").empty();
    const searchTerms = $("#query").val();
    event.preventDefault();
    searchFlickr(searchTerms);
  });

  $(window).on(
    "scroll",
    _.throttle(function () {
      const scrollBottom =
        $(document).height() - $(window).height() - $(window).scrollTop();
      if (scrollBottom <= 300) {
        const searchTerms = $("#query").val();
        searchFlickr(searchTerms);
      }
    }, 700)
  );
});
