let checkBalance = 0;
let savBalance = 0;
// Checking account part
//first button - deposit on checking account


$('#checking-deposit').on('click', function(){
  let $checkAmount = $( '#checking-amount' ).val();
  checkBalance += parseInt( $checkAmount );
  $( '#checking-balance' ).text( '$' + checkBalance );
  alertBalance();
});
//second button - withdraw on checking account
$( '#checking-withdraw' ).on( 'click', function(){
  let $checkAmount = $( '#checking-amount' ).val();
  if ( $checkAmount <= checkBalance ) {
    checkBalance -= parseInt( $checkAmount );
    $( '#checking-balance' ).text( '$' + checkBalance );
    alertBalance();
  } else if ( $checkAmount <= ( checkBalance + savBalance ) ){
    savBalance = savBalance + ( checkBalance - $checkAmount );
    $( '#savings-balance' ).text( '$' + savBalance );
    checkBalance = 0;
    $( '#checking-balance' ).text( '$' + checkBalance );
    alertBalance();
  } else {
    console.log('error');
  }
});
//Savings account part
//first button - deposit on savings account
$( '#savings-deposit' ).on( 'click', function(){
  let $savAmount = $( '#savings-amount' ).val();
  savBalance += parseInt( $savAmount );
  $( '#savings-balance' ).text( '$' + savBalance );
  alertBalance();
});

//second button - withdraw on savings account
$( '#savings-withdraw' ).on( 'click', function(){
  let $savAmount = $( '#savings-amount' ).val();
  if ( $savAmount <= savBalance ) {
    savBalance -= parseInt( $savAmount );
    $( '#savings-balance' ).text( '$' + savBalance );
    alertBalance();
  } else if ( $savAmount <= ( checkBalance + savBalance )){
    checkBalance = checkBalance + ( savBalance - $savAmount );
    $( '#checking-balance' ).text( '$' + checkBalance );
    savBalance = 0;
    $( '#savings-balance' ).text( '$' + savBalance );
    alertBalance();
  } else {
    console.log('error');
  }
});
//This function set the background color of balance for checking and savings
const alertBalance = function(){
  if ( checkBalance <= 0 ){
    $( '#checking-balance' ).addClass( 'zero' )
  } else {
    $( '#checking-balance' ).removeClass( 'zero' )
  };
  if ( savBalance <= 0 ){
    $( '#savings-balance' ).addClass( 'zero' )
  } else {
    $( '#savings-balance' ).removeClass( 'zero' )
  };
}
alertBalance(); //run the function to set the background at the first load of the page
