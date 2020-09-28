

$( document ).ready(function() {
//   let checkingDeposits = [];
//   let savingDeposits = [];
//
//
//   const displaycashx3 = function () {
//   //when user enters number into checking - amount = display onto checking balance
//     $('#checking-amount').on('keyup', function() {
//     //need to incluse the click to deposit function
//     const checkingBalance = $('#checking-amount').val();
//     var submitDeposit = $('#checking-deposit').on('click', function () {
//       $('#checking-balance').text(`$${checkingBalance}`);
//       $('submitDeposit').append($(submitDeposit))
//   //we want to store this now
//     };
//   }
//
// });

//
//
//
//
const displaycashx3 = function () {
  $('#checking-amount').on('keyup', function() {
//need to incluse the click to deposit function
const checkingBalance = $('#checking-amount').val();
var submitDeposit = $('#checking-deposit').on('click', function () {
$('#checking-balance').text(`$${checkingBalance}`);
};
}
});
// //here we put the deposit input into the checkingDeposits
  // when you print the input in the account balance - save this number in there and print it on the body tag like a bank statement
// });
// });


//
//
// //
//
// $( document ).ready(function() {
//   // //first we need a function that adds inputs and stores them
//   //
//    const displaycashx3 = function () {
//     $('#checking-amount').on('keyup', function() {
//   // // //need to incluse the click to deposit function
//    const checkingBalance = $('#checking-amount').val();
//    var submitDeposit = $('#checking-deposit').on('click', function () {
//    $('#checking-balance').text(`$${checkingBalance}`);
//    };
//    }
// //add up all the cash thats been put into the inputs
//
//
//
//
//
// });

 //when you type into checking amount and click deposit, print the deposit amount in checking amount
 // const input = $('#checking-amount').val();
 // //listen for click
 // $('#checking-balance').text
 // ('click', input);



 //   const addUpCash = function () {
 // var priorBalance = $(this).siblings("div.balance");
 // var result = priorBalance.text();
 // var currentBalance = parseInt(result.replace("$", ""));
 // var newEntry = parseInt($(this).siblings("input.moneyintheBank").val());
 // $(priorBalance).text(function() {
 //   var total = newEntry + currentBalance
 //   return "$" + total;
