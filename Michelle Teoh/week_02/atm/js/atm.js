const checkForZero = function () {
  $('.zero').removeClass('zero');

  const checkingBalance = +$('#checking-balance').text().slice(1);
  if (checkingBalance <= 0) {
    $('#checking-balance').addClass('zero');
  }
  const savingsBalance = +$('#savings-balance').text().slice(1);
  if (savingsBalance <= 0) {
    $('#savings-balance').addClass('zero');
  }
};

$(document).ready(function () {
  checkForZero();

  $('#checking-deposit').on('click', function () {
    const deposit = +$('#checking-amount').val();
    const currentBalance = +$('#checking-balance').text().slice(1); // Remove the "$"
    const newBalance = deposit + currentBalance;
    $('#checking-balance').text('$' + newBalance);

    checkForZero();
  });

  $('#checking-withdraw').on('click', function () {
    const amount = +$('#checking-amount').val();
    const currentBalance = +$('#checking-balance').text().slice(1); // Remove the "$"
    const otherBalance = +$('#savings-balance').text().slice(1); // Remove the "$"

    const totalBalance = currentBalance + otherBalance;

    const newBalance = currentBalance - amount;
    if (newBalance >= 0) {
      $('#checking-balance').text('$' + newBalance);
    } else if (amount <= totalBalance) {
      $('#checking-balance').text('$0');
      // Here, newBalance is the negative amount that didn't exist in this account.
      $('#savings-balance').text('$' + (otherBalance + newBalance));
    }

    checkForZero();
  });

  $('#savings-deposit').on('click', function () {
    const deposit = +$('#savings-amount').val();
    const currentBalance = +$('#savings-balance').text().slice(1); // Remove the "$"
    const newBalance = deposit + currentBalance;
    $('#savings-balance').text('$' + newBalance);

    checkForZero();
  });

  $('#savings-withdraw').on('click', function () {
    const amount = +$('#savings-amount').val();
    const currentBalance = +$('#savings-balance').text().slice(1); // Remove the "$"
    const otherBalance = +$('#checking-balance').text().slice(1); // Remove the "$"

    const totalBalance = currentBalance + otherBalance;

    const newBalance = currentBalance - amount;
    if (newBalance >= 0) {
      $('#savings-balance').text('$' + newBalance);
    } else if (amount <= totalBalance) {
      $('#savings-balance').text('$0');
      // Here, newBalance is the negative amount that didn't exist in this account.
      $('#checking-balance').text('$' + (otherBalance + newBalance));
    }

    checkForZero();
  });
});
