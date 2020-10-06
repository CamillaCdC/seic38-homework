
$(document).ready(function(){
  loadData();
});

const loadData = function (){
  $queryAcc($checkingAcc, '#checking-balance'); // query checking acc
  $queryAcc($savingsAcc, '#savings-balance'); // query savings acc
  checkPattern('#checking-amount', '#checking-deposit', '#checking-withdraw');
  checkPattern('#savings-amount', '#savings-deposit', '#savings-withdraw');
}

//************************* Deposit: Checking Account ************************//
//See README.md before editing function

let $checkingAcc = 0; // total balance in the checking account
let $checkingDisplay = 0; // display current balance

const $depositChecking = function (amount, balance) {
      $checkingAcc += parseInt(amount.val()); // parseInt converts str to integer
      $checkingDisplay += balance.text(`$${$checkingAcc}`);
      $queryAcc($checkingAcc, balance);
    }

$("#checking-deposit").on("click", function() {
$depositChecking($('#checking-amount'), $('#checking-balance'));
});

//************************ Withdraw: Checking Account ************************//
//See README.md before editing function

const $withdrawChecking = function (amount, balance) {

  if ($checkingAcc > 0) {
      $checkingAcc = $checkingAcc - parseInt(amount.val());
      $checkingDisplay += balance.text(`$${$checkingAcc}`);
      $queryAcc($checkingAcc, balance);
    } else if ($checkingAcc === 0 && $savingsAcc > 0) {
               $withdrawSavings(amount, $('#savings-balance'));
    } else if ($checkingAcc === 0 && $savingsAcc === 0) {
               alert('Insuficient funds, get a job!')
               $queryAcc($checkingAcc, balance);
             }
  }

$("#checking-withdraw").on("click", function (){
$withdrawChecking($('#checking-amount'), $('#checking-balance'));
});

//************************* Deposit: Savings Account *************************//
//See README.md before editing function

let $savingsAcc = 0; // total balance in the savings account
let $savingsDisplay = 0; // display current balance

const $depositSavings = function (amount, balance) {
      $savingsAcc += parseInt(amount.val()); // parseInt converts str to integer
      $savingsDisplay += balance.text(`$${$savingsAcc}`);
      $queryAcc($savingsAcc, balance);
    }

$("#savings-deposit").on("click", function() {
$depositSavings($('#savings-amount'), $('#savings-balance'));
});

//************************* Withdraw: Savings Account ************************//
//See README.md before editing function

const $withdrawSavings = function (amount, balance) {

  if ($savingsAcc > 0) {
      $savingsAcc = $savingsAcc - parseInt(amount.val());
      $savingsDisplay += balance.text(`$${$savingsAcc}`);
      $queryAcc($savingsAcc, balance);
    } else if ($savingsAcc === 0 && $checkingAcc > 0) {
               $withdrawChecking(amount, $('#checking-balance'));
    } else if ($savingsAcc === 0 && $checkingAcc === 0) {
               alert('Insuficient funds, get a job!');
               $queryAcc($savingsAcc, balance);
            }
  }

$("#savings-withdraw").on("click", function (){
$withdrawSavings($('#savings-amount'), $('#savings-balance'));
});

//************************** Query Account Balance ***************************//
//See README.md before editing function

const $queryAcc = function (account, input) {

  if (account <= 0) {
      $(input).addClass('zero');
    } else if (account > 0) {
      $(input).removeClass('zero');
      }
  }

//*************************** Validiate Input ********************************//

const checkPattern = function (input, deposit, withdraw) {

  const inputVal = $(input).val();

  if ($.isNumeric(inputVal) && inputVal > 0) {
      $(deposit).prop("disabled", false);
      $(withdraw).prop("disabled", false);
    } else {
      $(deposit).prop("disabled", true);
      $(withdraw).prop("disabled", true);
      console.log('is not a number');
    }
  }

$('#checking-amount').keyup(function() {
  checkPattern('#checking-amount', '#checking-deposit', '#checking-withdraw');
});

$('#savings-amount').keyup(function() {
  checkPattern('#savings-amount', '#savings-deposit', '#savings-withdraw');
});
