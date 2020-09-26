$(document).ready(function () {

let savingsBalance = 0;
let checkingsBalance = 0;






// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.

const depositToChecking = function(e) {
const checkingAmountInput =  $('#checking-amount').val()


$('#checking-balance').text(checkingAmountInput)

checkingsBalance = parseInt($('#checking-balance').text()) + checkingsBalance
$('#checking-balance').text(checkingsBalance)

}

$('#checking-deposit').on('click', depositToChecking)


const depositToSavings = function(e) {


const savingsAmountInput =  $('#savings-amount').val()
$('#savings-balance').text(savingsAmountInput)


    savingsBalance =  parseInt($('#savings-balance').text()) + savingsBalance
    console.log(savingsBalance)
    $('#savings-balance').text(savingsBalance)
}




$('#savings-deposit').on('click', depositToSavings)


// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.

 // up to here -------------
const withdrawFromChecking = function(e) {
  const checkingAmountInput =  parseInt($('#checking-amount').val())

  if (parseInt($('#checking-amount').val()) > checkingsBalance) {
    checkingsBalance === checkingsBalance

  } else {
    checkingsBalance = checkingsBalance - checkingAmountInput

    $('#checking-balance').text(checkingsBalance)
  }
}

$('#checking-withdraw').on('click', withdrawFromChecking)


const withdrawFromSavings = function(e) {
  const savingsAmountInput = parseInt($('#savings-amount').val())

    if (parseInt($('#savings-amount').val()) > savingsBalance) {
      savingsBalance === savingsBalance

  } else {
    savingsBalance = savingsBalance - savingsAmountInput

    $('#savings-balance').text(savingsBalance)

  }
}

$('#savings-withdraw').on('click', withdrawFromSavings)

// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account. // call a class in css
// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?
})
