
$( document ).ready(function() {
  let checkBalance = 0;
  let savBalance = 0;
// Checking account part
//first button - deposit on checking account
$('#checking-deposit').on('click', function(){
  let $checkAmount = $( '#checking-amount' ).val();
  if ( isNaN( +$checkAmount ) ){
    window.alert("Please enter a number");//this statement to avoid a bug with NaN value
  } else {
  checkBalance += +$checkAmount;
  $( '#checking-balance' ).text( '$' + checkBalance );
  alertBalance();
  }
});
//second button - withdraw on checking account
$( '#checking-withdraw' ).on( 'click', function(){
  let $checkAmount = $( '#checking-amount' ).val();
  if ( isNaN( +$checkAmount ) ){
    window.alert("Please enter a number");//this statement to avoid a bug with NaN value
  } else {
    if ( $checkAmount <= checkBalance ) {
      checkBalance -= +$checkAmount;
      $( '#checking-balance' ).text( '$' + checkBalance );
      alertBalance();
    } else if ( $checkAmount <= ( checkBalance + savBalance ) ){
      savBalance = savBalance + ( checkBalance - $checkAmount );
      $( '#savings-balance' ).text( '$' + savBalance );
      checkBalance = 0;
      $( '#checking-balance' ).text( '$' + checkBalance );
      alertBalance();
    } else {
      $( '#alert').css( 'visibility', 'visible')
    }
  }
});
//Savings account part
//first button - deposit on savings account
$( '#savings-deposit' ).on( 'click', function(){
  let $savAmount = $( '#savings-amount' ).val();
  if ( isNaN( +$savAmount ) ){
    window.alert("Please enter a number");//this statement to avoid a bug with NaN value
  } else {
  savBalance += +$savAmount;
  $( '#savings-balance' ).text( '$' + savBalance );
  alertBalance();
  }
});

//second button - withdraw on savings account
$( '#savings-withdraw' ).on( 'click', function(){
  let $savAmount = $( '#savings-amount' ).val();
  if ( isNaN( +$savAmount ) ){
    window.alert("Please enter a number");//this statement to avoid a bug with NaN value
  } else {
    if ( $savAmount <= savBalance ) {
      savBalance -= +$savAmount;
      $( '#savings-balance' ).text( '$' + savBalance );
      alertBalance();
    } else if ( $savAmount <= ( checkBalance + savBalance )){
      checkBalance = checkBalance + ( savBalance - $savAmount );
      $( '#checking-balance' ).text( '$' + checkBalance );
      savBalance = 0;
      $( '#savings-balance' ).text( '$' + savBalance );
      alertBalance();
    } else {
      $( '#alert').css( 'visibility', 'visible')
    }
  }
});
//This function set the background color of balance for checking and savings
const alertBalance = function(){
  $('.zero').removeClass( 'zero' );
  if ( checkBalance <= 0 ){
    $( '#checking-balance' ).addClass( 'zero' )
  };
  if ( savBalance <= 0 ){
    $( '#savings-balance' ).addClass( 'zero' )
  };
  if ( checkBalance > 0 || savBalance > 0 ){
    $( '#alert').css( 'visibility', 'hidden')
  }
}
alertBalance(); //run the function to set the background at the first load of the page

});
