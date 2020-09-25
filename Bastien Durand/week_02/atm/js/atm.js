$(document).ready(function () {

  const checkingBalance = [];
  const savingsBalance = [];

$('#checking-amount').on('keyup', function () {

  //Store #input when clicked on #deposit COMPLETED

$('#checking-deposit').on('click', function () {
  let $checkAmount = $('#checking-amount').val();
  var intCheckAmount = parseInt($checkAmount)
  intCheckAmount.next(intCheckAmount)
  console.log(intCheckAmount)
  console.log(checkAmount)
  $('#checking-balance').text(checkAmount)
$('#checking-withdraw').on('click', function () {
  let newCheckAmount = $('#checking-amount').val()
  $('#checking-balance').text(intCheckAmount - newCheckAmount)
})
})

// $('#checking-withdraw').on('click', function () {
//   const depAmount = $('#checking-balance').val();
//   console.log(depAmount)
//   $('#checking-amount').text(depAmount -= depAmount)
// })


  //push stored #input into #balance

  //clear stored #balance when clicking withdraw

})

//Same thing for SAVINGS





})
// $('#savings-amount').on('keyup', function () {
//
//
//   $('savings-deposit').on('click', function () {
//     const inputSav = $('savings-amount').val();
//     console.log(inputSav)
//   })
// })
