$(document).ready(function() {

  const depositChecking = function() {
    const $deposit = $("#checking-amount").val();
    const $balance = $("#checking-balance").text().slice(1);
    const total = parseInt($deposit) + parseInt($balance)
    const $newBalance = $("#checking-balance").text("$" + total);
    console.log($balance)
  };

  const depositSavings = function() {
    const $deposit = $("#savings-amount").val();
    const $balance = $("#savings-balance").text().slice(1);
    const total = parseInt($deposit) + parseInt($balance)
    const $newBalance = $("#savings-balance").text("$" + total);
    console.log($balance)
  };

  const withdrawChecking = function() {
    const $withdraw = $("#checking-amount").val();
    const $balance = $("#checking-balance").text().slice(1);
    const total = parseInt($balance) - parseInt($withdraw)
    const $newBalance = $("#checking-balance").text("$" + total);
   if ($balance <= 0) {
      alert(`You have $${ $balance } balance left and a Withdraw limit of $20 accross all of your accounts, please read your terms and conditions for withdraw limits as fees may apply`)
   };
    console.log($balance)
  };

  const withdrawSavings = function() {
    const $withdraw = $("#savings-amount").val();
    const $balance = $("#savings-balance.balance").text().slice(1);
    const total = parseInt($balance) - parseInt($withdraw)
    const $newBalance = $("#savings-balance").text("$" + total);
    if($("#savings-balance.balance").text() <= 0){
      $("#savings-balance").css({"backgroundColor": "red"});
    };
      // alert(`You have $${ $balance } balance left and a Withdraw limit of $20 accross all of your accounts, please read your terms and conditions for withdraw limits as fees may apply`)
      return $warning;
    console.log($balance)
  };

  $("#checking-deposit").on("click", depositChecking)
  $("#savings-deposit").on("click", depositSavings)

  $("#checking-withdraw").on("click", withdrawChecking)
  $("#savings-withdraw").on("click", withdrawSavings)

});


// $balance >= -20 &&
//
// alert(`You have $${ $balance } balance left and a Withdraw limit of $20 accross all of your accounts, please read your terms and conditions for withdraw limits as fees may apply`);
// } else {
