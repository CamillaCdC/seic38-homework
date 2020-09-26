!If changes required make changes to line numbers in readme file!

Deposit: Checking Account
// Line 10: Set initial account balance at 0
// Line 14: add input value too the account balance variable
// Line 15: push balance variable into account display variable
// Line 16: query account balance and apply correct css


Withdraw: Checking Account
// Line 28: execute if account balance is higher than 0
// Line 29: new account balance equals current account balance minus input value
// Line 30: push balance variable into account display variable
// Line 31: query account balance and apply correct css
// Line 32: execute withdraw savings func if checking account 0 & savings > 0
// Line 34: if both accounts are zero execute $queryAcc() :styling change

Deposit: Savings Account
// Line 47: Set initial account balance at 0
// Line 51: add input value too the account balance variable
// Line 52: push balance variable into account display variable
// Line 53: query account balance and apply correct css

Withdraw: Savings Account
// Line 65: execute if account balance is higher than 0
// Line 66: new account balance equals current account balance minus input value
// Line 67: push balance variable into account display variable
// Line 68: query account balance and apply correct css
// Line 69: execute withdraw savings func if checking account 0 & savings > 0
// Line 71: if both accounts are zero execute $queryAcc() :styling change

Query balance
// Line 86: Check the account balance and set the correct css class.

// Outstanding Bugs
**If either input value is empty on click functions break
** refactor deposit and withdraw functions. Storing in variable

*Lab instructions*

#Title: ATM App

###Type:
- Lab

###Summary
- This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
- You'll be selecting elements, manipulating HTML, and manipulating style along
with building out the logic using JavaScript.

###Objectives:
- DOM selection, appending, removal, updating

###Specification:

* Keep track of the checking and savings balances somewhere
* Add functionality so that a user can deposit money into one of the bank accounts.
* Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change.
* Add functionality so that a user can withdraw money from one of the bank accounts.
* Make sure you are updating the display and manipulating the HTML of the page
so a user can see the change.
* Make sure the balance in an account can't go negative. If a user tries to
withdraw more money than exists in the account, ignore the transaction.
* When the balance of the bank account is $0 the background of that bank account
should be red. It should be gray when there is money in the account.
* What happens when the user wants to withdraw more money from the checking
account than is in the account? These accounts have overdraft protection, so if
a withdrawal can be covered by the balances in both accounts, take the checking
balance down to $0 and take the rest of the withdrawal from the savings account.
If the withdrawal amount is more than the combined account balance, ignore it.
* Make sure there is overdraft protection going both ways.
* Are there ways to refactor your code to make it DRYer?
