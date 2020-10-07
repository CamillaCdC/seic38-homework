// //$( document ).ready(function() {
//
//   const displayCash = function () {
//     const inputCheckingAmount = $('#checking-amount').val();
//     const addToCheckingAmount = $('$checking-deposit').on('click', function () {
//        $('#checking-balance').text(`$${inputCheckingAmount}`);
//     });
//   }
//
// //});
$( document ).ready(function() {

//when amount is put into input box display on screen

  //need to incluse the click to deposit function

      var depositChecking = $('#checking-deposit').on('click', function () {
        const $input = $('#checking-amount').val();
        const $balance = $('#checking-balance').text().slice(1);
        const $newbalance = parseInt($input) + parseInt($balance);
        console.log($input)
        console.log($balance)
        console.log($newbalance)
        const $displayBalance = $('#checking-balance').text(`$${$newbalance}`);
          });


      var depositSaving = $('#savings-deposit').on('click', function () {
        const $input = $('#savings-amount').val();
        const $balance = $('#savings-balance').text().slice(1);
        const $newbalance = parseInt($input) + parseInt($balance);
        console.log($input)
        console.log($balance)
        console.log($newbalance)
        const $displayBalance = $('#savings-balance').text(`$${$newbalance}`);
          });

var withdrawSaving = $('#savings-withdraw').on('click', function () {
  const $input = $('#savings-amount').val();
  const $balance = $('#savings-balance').text().slice(1);
  const $newbalance = parseInt($balance) - parseInt($input);
  if ($newbalance < 0) {
    alert("Insufficient Funds");
    return false; }
  const $displayBalance = $('#savings-balance').text(`$${$newbalance}`);

  });

  var withdrawChecking = $('#checking-withdraw').on('click', function () {
    const $input = $('#checking-amount').val();
    const $balance = $('#checking-balance').text().slice(1);
    const $newbalance = parseInt($balance) - parseInt($input);
    if ($newbalance < 0) {
        $('div .balance').css('background-color', 'red');
      alert("Insufficient Funds");
      return false;


    };
    const $displayBalance = $('#checking-balance').text(`$${$newbalance}`);
});

  var $balanceSum;
  // this function is to determine the sum of both balance accounts
  const getSumBalances = function () {
   const $cBalance = $('#checking-balance').text();
   const $checkingBalance = parseInt($cBalance).slice(1);
   const $sBalance = $('#savings-balance').text();
   const $savingsBalance = parseInt($sBalance).slice(1);
   const $balanceSum = $savingsBalance + $checkingBalance
   return $balanceSum;
   console.log($balanceSum)
};

// cant deduct more the account balance worth
// write an if statement siggesting if balance <= 0 alert function cannot withdraw more then balance

});
      // var withdraw  = $('#savings-withdraw').on('click', function () {
      //
      // }
