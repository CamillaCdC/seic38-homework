//
//
// In this homework, you'll create a basic bank in Javascript.
// The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// ------------------------------------------------------------------------------------------------------
// There is only one bank. This bank has an array of accounts.
// The bank needs a method that will return the total sum of money in the accounts.
// It also needs an addAccount method that will enroll a new account at the bank and
// add it to the array of accounts. There is no need to create additional functions of
// the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
//
// Accounts
// ------------------------------------------------------------------------------------------------------
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an
// account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have
// your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do
// indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals,
// show the new total balance.
//
//
// Tips
// ------------------------------------------------------------------------------------------------------
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// ------------------------------------------------------------------------------------------------------
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
//
// Additional
// ------------------------------------------------------------------------------------------------------
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.
// ------------------------------------------------------------------------------------------------------



// Making a fake bank array:

const randomBalanceMaker =function (){
  return Number (( 500*Math.random() ).toFixed(2));
};

const accountsArray = [ {name: "Bastian", currentBalance:randomBalanceMaker()},
                        {name: "Farid", currentBalance:randomBalanceMaker()},
                        {name: "Giti", currentBalance:randomBalanceMaker()},
                        {name: "Guillaume", currentBalance:randomBalanceMaker()},
                        {name: "Henry", currentBalance:randomBalanceMaker()},
                        {name: "Hugo", currentBalance:randomBalanceMaker()},
                        {name: "Jasper", currentBalance:randomBalanceMaker()},
                        {name: "Justin", currentBalance:randomBalanceMaker()},
                        {name: "Michelle", currentBalance:randomBalanceMaker()},
                        {name: "Mike", currentBalance:randomBalanceMaker()},
                        {name: "Naveen", currentBalance:randomBalanceMaker()},
                        {name: "Nicholas", currentBalance:randomBalanceMaker()},
                        {name: "Raeng", currentBalance:randomBalanceMaker()},
                        {name: "Robert", currentBalance:randomBalanceMaker()},
                        {name: "Ryan", currentBalance:randomBalanceMaker()},
                        {name: "Sarah", currentBalance:randomBalanceMaker()},
                        {name: "Stacey", currentBalance:randomBalanceMaker()},
                        {name: "William", currentBalance:randomBalanceMaker()},
                        {name: "Brittany", currentBalance:randomBalanceMaker()},
                        {name: "Camilla", currentBalance:randomBalanceMaker()},
                        {name: "Michael", currentBalance:randomBalanceMaker()}];


//JSBank - First Way

const jsBank = {
  total: function(){
    let s=0;
    for (i=0; i<accountsArray.length; i++){
      s += accountsArray[i].currentBalance;
    };
    return `The sum of money in all accounts is ${s}$ `;
  },
  addAccount: function(accountName,balance){
    let newAccount = {};
    newAccount.name = accountName;
    newAccount.currentBalance = balance;
    accountsArray.push(newAccount);
    return `New account has been added by Mr/Mrs ${accountName}. The balance is: ${balance}$ `;
  },
  moneyDeposite: function(name,amount){
    for (i=0; i<accountsArray.length; i++){
      if (name === accountsArray[i].name){
        accountsArray[i].currentBalance = accountsArray[i].currentBalance+amount;
        return `Mr/Mrs ${name} current balance: ${accountsArray[i].currentBalance}$ `;
      };
    };
  },
  moneyWithdraw: function(name,amount){
    for (i=0; i<accountsArray.length; i++){
      if (name === accountsArray[i].name){
        if (amount > accountsArray[i].currentBalance) {
          return `Your balance is ${accountsArray[i].currentBalance}$ and you can not withdraw ${amount}$ `;
        }else{
          accountsArray[i].currentBalance = accountsArray[i].currentBalance-amount;
          return `Mr/Mrs ${name} current balance: ${accountsArray[i].currentBalance}$ `;
        };
      };
    };
  },
  moneyTransfer: function(fromAccount,toAccount,transferAmount){
    for (i=0; i<accountsArray.length; i++){
      if (fromAccount === accountsArray[i].name){
        if (transferAmount > accountsArray[i].currentBalance) {
          return `${fromAccount} balance is ${accountsArray[i].currentBalance}$ and you can not withdraw ${transferAmount}$ `;
        }else{
          jsBank.moneyWithdraw(fromAccount,transferAmount);
          jsBank.moneyDeposite(toAccount,transferAmount);
          return `${transferAmount}$ transferred from Mr/Mrs ${fromAccount} to Mr/Mrs ${toAccount} `;
        };
      };
    };
  }
};

//JSBank - Second Way - Better Way

const JSBank = {
  bankArray: accountsArray,
  total: function(){
    let s=0;
    for (i=0; i<JSBank.bankArray.length; i++){
      s += JSBank.bankArray[i].currentBalance;
    }
    return `The sum of money in all accounts is ${s}$ `;
  },
  addAccount: function(accountName,balance){
    let newAccount = {};
    newAccount.name = accountName;
    newAccount.currentBalance = balance;
    JSBank.bankArray.push(newAccount)
    return `New account has been added by Mr/Mrs ${accountName}. The balance is: ${balance}$ `;
  },
  moneyDeposite: function(name,amount){
    for (i=0; i<JSBank.bankArray.length; i++){
      if (name === JSBank.bankArray[i].name){
        JSBank.bankArray[i].currentBalance = JSBank.bankArray[i].currentBalance+amount;
        return `Mr/Mrs ${name} current balance: ${JSBank.bankArray[i].currentBalance}$ `;
      };
    };
  },
  moneyWithdraw: function(name,amount){
    for (i=0; i<JSBank.bankArray.length; i++){
      if (name === JSBank.bankArray[i].name){
        if (amount > JSBank.bankArray[i].currentBalance) {
          return `Your balance is ${JSBank.bankArray[i].currentBalance}$ and you can not withdraw ${amount}$ `;
        }else{
          JSBank.bankArray[i].currentBalance = JSBank.bankArray[i].currentBalance-amount;
          return `Mr/Mrs ${name} current balance: ${JSBank.bankArray[i].currentBalance}$ `
        };
      };
    };
  },
  moneyTransfer: function(fromAccount,toAccount,transferAmount){
    for (i=0; i<JSBank.bankArray.length; i++){
      if (fromAccount === JSBank.bankArray[i].name){
        if (transferAmount > JSBank.bankArray[i].currentBalance) {
          return `${fromAccount} balance is ${JSBank.bankArray[i].currentBalance}$ and you can not withdraw ${transferAmount}$ `;
        }else{
          jsBank.moneyWithdraw(fromAccount,transferAmount);
          jsBank.moneyDeposite(toAccount,transferAmount);
          return `${transferAmount}$ transferred from Mr/Mrs ${fromAccount} to Mr/Mrs ${toAccount} `;
        };
      };
    };
  }
};
