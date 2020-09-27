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

const accountsArray = [ {name: "Bastian", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Farid", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Giti", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Guillaume", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Henry", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Hugo", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Jasper", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Justin", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Michelle", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Mike", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Naveen", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Nicholas", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Raeng", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Robert", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Ryan", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Sarah", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Stacey", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "William", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Brittany", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Camilla", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()},
                        {name: "Michael", savingsBalance:randomBalanceMaker(),checkingsBalance:randomBalanceMaker()}];

//JSBank - First Way

const jsBank = {
  bankArray: accountsArray,

  totalBalance: function(name){
    for ( i of this.bankArray.valueOf() ) {
      if ( i.name === name ){
        return i.savingsBalance + i.checkingsBalance;
      }
    }
  },

  bankAccountDetails: function(name){
    let totalAmount = this.totalBalance(name);

    for (i=0; i<this.bankArray.length; i++){
      if (name === this.bankArray[i].name){
        return [totalAmount, this.bankArray[i].savingsBalance,this.bankArray[i].checkingsBalance];
      }
    }
  },


  addAccount: function(accountName,savingsBalance = 0,checkingsBalance = 0){
    let newAccount = {};
    newAccount.name = accountName;
    newAccount.savingsBalance = savingsBalance;
    newAccount.checkingsBalance = savingsBalance;
    this.bankArray.push(newAccount);
    let savingbalanceReport = `The savings balance is: ${savingsBalance}$.`;
    let checkingsbalanceReport = `The chekings balance is: ${checkingsBalance}$.`;
    let newAccountNameReport = `New account has been added by Mr/Mrs ${accountName}$.`;
    return `${newAccountNameReport}. ${savingbalanceReport} and ${checkingsbalanceReport}.`;
  },
  moneyDepositeSavings: function(name,amount){
    for (i=0; i<this.bankArray.length; i++){
      if (name === this.bankArray[i].name){
        this.bankArray[i].savingsBalance = this.bankArray[i].savingsBalance + amount;
        return this.bankArray[i].savingsBalance;
      };
    };
  },
  moneyDepositeCheckings: function(name,amount){
    for (i=0; i<this.bankArray.length; i++){
      if (name === this.bankArray[i].name){
        this.bankArray[i].checkingsBalance = this.bankArray[i].checkingsBalance + amount;
        return this.bankArray[i].checkingsBalance;
      };
    };
  },
  moneyWithdrawOfSavings: function(name,amount){
    let total = this.totalBalance(name);
    let totalBalanceReport = 0;
    let savingsBalanceReport = 0;
    let checkingsBalanceReport = 0;

    for (i=0; i<this.bankArray.length; i++){
      if (name === this.bankArray[i].name){
        if (amount > total) {
          return  false;//`Your total balance is ${total}$ and you can not withdraw ${amount}$. `;
        } else if (amount > this.bankArray[i].savingsBalance) {
          this.bankArray[i].checkingsBalance = total - amount;
          this.bankArray[i].savingsBalance = 0;
          totalBalanceReport = total - amount;
          savingsBalanceReport = 0 ;
          checkingsBalanceReport = this.bankArray[i].checkingsBalance;
          return  [totalBalanceReport,savingsBalanceReport,checkingsBalanceReport];
        }else{

          this.bankArray[i].savingsBalance = this.bankArray[i].savingsBalance - amount;
          totalBalanceReport = total - amount;
          savingsBalanceReport = this.bankArray[i].savingsBalance;
          checkingsBalanceReport = this.bankArray[i].checkingsBalance;
          return  [totalBalanceReport,savingsBalanceReport,checkingsBalanceReport];
        };
      };
    };
  },
  moneyWithdrawOfCheckings: function(name,amount){


    let total = this.totalBalance(name);
    let totalBalanceReport = 0;
    let savingsBalanceReport = 0;
    let checkingsBalanceReport = 0;

    for (i=0; i<this.bankArray.length; i++){
      if (name === this.bankArray[i].name){
        if (amount > total) {

          return false;//`Your total balance is ${total}$ and you can not withdraw ${amount}$. `;
        } else if (amount > this.bankArray[i].checkingsBalance) {

          this.bankArray[i].savingsBalance = total - amount;

          this.bankArray[i].checkingsBalance = 0;

          totalBalanceReport = total - amount;
          savingsBalanceReport = this.bankArray[i].savingsBalance;
          checkingsBalanceReport = 0;

          return  [totalBalanceReport,savingsBalanceReport,checkingsBalanceReport];
        }else{

          this.bankArray[i].checkingsBalance = this.bankArray[i].checkingsBalance - amount;
          totalBalanceReport = total - amount;
          savingsBalanceReport = this.bankArray[i].savingsBalance;
          checkingsBalanceReport = this.bankArray[i].checkingsBalance;

          return  [totalBalanceReport,savingsBalanceReport,checkingsBalanceReport];
        };
      };
    };
  },
  moneyTransfer: function(name,transferAmount,fromWhichAcoount = 'savingsBalance'){
    for (i=0; i<this.bankArray.length; i++){
      if (name === this.bankArray[i].name){
        if (transferAmount > this.bankArray[i][fromWhichAcoount]) {
          return false;
        }else{
          jsBank.moneyWithdraw(name,transferAmount);
          jsBank.moneyDeposite(name,transferAmount);
          return `${transferAmount}$ transferred from Mr/Mrs ${fromAccount} to Mr/Mrs ${toAccount} `;
        };
      };
    };
  }
};

//JSBank - Second Way - Better Way

// const JSBank = {
//   bankArray: accountsArray,
//   total: function(){
//     let s=0;
//     for (i=0; i<JSBank.bankArray.length; i++){
//       s += JSBank.bankArray[i].currentBalance;
//     }
//     return `The sum of money in all accounts is ${s}$ `;
//   },
//   addAccount: function(accountName,balance){
//     let newAccount = {};
//     newAccount.name = accountName;
//     newAccount.currentBalance = balance;
//     JSBank.bankArray.push(newAccount)
//     return `New account has been added by Mr/Mrs ${accountName}. The balance is: ${balance}$ `;
//   },
//   moneyDeposite: function(name,amount){
//     for (i=0; i<JSBank.bankArray.length; i++){
//       if (name === JSBank.bankArray[i].name){
//         JSBank.bankArray[i].currentBalance = JSBank.bankArray[i].currentBalance+amount;
//         return `Mr/Mrs ${name} current balance: ${JSBank.bankArray[i].currentBalance}$ `;
//       };
//     };
//   },
//   moneyWithdraw: function(name,amount){
//     for (i=0; i<JSBank.bankArray.length; i++){
//       if (name === JSBank.bankArray[i].name){
//         if (amount > JSBank.bankArray[i].currentBalance) {
//           return `Your balance is ${JSBank.bankArray[i].currentBalance}$ and you can not withdraw ${amount}$ `;
//         }else{
//           JSBank.bankArray[i].currentBalance = JSBank.bankArray[i].currentBalance-amount;
//           return `Mr/Mrs ${name} current balance: ${JSBank.bankArray[i].currentBalance}$ `
//         };
//       };
//     };
//   },
//   moneyTransfer: function(fromAccount,toAccount,transferAmount){
//     for (i=0; i<JSBank.bankArray.length; i++){
//       if (fromAccount === JSBank.bankArray[i].name){
//         if (transferAmount > JSBank.bankArray[i].currentBalance) {
//           return `${fromAccount} balance is ${JSBank.bankArray[i].currentBalance}$ and you can not withdraw ${transferAmount}$ `;
//         }else{
//           jsBank.moneyWithdraw(fromAccount,transferAmount);
//           jsBank.moneyDeposite(toAccount,transferAmount);
//           return `${transferAmount}$ transferred from Mr/Mrs ${fromAccount} to Mr/Mrs ${toAccount} `;
//         };
//       };
//     };
//   }
// };
