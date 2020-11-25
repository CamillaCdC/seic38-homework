$(document).ready(function () {
  $('.checking-deposit').on("click", newBalance);
  $('.saving-deposit').on("click", newBalance);

  $('.cheking-withdraw').on("click", newBalance);
  $('.savings-withdraw').on("click", newBalance)

  function newBalance() {
    var prevBalance = $(this).siblings('div.balance');
    var result = prevBalance.text();
    var currentBalance = parseInt(result.replace("$",""));
    var newEntry = parseInt($(this).siblings("input.cheking-amount").val());
    $(prevBalance).text( function () {
      var total = newEntry + currentBalance;
      return "$" + total;
    });
    $(this).siblings("input.cheking-amount").val("");
    $(this).siblings("div.balance").css("background-color","#E3E3E3")
  }

  var balaceSum;
  function getSumBalances() {
    var cBalance = $(".checking-balance").text();
    var checkingBalance = parseInt(cBalance.replace("$", ""));
    var sBalance = $(".savings-balance").text();
    var savingsBalance = parseInt(sBalance.replace("$", ""));
    balanceSum = savingsBalance + checkingBalance;
    return balanceSum;
  }

  function subtractMoney() {
    getSumBalances();
    var prevBalance = $(this).siblings('div.balance');
    var result = prevBalance.text();
    var currentBalance = parseInt(result.replace("$", ""));
    var newWithdrawal = parseInt($(this).siblings('input.checking-amount').val());
    $(prevBalance).text(function () {
      var total = newEntry + currentBalance;
      return "$" + total;
    });
    $(this).siblings('input.checking-amount').val("");
    $(this).siblings('div.balance').css("background-color","#E3E3E3")
  }


});
