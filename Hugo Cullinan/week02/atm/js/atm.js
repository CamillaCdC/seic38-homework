
let cBalance = 0;
let sBalance = 0;

$(document).ready(function() {

  const isEmpty = function (account, id) {
    if (account < 1) {
      $(`#${ id }`).css('background-color', 'red');
    };
  };

  const hasFunds = function (account, id) {
    if (account > 0) {
      $(`#${ id }`).css('background-color', '#6c9a74');
    };
  }

  //checkings deposit button
  $('#checking-deposit').on('click', function () {
    const inputAmt = $('#checking-amount').val();
    cBalance += parseInt(inputAmt);
    $('#checking-balance').html(`$${cBalance}`);
    $('#checking-amount').val('');
    hasFunds(cBalance, 'checking');
  });

  //checkings withdraw button
  $('#checking-withdraw').on('click', function () {
    const inputAmt = $('#checking-amount').val();
    const total = cBalance + sBalance;
    if (inputAmt <= cBalance) {
      cBalance -= parseInt(inputAmt);
      $('#checking-balance').html(`$${cBalance}`);
      $('#checking-amount').val('');
      isEmpty(cBalance, 'checking');
    } else if (inputAmt <= total) {
      sBalance -= inputAmt - cBalance;
      cBalance = 0;
      $('#checking-balance').html(`$${cBalance}`);
      $('#savings-balance').html(`$${sBalance}`);
      $('#checking-amount').val('');
      isEmpty(cBalance, 'checking');
    } else {
      console.log('Insufficient funds!');
      $('#checking-amount').val('');
    }
  });

  //savings deposit button
  $('#savings-deposit').on('click', function () {
    const inputAmt = $('#savings-amount').val();
    sBalance += parseInt(inputAmt);
    $('#savings-balance').html(`$${sBalance}`);
    $('#savings-amount').val('');
    hasFunds(sBalance, 'savings');
  });

  //savings withdraw button
  $('#savings-withdraw').on('click', function () {
    const inputAmt = $('#savings-amount').val();
    const total = cBalance + sBalance;
    if (inputAmt <= sBalance) {
      sBalance -= parseInt(inputAmt);
      $('#savings-balance').html(`$${sBalance}`);
      $('#savings-amount').val('');
      isEmpty(sBalance, 'savings');
    } else if (inputAmt <= total) {
      cBalance -= inputAmt - sBalance;
      sBalance = 0;
      $('#savings-balance').html(`$${sBalance}`);
      $('#checking-balance').html(`$${cBalance}`);
      $('#savings-amount').val('');
      isEmpty(sBalance, 'savings');
    } else {
      console.log('Insufficient funds!');
      $('#checking-amount').val('');
    }
  });


});
