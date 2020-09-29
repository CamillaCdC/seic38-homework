//Functions in here run after the DOM has loaded
$(document).ready(function() {
  //Check the JS and jQuery are working right
  console.log('hi ' + $.fn.jquery)
  //Click listeners for each button activate the requisite function
  $('#checking-deposit').on('click', function() {
    deposit('checking');
  })
  $('#savings-deposit').on('click', function () {
    deposit('savings');
  })
  $('#checking-withdraw').on('click', function() {
    withdraw('checking');
  })
  $('#savings-withdraw').on('click', function () {
    withdraw('savings');
  })
  //Run zeroBal at load to display red on the initial value
  zeroBal('checking');
  zeroBal('savings');

});

//track the checking and saving balances
let checkBal = 0;
let saveBal = 0
let totalBal = 0;

//a funciton for depositing money
const deposit = function (account) {
  //set inAmount to integer value of input box
  const inAmount = parseInt($(`#${account}-amount`).val());
  //check that inAmount is a number
  if (isNaN(inAmount) || inAmount === '') {
    alert('Please enter a valid number')
  // check account and add inAmount to account balance
} else if (account === 'savings') {
    saveBal += inAmount;
    $(`#${account}-balance`).html(`$${saveBal}`);
  } else {
    checkBal += inAmount;
    $(`#${account}-balance`).html(`$${checkBal}`);
  }
  // run zeroBal() to change the colour of the balance div if moving off 0
  zeroBal(account);
  // update total balance
  totalBal = checkBal + saveBal
};

//a function for withdrawing money
const withdraw = function (account) {
  //set outAmount to integer value of input box
  const outAmount = parseInt($(`#${account}-amount`).val())
  //check that outAmount is a number
  if (isNaN(outAmount) || outAmount === '') {
    alert('Please enter a valid number');

  // check account
  } else if (account === 'savings') {
    // if  withdrawal will mean savings < 0, but both accounts have enough
    if (saveBal - outAmount < 0 && totalBal - outAmount > 0) {
      //add the negative balance from savings to checking
      checkBal += (saveBal - outAmount)
      //set savings to 0
      saveBal = 0
    // if there isn't enough money in both accounts to cover the withdrawal
    } else if (saveBal - outAmount < 0 && totalBal - outAmount < 0) {
      // warn and don't process the transaction
      alert('Cannot overdraw account')
      //otherwise subtract the withdrawal from account balance
    } else {
      saveBal -= outAmount;
    }
  // check account
  } else if (account === 'checking') {
    // if  withdrawal will mean checking < 0, but both accounts have enough
    if (checkBal - outAmount < 0 && totalBal - outAmount > 0) {
      //add the negative balance from checking to savings
      saveBal += (checkBal - outAmount)
      //set checking to 0
      checkBal = 0
    // if there isn't enough money in both accounts to cover the withdrawal
    } else if (checkBal - outAmount < 0 && totalBal - outAmount < 0) {
      //warn and don't process the transaction
      alert('Cannot overdraw account')
    //otherwise subtract the withdrawal from account balance
    } else {
      checkBal -= outAmount;
    }
  }
  // update total balance
  totalBal = checkBal + saveBal
  //output both account values
  $(`#checking-balance`).html(`$${checkBal}`);
  $(`#savings-balance`).html(`$${saveBal}`);
  // run zeroBal() to change the colour of the balance div if it is 0
  zeroBal(account);
};

// a function to change the colour of the balance div if it is at $0
const zeroBal = function (account) {
  //adds a CSS class if balance is $0
  if ($(`#${account}-balance`).html() === '$0') {
    $(`#${account}-balance`).addClass('zero');
  //removes .zero if the balance !== 0
  } else {
    $(`#${account}-balance`).removeClass('zero');
  }
}
