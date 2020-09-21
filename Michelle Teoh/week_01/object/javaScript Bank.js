// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

// QUESTION: 1. BANK
var account = function (name, balance){

  account.name = name;
  account.balance = balance;

  account.deposit = function (depositAmount) {
    newBalance = account.balance - depositAmount;
    console.log("Your balance is now " + newBalance);
    if (newBalance <= 0) {
      console.log("You have insufficient funds!!!");
    }
  };

  account.withdraw = function (withdrawAmount) {
    newBalance = account.balance - withdrawAmount;
    console.log("Your balance is now " + newBalance);
    if (newBalance <= 0) {
      console.log("You have insufficient funds!!!");
    }
  };

  account.transfer = function (transferAmount, account) {
    newBalance = account.balance - transferAmount;
    if (account.withdraw(transferAmountamount) && account.deposit(transferAmount)) {
    console.log(`Transfer: ${transferAmount} has been moved from ${this.name} to ${account.name}`);

  }

  console.log("Name: " + name + "; Balance: " + balance);
}


var AustinAccount = new account ("Austin", 500);
var KateAccount = new account ("Kate", 10000);
var GingerAccount = new account ("Ginger", 70000000);
var OreoAccount = new account ("Oreo", 900000000);

// QUESTION: 2. Accounts

//QUESTION: 3. Bonus
