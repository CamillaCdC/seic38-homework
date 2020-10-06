
$( document ).ready( function() { //when the document is ready, start the function.

  // 1. Keep track of the checking and savings balances somewhere.

  let balance = 0; // show balance above all functions. Used 'let' because it will enable the balance to change.

  let input = $( '#checking-amount' ).val(); // let input variable be checking amount value.

  // 2. Add functionality so that a user can deposit money into one of the bank accounts. Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.

  // function #1 : deposit to check account.
  $( '#checking-deposit' ).on( 'click', function(){ // get checking deposit. When 'clicked', run function below.
    let input = $( '#checking-amount' ).val();
    balance += parseInt(input); // additional assignment for adding a deposit.
    $( '#checking-balance' ).text( '$' + balance ); // "call checking balance ID and overwrite text with the input value"
    console.log( balance ); // "show the input value"
    // new variable for current balance after input value is made.
  });

  // 3.Add functionality so that a user can withdraw money from one of the bank accounts. Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction. - if / else statements

  // function #2 : withdraw money from check account.
  $('#checking-withdraw').on('click', function() { // get checking withdraw ID, and once clicked, run function below
    let input = $( '#checking-amount' ).val();
    if ( input <= balance ) {
      balance -= parseInt( input ); // subtraction assignment for withdrawal value
      $( '#checking-balance' ).text( '$' + balance );
      console.log( balance );
    } else if ( input >= balance ) {
      $( '#checking-balance' ).text( '$' + balance );
      console.log( balance );
    }
  });

  // function #1 : deposit to savings account.
  $( '#savings-deposit' ).on( 'click', function(){
    let input = $( '#savings-amount' ).val();
    balance += parseInt(input);
    $( '#savings-balance' ).text( '$' + balance );
    console.log( balance );
  });

  // function #2 : withdraw money from savings account.
  $('#savings-withdraw').on('click', function() {
    let input = $( '#savings-amount' ).val();
    if ( input <= balance ) {
      balance -= parseInt( input );
      $( '#savings-balance' ).text( '$' + balance );
      console.log( balance );
    } else if ( input >= balance ) {
      $( '#savings-balance' ).text( '$' + balance );
      console.log( balance );
    }
  });

});



//When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account. **ADD CSS FROM JQUERIE**


//------------------ Joel's demo - code along -------------------//

$(document).ready(function() {

  $('#checking-deposit').on('click', function () {
    //get the deposit amount
    const deposit = + $('#checking-amount').val(); //remove the $
    // const deposit = Number( $('#checking-amount').val() ); one way of turning a string into a number.
    // const deposit = + $('#checking-amount').val(); the '+' sign turns any numner or string to a positive number.
    // const deposit = $('#checking-amount').val().slice(1); .slice will eliminate the first letter/word/number on the string. eg. $0 === 0.

    console.log( deposit );
    // get the current balance
    const currentBalance = + $('#checking-balance').text().slice(1); // remove the $
    //.slice will eliminate the first letter/word/number on the string. eg. $0 === 0.

    console.log( currentBalance );
    // newBalance = depositAmount + currentBalance;
    const newBalance = deposit + currentBalance;
    console.log( newBalance );
    //update the balance on screen
    $('#checking-balance').text('$' + newBalance );
  }); // copy and paste the same for savings deposit.


  // withdraw function
  $('#checking-withdraw').on('click', function () {
    // get amount
    const deposit = + $('#checking-amount').val();
    //get the current balance
    const currentBalance = + $('#checking-balance').text().slice(1);
    // new balance = currentbalance - amount
    const newBalance =currentBalance - amount;
    //update on screen
    $('#checking-balance').text('$' + newBalance );
  });


  // function to prevent the amount go negative
  $('#checking-withdraw').on('click', function () {
    const deposit = + $('#checking-amount').val();
    const currentBalance = + $('#checking-balance').text().slice(1);
    const newBalance =currentBalance - amount;
    if ( newBalance >= 0) { //
      $('#checking-balance').text('$' + newBalance );
    }
  });


  // function to link accounts to withdraw from both accounts
  $('#checking-withdraw').on('click', function () {
    const deposit = + $('#checking-amount').val();
    const currentBalance = + $('#checking-balance').text().slice(1);

    const otherBalance = +$('#savings-balance').text().slice(1); //remove the $
    const totalBalance = currentBalance + otherBalance;

    const newBalance =currentBalance - amount;
    if ( newBalance >= 0) { //
      $('#checking-balance').text('$' + newBalance );
    } else if ( amount <= totalBalance ){
      // drain this accounts
      $('#checking-balance').text('$0');
      // subtract the remainder fro the other accounts
      //here, newBalance is the negative amount that didnt exist in this account
      $('#saving-balance').text('$' + (otherBalance + newBalance));
    }
  }); // copy and paste for savings account - reverse account names


  // change the background to color red once the balance is 0 and grey when the balance is positive.
  // at the very start before the document ready, add a function that keeps the background color red when balance is 0 - this is a global scope to check if the function works.
  // add the function ie checkForZero() in the document ready function make it active within the web page.
  const checkForZero = function () {
    const checkingBalance = +$('#checkingBalance').text().slice(1);
    if (checkingBalance <= 0) {
      $('#checking-balance').addClass('zero)');
    }
    const savingsBalance = +$('#savingsBalance').text().slice(1);
    if (checkingBalance <= 0) {
      $('#savings-balance').addClass('zero)');
    }
  };



  // ------------- Joel's demo - code along #2 -------------//

  // make another js file and add the script to the HTML

  // Our account object is solely responsible for rules concerning interacting.
  // with bank accounts.

  // It is the single source of truth for current balances.

  // it knows how to do overdraft protections.

  // This code has NEVER heard of the DOM.

  const account = {
    checkingBalance: 0,
    saavingsBalance: 0,

    total: function () {
      return this.checkingBalance + this.savingsBalance;
    },

    checkingDeposit: function (amount) {
      this.checkingBalance += Number(amount);
    },

    checkingWithdraw: function (amount) {
      amount = Number(amount);
      // if theres enough in this accounts
      // checkingBalance -= amount
      if (amount <= this.checkingBalance) {
        this.checkingBalance -= amount;
        // else if theres enough in both accounts
      } else if ( amount <= this.total()) {
        const difference = amount - this.checkingBalance;
        // zero this accounts
        this.checkingBalance = 0;
        // take the remainder from the other account
        this.savingsBalance -= difference;
      }
    },

    savingsDeposit: function (amount) {
      this.savingsBalance += Number(amount);
    },

    savingsWithdraw: function (amount) {
      amount = Number(amount);
      if (amount <= this.savingsBalance) {
        this.savingsBalance -= amount;
      } else if (amount <= this.total()) {
        const difference = amount - this.savingsBalance;
        this.savingsBalance = 0;
        this.checkingBalance -= difference;
      }
    }

  }


  // move in to the original JS file and write a jquery function code that calls the second js file code.

  // This code knows nothing of negative balances or overdraft protection.

  // It simply connects DOM elements to logival.business function defined elsewhere

  // this file will have lots of event handler.s

  // our handy render () function updates every single part of the DOM with the latest values from our accounts object.

  const render = function () {
    $('#checking-balance').text('$' + account.checkingBalance);
    $('#savings-balance').text('$' + account.savingsBalance);

    $('.zero').removeClass('zero');

    if (account.checkingBalance <= 0) {
      $('#checking-balance').addClass('zero');
    }

    if (account.savingsBalance <= 0) {
      $('#savings-balance').addClass('zero');
    }
  };

  $(document).ready( function()){
    render();

    $('#checking-deposit').on('click', function() {
      const amount = $('#checking-amount').val();
      accounts.checkingDeposit( amount);
      render();
    });

    $('#checking-withdraw').on ('click', function () {
      const amount = $('#checking-amount').val();
      accounts.checkingWithdraw(amount);
      render();
    });

    $('#savings-deposit').on('click', function() {
      const amount = $('#savings-amount').val();
      accounts.savingsDeposit( amount);
      render();
    });

    $('#savings-withdraw').on('click', function () {
      const amount = $('#savings-amount').val();
      accounts.savingsWithdraw(amount);
      render();
    });

  });

});
