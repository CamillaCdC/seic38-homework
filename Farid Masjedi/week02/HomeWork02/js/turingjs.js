$(document).ready( function(){

  $('#first').on('click', function(){
    $('#biography').fadeIn(1000);
    $('#Turing-Machine').hide();
    $('#Turing-Test').hide();
  });
  $('#second').on('click', function(){
    $('#Turing-Machine').fadeIn(1000);
    $('#biography').hide();
    $('#Turing-Test').hide();
  });
  $('#third').on('click', function(){
    $('#Turing-Test').fadeIn(1000);
    $('#biography').hide();
    $('#Turing-Machine').hide();
  });
})
