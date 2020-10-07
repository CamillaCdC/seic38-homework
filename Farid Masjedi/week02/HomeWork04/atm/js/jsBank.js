
// Making a fake bank array: every user has two accounts.

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




//jsBank - The object that contains all teh details and functions.
const jsBank = {

  bankArray: accountsArray,

  // This function will find the details of a person by name.
  bankAccountDetails: function(name){
    for (i=0; i<this.bankArray.length; i++){
      if (name === this.bankArray[i].name){
        let savings = this.bankArray[i].savingsBalance;
        let checking = this.bankArray[i].checkingsBalance;
        let totalAmount = savings + checking;
        return [totalAmount, savings ,checking];
      }
    }
  },

// This is Extra thing : it just works on the console, but i am gonna work on it later.
// To add account to the array.

  // addAccount: function(accountName,savingsBalance = 0,checkingsBalance = 0){
  //   let newAccount = {};
  //   newAccount.name = accountName;
  //   newAccount.savingsBalance = savingsBalance;
  //   newAccount.checkingsBalance = savingsBalance;
  //   this.bankArray.push(newAccount);
  //   let savingbalanceReport = `The savings balance is: ${savingsBalance}$.`;
  //   let checkingsbalanceReport = `The chekings balance is: ${checkingsBalance}$.`;
  //   let newAccountNameReport = `New account has been added by Mr/Mrs ${accountName}$.`;
  //   return `${newAccountNameReport}. ${savingbalanceReport} and ${checkingsbalanceReport}.`;
  // },

// To deposite money in an acoount.
// the 'toWhichAccount' is 'savnigsBalance' or 'checkingsBalance' of a person.
// In the atm.js, by usnig the default value or changing that, we can use which account we want to add money in.
  moneyDeposite: function(name, amount, toWhichAccount='savingsBalance'){
    for (i=0; i<this.bankArray.length; i++){
      if (name === this.bankArray[i].name){
        this.bankArray[i][toWhichAccount] += amount;
        return this.bankArray[i][toWhichAccount];
      };
    };
  },

// To Withdraw money from an account.
// the 'fromWhichAccount' is 'savnigsBalance' or 'checkingsBalance' of a person.
// In the atm.js, by usnig the default value or changing that, we can use which account we want to add money in.
  moneyWithdraw: function(name, amount, fromWhichAccount = 'savingsBalance'){
    let total = this.bankAccountDetails(name)[0];

    let secondAccount = 'checkingsBalance';
    if (fromWhichAccount === 'checkingsBalance'){
      secondAccount = 'savingsBalance';
    }

    for (i=0; i<this.bankArray.length; i++){
      if (name === this.bankArray[i].name){

        // if the amount that inputed as an argument is more than what the user has in both account.
        if (amount > total) {
          return  false;

        // if the amount is more than what the user has in one specific account, it -
        // is gonna make it zero, and will take the rest from the other one.
        } else if (amount > this.bankArray[i][fromWhichAccount]) {
          this.bankArray[i][secondAccount] = total - amount;
          this.bankArray[i][fromWhichAccount] = 0;
          return  [total - amount,0,total - amount];

        }else{

          //if the amount is less than the user has in the chosen account
          this.bankArray[i][fromWhichAccount] -= amount;
          totalBalanceReport = total - amount;
          let fromWhichBalance = this.bankArray[i][fromWhichAccount];
          let secondBalance = this.bankArray[i][secondAccount];
          return  [total - amount,fromWhichBalance,secondBalance];
        };
      };
    };
  },

  // Transferring money between two accounts.
  // the 'fromWhichAccount' is 'savnigsBalance' or 'checkingsBalance' of a person.
  // In the atm.js, by usnig the default value or changing that, we can use which account we want to add money in.
  moneyTransfer: function(name,transferAmount,fromWhichAccount = 'savingsBalance'){
    let secondAccount = 'checkingsBalance'
    if (fromWhichAccount === 'checkingsBalance'){
      secondAccount = 'savingsBalance';
    }

    for (i=0; i<this.bankArray.length; i++){
      if (name === this.bankArray[i].name){
        if (transferAmount > this.bankArray[i][fromWhichAccount]) {
          //if the amount is bigger than of the money in the specific account.
          return false;
        }else{

          // this gonna call the moneyWithdraw function , ad then use the moneyDeposite to transfer the money.
          let moneyWithdrawed = jsBank.moneyWithdraw(name,transferAmount,fromWhichAccount);
          let moneyWithdrawTransfer = moneyWithdrawed[1];
          let moneyDepositeTransfer = jsBank.moneyDeposite(name,transferAmount,secondAccount);
          return [moneyWithdrawTransfer,moneyDepositeTransfer];
        };
      };
    };
  }
};
