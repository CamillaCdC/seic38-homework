// * Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.
// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?
$(document).ready(function () {
  const changeBgColor = () => {
    const checkingBalance = +$("#checking-balance").html().slice(1);
    const savingsBalance = +$("#savings-balance").html().slice(1);
    !checkingBalance
      ? $("#checking-balance").addClass("zero")
      : $("#checking-balance").removeClass("zero");
    !savingsBalance
      ? $("#savings-balance").addClass("zero")
      : $("#savings-balance").removeClass("zero");
  };
  changeBgColor();
  const depositWithdraw = () => {
    const regex = /^[0-9]*$/gm;
    // grab amount to deposit
    let amount = $(event.target).siblings().eq(2).val();
    regex.test(amount) ? (amount = +amount) : alert("numbers only");
    // grab the balance of the current account we're working with
    const currentBalance = +$(event.target)
      .siblings(".balance")
      .html()
      .slice(1);
    // grab html of current account
    const $currentAccount = $(event.target).siblings().eq(1);
    // update that balance if appropriate
    if (amount > 0 && $(event.target).val() === "Deposit") {
      $currentAccount.html(`$${currentBalance + amount}`);
    }
    if ($(event.target).val() === "Withdraw") {
      if (amount > currentBalance) {
        // check the other account
        const $otherAccount = $(event.target)
          .parent(".account")
          .siblings()
          .eq(1)
          .children(".balance");
        const otherAccountBalance = +$otherAccount.html().slice(1);
        otherAccountBalance >= amount
          ? $otherAccount.html(`$${otherAccountBalance - amount}`)
          : alert(String.fromCodePoint(0x1f62d)); // sad boi if broke
        return;
      }
      currentBalance >= amount && amount > 0 // wont accept negative value
        ? $currentAccount.html(`$${currentBalance - amount}`)
        : alert(String.fromCodePoint(0x1f62d)); // sad boi if broke
    }
  };
  // grab all the buttons, run both functions on click
  $(
    "#checking-deposit, #savings-deposit, #checking-withdraw, #savings-withdraw"
  ).on("click", () => {
    depositWithdraw(event);
    changeBgColor(event);
  });
});
