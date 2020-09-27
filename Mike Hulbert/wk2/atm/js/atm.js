
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

const $depositChecking = function (a, b) {
      $checkingAcc += parseInt(a.val()); // parseInt converts str to integer
      $checkingDisplay += b.text(`$${$checkingAcc}`);
      $queryAcc($checkingAcc, b);
    }

$("#checking-deposit").on("click", function() {
$depositChecking($('#checking-amount'), $('#checking-balance'));
});

//************************ Withdraw: Checking Account ************************//
//See README.md before editing function

const $withdrawChecking = function (a, b) {

  if ($checkingAcc > 0) {
      $checkingAcc = $checkingAcc - parseInt(a.val());
      $checkingDisplay += b.text(`$${$checkingAcc}`);
      $queryAcc($checkingAcc, b);
    } else if ($checkingAcc === 0 && $savingsAcc > 0) {
               $withdrawSavings(a, $('#savings-balance'));
    } else if ($checkingAcc === 0 && $savingsAcc === 0) {
               alert('Insuficient funds, get a job!')
               $queryAcc($checkingAcc, b);
             }
  }

$("#checking-withdraw").on("click", function (){
$withdrawChecking($('#checking-amount'), $('#checking-balance'));
});

//************************* Deposit: Savings Account *************************//
//See README.md before editing function

let $savingsAcc = 0; // total balance in the savings account
let $savingsDisplay = 0; // display current balance

const $depositSavings = function (a, b) {
      $savingsAcc += parseInt(a.val()); // parseInt converts str to integer
      $savingsDisplay += b.text(`$${$savingsAcc}`);
      $queryAcc($savingsAcc, b);
    }

$("#savings-deposit").on("click", function() {
$depositSavings($('#savings-amount'), $('#savings-balance'));
});

//************************* Withdraw: Savings Account ************************//
//See README.md before editing function

const $withdrawSavings = function (a, b) {

  if ($savingsAcc > 0) {
      $savingsAcc = $savingsAcc - parseInt(a.val());
      $savingsDisplay += b.text(`$${$savingsAcc}`);
      $queryAcc($savingsAcc, b);
    } else if ($savingsAcc === 0 && $checkingAcc > 0) {
               $withdrawChecking(a, $('#checking-balance'));
    } else if ($savingsAcc === 0 && $checkingAcc === 0) {
               alert('Insuficient funds, get a job!');
               $queryAcc($savingsAcc, b);
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

const checkPattern = function (input, d, w) {

  const inputVal = $(input).val();

  if ($.isNumeric(inputVal) && inputVal > 0) {
      $(d).prop("disabled", false);
      $(w).prop("disabled", false);
    } else {
      $(d).prop("disabled", true);
      $(w).prop("disabled", true);
      console.log('is not a number');
    }
  }

$('#checking-amount').keyup(function() {
  checkPattern('#checking-amount', '#checking-deposit', '#checking-withdraw');
});

$('#savings-amount').keyup(function() {
  checkPattern('#savings-amount', '#savings-deposit', '#savings-withdraw');
});
