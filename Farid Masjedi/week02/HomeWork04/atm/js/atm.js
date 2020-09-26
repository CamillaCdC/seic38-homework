$(document).ready( function(){
  // This js contain the jQuery commands to show the results on the website.

  // First: the user is going to give his/her name and we need it for all -
  // functions in this js and jsBank.
  let name = '';

  // This alert message is for is a user gave wrong username.
  let alertMessage = 'You do not have account in this bank.';

  // This function makes the button works with click or enter-Key.
  // works on page 1 and page 2, Transfer and Report tab.
  // the Deposit and Withdraw tab needs the user to click on the buttons.
  const enterAndClick = function (a,b){
    a.on("keyup", function(event) {
      if (event.keyCode === 13) {
       event.preventDefault();
       b.click();
      }});
  }

  enterAndClick($('#page1 #username'),$("#page1 #submit"));
  enterAndClick($('#report #checking-transfer'),$('#report #checking-transfer-button'));
  enterAndClick($('#report #savings-transfer'),$('#report #savings-transfer-button'));

  // Second: this function is checking if a user has account in the bank or not.
  // * : users are the name of the
  const isMember = function(){
    $('#page1 #submit').on('click', function (){
      let inputVal = $('#page1 #username').val(); //This gonna take the inputed name.
      $inputVal = inputVal.charAt(0).toUpperCase() + inputVal.slice(1); // First letter to be capital.(Like the names in jsBank)

      for (i=0; i<jsBank.bankArray.length; i++){ // Find the name in the jsBank.
        if ( $inputVal === jsBank.bankArray[i].name ) {
          name = $inputVal;
          let currentSavings = jsBank.bankAccountDetails(name)[1]; // use bankAccountDetails to get the user data
          let currentCheckings = jsBank.bankAccountDetails(name)[2];

          alertMessage = `Welcome Back ${name}`; // If the person has account, gonna alert welcome.
          $('#page1').css('display','none'); // Make the first page to be disappeard.

          // round the data up to 2 numbers : exp. 23.567777 ->23.57
          $('#page2 #checking-balance').text(currentCheckings.toFixed(2));
          $('#page2 #savings-balance').text(currentSavings.toFixed(2));

          // This gonna change the css of the first page to the next page
          $('#nav #logo').html(`Welcome back ${name}`).addClass('into-next-page')
          $('#page2 nav').css('visibility','visible'); // Show the nexy page.
          $('#page2 #checking').show(2000);
          $('#page2 #savings').show(2000);
          break;
        }
      }
      alert(alertMessage); // if the inputed name is not exist.
      // return name;
    });
  }
  isMember();


  // for depositing money in the page2.
  const makingDeposite = function (){
    // for the checking account
    $('#page2 #checking-deposit').on('click', function(){
      let amount = Number($(`#checking-amount`).val()); // it is gonna take the amount that inputed
      let newCheckingsCurrent = jsBank.moneyDeposite(name,amount,'checkingsBalance'); // jsBank.moneyDeposite :function in jsBank.js
      $(`#checking-balance`).text(Math.round(newCheckingsCurrent*100)/100);
      // make the background to be noram, if an account with zero take any deposite.
      if (newCheckingsCurrent > 0){
        $(`#checking-balance`).css({'background-color':'#E3E3E3',
                                    'transition': 'all 1s'})
                                    .show('highlight')};
    });

    // for the savings account
    $('#page2 #savings-deposit').on('click', function(){
      let amount2 = Number($(`#savings-amount`).val());
      let newSavingsCurrent = jsBank.moneyDeposite(name,amount2);
      $(`#savings-balance`).text(Math.round(newSavingsCurrent*100)/100);
      if (newSavingsCurrent > 0){
        $(`#savings-balance`).css({'background-color':'#E3E3E3',
                                   'transition': 'all 1s'})
                                   .show('highlight')};
    })
  };
  makingDeposite();



  // Withdrawing

  // This message is going to be saved in div.clear.
  // If the withdraw or transfer amount that inputed is bigger that the -
  // balance, it is gonna be visible.
  $(`.clear`).html(`<p>This transaction is not accepted.</p>`);
  let $message = $(`.clear`)

  const makingWithdraw = function (){
    // withdraw of checking
    $('#page2 #checking-withdraw').on('click', function(){
      let amount = Number($(`#checking-amount`).val());
      let newAmount = jsBank.moneyWithdraw(name,amount,'checkingsBalance'); // jsBank.moneyWithdraw: function in jsBank
      // if the amount for withdrawing is more than total balance of two account, the message gonna show up for 2 secons.
      if (!newAmount){
        $(`.clear`).show();
        setTimeout(function(){
            $message.hide();
          }, 2000);

      }else{
        // if the amount becomes to 0, the background gonna be red.
        if (newAmount[1] === 0){
          $(`#checking-balance`).css({'background-color':'red',
                                      'transition': 'all 3s'})
                                      .show('highlight')};

          $(`#checking-balance`).text(Math.round(newAmount[1]*100)/100);
          $(`#savings-balance`).text(Math.round(newAmount[2]*100)/100);
      }
    });
    // Withdraw of savings
    $('#page2 #savings-withdraw').on('click', function(){
      let amount2 = Number($(`#savings-amount`).val());
      let newAmount2 = jsBank.moneyWithdraw(name,amount2);

      if (!newAmount2){
        $(`.clear`).show();
        setTimeout(function(){
            $message.hide();
          }, 2000);

      }else{
        if (newAmount2[1] === 0){
          $(`#savings-balance`).css({'background-color':'red',
                                     'transition': 'all 3s'})
                                     .show('highlight')};

          $(`#checking-balance`).text(Math.round(newAmount2[2]*100)/100);
          $(`#savings-balance`).text(Math.round(newAmount2[1]*100)/100);
      }
    });
  };
  makingWithdraw();


  // page2 has two tabs. the transfer and total gonna be visible if an event happen.
  // at this tab you can transfer money between your accounts.
  const transferAndTotal = function (){
    $('#transfer-report').on('click', function(){
      $('#savings , #checking').hide(1000); // hide the first tab
      $('#report').slideDown(2000);
      let accoundDetails = jsBank.bankAccountDetails(name); // take the detailes
      $(`#total-balance`).html(Math.round(accoundDetails[0]*100)/100);
      $(`#checking-report`).html(Math.round(accoundDetails[2]*100)/100);
      $(`#savings-report`).html(Math.round(accoundDetails[1]*100)/100);
    })
  }
  transferAndTotal();

  // page2 deposite and withdraw tab : if want to back.
  // at this tab, you can deposite or withdraw money.
  const depositeAndWithdraw = function(){
    $('#deposit-withdraw').on('click', function(){
      $('#savings , #checking').show(1000);
      $('#report').hide(1000);
    })
  }
  depositeAndWithdraw();

  // This belongs to the second tab : transfer and total.
  // this make the user to transfer money between their accounts.
  const moneyTransferBetweenAccounts = function (){
    // transfer button on checking account to give money to saving account.
    $(`#checking-transfer-button`).on('click', function(){
      let amount = Number($(`#checking-transfer`).val());
      let amountTransferred = jsBank.moneyTransfer(name,amount,'checkingsBalance'); //jsBank.moneyTransfer : function in jsBank.

      if (!amountTransferred) {
        $(`.clear`).show();
        setTimeout(function(){
            $(`.clear`).hide();
          }, 2000);
      }else{
        let details = jsBank.bankAccountDetails(name);
        let currentSavings = details[1]
        let currentCheckings = details[2];

        $('#checking-report').html(Math.round(amountTransferred[0]*100)/100);
        $('#savings-report').html(Math.round(amountTransferred[1]*100)/100);
        $('#page2 #checking-balance').text(Math.round(currentCheckings*100)/100);
        $('#page2 #savings-balance').text(Math.round(currentSavings*100)/100);
        if (Math.round(currentCheckings) === 0) {
          $('#page2 #checking-balance').css({'background-color':'red',
                                     'transition': 'all 1s'})
                                     .show('highlight')};


        if (Math.round(currentSavings) > 0) {
          $('#page2 #savings-balance').css({'background-color':'#E3E3E3',
                                      'transition': 'all 3s'})
                                      .show('highlight')};
      }
    });
    // transfer button on savings account to give money to checking account.
    $(`#savings-transfer-button`).on('click', function(){
      let amount = Number($(`#savings-transfer`).val());
      let amountTransferred = jsBank.moneyTransfer(name,amount);

      if (!amountTransferred) {
        $(`.clear`).show();
        setTimeout(function(){
            $(`.clear`).hide();
          }, 2000);
      }else{
        let details = jsBank.bankAccountDetails(name);
        let currentSavings = details[1]
        let currentCheckings = details[2];

        $('#checking-report').html(Math.round(amountTransferred[1]*100)/100);
        $('#savings-report').html(Math.round(amountTransferred[0]*100)/100);
        $('#page2 #checking-balance').text(Math.round(currentCheckings*100)/100);
        $('#page2 #savings-balance').text(Math.round(currentSavings*100)/100);

        if (Math.round(currentCheckings) > 0) {
          $('#page2 #checking-balance').css({'background-color':'#E3E3E3',
                                     'transition': 'all 1s'})
                                     .show('highlight')};


        if (Math.round(currentSavings) === 0) {
          $('#page2 #savings-balance').css({'background-color':'red',
                                      'transition': 'all 3s'})
                                      .show('highlight')};

      }
    });
  }
  moneyTransferBetweenAccounts();

})
