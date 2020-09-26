$(document).ready(function () {

  let checkingBalance = 0
  let savingsBalance = 0

const colorCheckerChecking = function () {
  if(checkingBalance === 0) {
    $('#checking-balance').css('background-color', 'red')
  } else {
    $('#checking-balance').css('background-color', 'green')
  }
};

const colorCheckerSavings = function () {
  if(savingsBalance === 0) {
    $('#savings-balance').css('background-color', 'red')
  } else {
    $('#savings-balance').css('background-color', 'green')
  }
};

  if(checkingBalance === 0) {
    $('#checking-balance').css('background-color', 'red')
  }

  if(savingsBalance === 0) {
    $('#savings-balance').css('background-color', 'red')
  }


//CHECKING
//DEPOSITING
$('#checking-deposit').on('click', function () {
  let depositAmount = $('#checking-amount').val()
    $('#checking-balance').text(depositAmount)
    checkingBalance =  parseInt($('#checking-balance').text()) + checkingBalance
    $('#checking-balance').text(checkingBalance)


    colorCheckerChecking();
})

//CHECKING
//WITHDRAWING
$('#checking-withdraw').on('click', function (){
  let withdrawAmount = parseInt($('#checking-amount').val())

  if(withdrawAmount > checkingBalance) {
    checkingBalance === checkingBalance
    console.log('Cannot withdraw amount')
  } else {
    $('#checking-balance').text(withdrawAmount)
    checkingBalance =  checkingBalance - parseInt($('#checking-balance').text())
    $('#checking-balance').text(checkingBalance)
  }

  colorCheckerChecking();


})

//SAVINGS
//WITHDRAWING
$('#savings-deposit').on('click', function () {
  let depositAmount = $('#savings-amount').val()
    $('#savings-balance').text(depositAmount)
    savingsBalance =  parseInt($('#savings-balance').text()) + savingsBalance
    $('#savings-balance').text(savingsBalance)

    colorCheckerSavings();
})

//Savings
//DEPOSITING
$('#savings-withdraw').on('click', function (){
  let withdrawAmount = $('#savings-amount').val()

  if(withdrawAmount > savingsBalance) {
    savingsBalance === savingsBalance
    console.log('Cannot withdraw amount')
  } else {
    $('#savings-balance').text(withdrawAmount)
    savingsBalance =  savingsBalance - parseInt($('#savings-balance').text())
    $('#savings-balance').text(savingsBalance)
  }

  colorCheckerSavings();

})

})
