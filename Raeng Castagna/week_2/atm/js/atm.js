// DONE
// Disable withdraw if total gets to 0, ignore transaction if withdraw more than total.
// * When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.
// * What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.

// TO DO
// * Are there ways to refactor your code to make it DRYer?

// DOING


const checkingDeposit = function () {
    const $input = $('#checking-amount').val();
    const $balance = $('#checking-balance').text().slice(1); // slice removes the $
    const convert = parseInt($input) + parseInt($balance);
    $('#checking-balance').text(`$${convert}`);
    if (convert === 0) {
      $('#checking-balance').css('background-color', 'red');
    } else {
      $('#checking-balance').css('background-color', '#E3E3E3')
    }
  };

const checkingWithdraw = function () {
  const $input = $('#checking-amount').val();
  const $balance = parseInt($('#checking-balance').text().slice(1));
  const convert = $balance - parseInt($input);
  // get other accounts balance to compare with overdraft
  const savingsBalance = parseInt($('#savings-balance').text().slice(1));
  const currentAccount = $input - $balance; // subtract amount requested by balance of current account
  const savingsAccount = savingsBalance - currentAccount; // minus above with other account
    // if total in this account and total in savings around does not equal withdraw amount
    if (convert === 0 || savingsBalance < $input) {
      console.log('cant withdraw')
    } else if (($balance + savingsBalance) >= $input) {
      // if total in current account is $0 but adding savings account equals amount then withdraw
      console.log('combinded accounts have amount') // identifies there is enough $$$
      // withdraw all from current account then reminder from overdraft
      $('#savings-balance').text(`$${savingsAccount}`);
      $('#checking-balance').text(`$${0}`);
    };
    if (convert === 0) {
        $('#checking-balance').text(`$${convert}`);
        $('#checking-balance').css('background-color', 'red');
        } else if (convert <= 0) {
          return false
        } else {
        $('#checking-balance').text(`$${convert}`);
      };
};

const savingsDeposit = function () {
      // show input of display as number
      const $input = $('#savings-amount').val();
      // console.log($input)
      // show balance on screen as text, take off $ with slice
      const $savingBalance = $('#savings-balance').text().slice(1); // slice removes the $
      // console.log($savingBalance)
      // parseInt(converts it into number)
      const convert = parseInt($input) + parseInt($savingBalance);
      // displays on dom
      $('#savings-balance').text(`$${convert}`);
      if (convert === 0) {
        // change color to red when $0
        $('#savings-balance').css('background-color', 'red');
      } else {
        $('#savings-balance').css('background-color', '#E3E3E3')
      }
  };

const savingsWithdraw = function () {
    // show input of display as number
      const $input = $('#savings-amount').val();
      // show balance on screen as text, take off $ with slice
      const $balance = parseInt($('#savings-balance').text().slice(1));
      // parseInt(converts text into number)
      // subtract input from current balance.
      const convert = $balance - parseInt($input);
      // get other accounts balance to compare with overdraft
      const checkingBalance = parseInt($('#checking-balance').text().slice(1));
      // if total in this account and total in savings around does not equal withdraw amount
      if (convert === 0  || checkingBalance < $input) {
        console.log('cant withdraw')
      } else if (($balance + checkingBalance) >= $input) {     // if total in current account is $0 but adding savings account equals amount then withdraw
        console.log('combinded accounts have amount') // identifies there is enough $$$
        // withdraw all from current account then reminder from overdraft
        const currentAccount = $input - $balance; // subtract amount requested by balance of current account
        const checkingAccount = checkingBalance - currentAccount; // minus above with other account
        $('#checking-balance').text(`$${checkingAccount}`);
        $('#savings-balance').text(`$${0}`);
      };
        if (convert === 0) {
          $('#savings-balance').text(`$${convert}`);
          $('#savings-balance').css('background-color', 'red');
        } else if (convert <= 0) {
          return false
        }
        else {
          $('#savings-balance').text(`$${convert}`);
        };
    };


$(document).ready(function () {
  $('#checking-deposit').on('click', checkingDeposit);
  $('#checking-withdraw').on('click', checkingWithdraw);
  $('#savings-deposit').on('click', savingsDeposit);
  $('#savings-withdraw').on('click', savingsWithdraw);

});
