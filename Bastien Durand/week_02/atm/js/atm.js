$(document).ready(function () {

  let checkingBalance = 0
  let savingsBalance = 0


// OVERDRAFT PROTECTION FEATURE

// const overDraft = function () {
//   if ()
// }


//Checking account value if is $0 or > $0

const colorCheckerChecking = function () {

  if(checkingBalance === 0) {

    $('#checking-balance').css('background-color', 'red')

  } else {

    $('#checking-balance').css('background-color', 'grey')

  }
};

const colorCheckerSavings = function () {

  if(savingsBalance === 0) {

    $('#savings-balance').css('background-color', 'red')

  } else {

    $('#savings-balance').css('background-color', 'grey')

  }
};

  if(checkingBalance === 0) {
    $('#checking-balance').css('background-color', 'red')
  }

  if(savingsBalance === 0) {
    $('#savings-balance').css('background-color', 'red')
  }



//CHECKING ACCOUNT - DEPOSITING FEATURE

$('#checking-deposit').on('click', function () {
  let depositAmount = $('#checking-amount').val()

    $('#checking-balance').text(depositAmount)

    checkingBalance =  parseInt($('#checking-balance').text()) + checkingBalance

    $('#checking-balance').text('$' + checkingBalance)

    //Checking which color to set if value is 0 or > 0

    colorCheckerChecking();

})

//CHECKING ACCOUNT - WITHDRAWING FEATURE

$('#checking-withdraw').on('click', function (){
  let withdrawAmount = parseInt($('#checking-amount').val())

  if(withdrawAmount > (savingsBalance + checkingBalance)) {

    checkingBalance === checkingBalance

    console.log('Cannot withdraw amount')


  } else if (withdrawAmount > checkingBalance) {

    $('#checking-balance').text(withdrawAmount)

    savingsBalance =  savingsBalance + (checkingBalance - withdrawAmount)

    checkingBalance = 0


    $('#checking-balance').text('$' + checkingBalance)
    $('#savings-balance').text('$' + savingsBalance)

    colorCheckerSavings();
    colorCheckerChecking();

} else {

  checkingBalance = checkingBalance - withdrawAmount

  $('#checking-balance').text('$' + checkingBalance)

}

})


//SAVINGS ACCOUNT - DEPOSITING FEATURE

$('#savings-deposit').on('click', function () {
  let depositAmount = $('#savings-amount').val()

    $('#savings-balance').text(depositAmount)

    savingsBalance =  parseInt($('#savings-balance').text()) + savingsBalance

    $('#savings-balance').text('$' + savingsBalance)


    //checking which color to set if value is 0 or > 0

    colorCheckerSavings();

})


//SAVINGS ACCOUNT - WITHDRAWING FEATURE

$('#savings-withdraw').on('click', function (){
  let withdrawAmount = $('#savings-amount').val()

  if(withdrawAmount > (savingsBalance + checkingBalance)) {

    savingsBalance === savingsBalance
    console.log('Cannot withdraw amount')

  } else if (withdrawAmount > savingsBalance) {

    $('#savings-balance').text(withdrawAmount)

    checkingBalance =  checkingBalance + (savingsBalance - withdrawAmount)

    savingsBalance = 0


    $('#checking-balance').text('$' + checkingBalance)
    $('#savings-balance').text('$' + savingsBalance)

    colorCheckerSavings();
    colorCheckerChecking();

  } else {

    savingsBalance = savingsBalance - withdrawAmount

    $('#savings-balance').text('$' + savingsBalance)

  }

})

})
