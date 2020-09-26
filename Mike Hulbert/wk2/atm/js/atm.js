
$(document).ready(function(){
  $queryAcc($checkingAcc, '#checking-balance'); // query checking acc
  $queryAcc($savingsAcc, '#savings-balance'); // query savings acc
});

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
               alert('insuficient funds, get a job!')
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
               alert('insuficient funds, get a job!')
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
