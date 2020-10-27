const fetchdog = function(event){
  event.preventDefault();

const url = `https://dog.ceo/api/breed/hound/afghan/images/random/3`;
$.ajax(url).done(function(data){
  const cover = data.message[0];
  $('#cover').attr('src',cover);

}).fail(function(){
  console.error('There was error!');
})

};


$(document).ready(function(){

  $('#search').on('click',fetchdog);
});
