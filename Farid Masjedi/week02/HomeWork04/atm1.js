// Checking if the person is has account in this bank or not.


let name='';
let currentSavings = 0;
let currentCheckings = 0;
let alertMessage = 'You do not have account in this bank.';

const isMember = function(){
  $('#page1 #submit').on('click', function (){
    let $inputVal = $('#page1 #username').val();
    for (i=0; i<jsBank.bankArray.length; i++){
      if ( $inputVal === jsBank.bankArray[i].name ) {
        name = jsBank.bankArray[i].name;
        currentSavings = jsBank.bankArray[i].savingsBalance;
        currentCheckings = jsBank.bankArray[i].checkingsBalance;
        alertMessage = `Welcome Back ${name}`;
        $('#page1').css('display','none');
        $('#page3 #checking-balance').text(currentCheckings);
        $('#page3 #savings-balance').text(currentSavings);
        $('#nav #logo').html(`Welcome back ${name}`).css({'font-size':'50px','padding':'1px 0 0 0','font-family': "'Anton', sans-serif"});
        $('#page3 nav').css('visibility','visible');
        $('#page3 #checking').show(4000);
        $('#page3 #savings').show(4000);

        break;
      }
    }
    alert(alertMessage);
    return name;
  });
}
isMember();



const makingDeposite = function (){
  $('#page3 #checking-deposit').on('click', function(){
    let amount = Number($(`#checking-amount`).val());
    let newCheckingsCurrent = jsBank.moneyDepositeCheckings(name,amount);
    $(`#checking-balance`).text(newCheckingsCurrent);
    if (newCheckingsCurrent > 0){
      $(`#checking-balance`).css({'background-color':'#E3E3E3','transition': 'all 1s'}).show('highlight')
    };
  });
  $('#page3 #savings-deposit').on('click', function(){
    let amount2 = Number($(`#savings-amount`).val());
    let newSavingsCurrent = jsBank.moneyDepositeSavings(name,amount2);
    $(`#savings-balance`).text(newSavingsCurrent);
    if (newSavingsCurrent === 0){
      $(`#savings-balance`).css({'background-color':'#E3E3E3','transition': 'all 1s'}).show('highlight')
    }
    if (newSavingsCurrent > 0){
      $(`#savings-balance`).css({'background-color':'#E3E3E3','transition': 'all 1s'}).show('highlight')
    };
  })
};

makingDeposite();


const makingWithdraw = function (){
  $('#page3 #checking-withdraw').on('click', function(){
    let amountt = Number($(`#checking-amount`).val());
    let newCheckingsCurrent = jsBank.moneyWithdrawOfCheckings(name,amountt);
    if (newCheckingsCurrent[2] === 0){
      $(`#checking-balance`).css({'background-color':'red','transition': 'all 3s'}).show('highlight')
    };
    $(`#checking-balance`).text(newCheckingsCurrent[2]);
    $(`#savings-balance`).text(newCheckingsCurrent[1]);
  });
  $('#page3 #savings-withdraw').on('click', function(){
    let amountt2 = Number($(`#savings-amount`).val());
    let newSavingsCurrent = jsBank.moneyWithdrawOfSavings(name,amountt2);
    if (newSavingsCurrent[1] === 0){
      $(`#savings-balance`).css({'background-color':'red','transition': 'all 3s'}).show('highlight')
    }
    $(`#checking-balance`).text(newSavingsCurrent[2]);
    $(`#savings-balance`).text(newSavingsCurrent[1]);
  })
};

makingWithdraw();

const transferAndTotal = function (){
  $('#transfer-report').on('click', function(){
    $('#savings , #checking').hide(1000);
    $('#report').slideDown(2000);
    $(`#total-balance`).html(jsBank.bankAccountDetails(name)[0])
    $(`#checking-report`).html(jsBank.bankAccountDetails(name)[2])
    $(`#savings-report`).html(jsBank.bankAccountDetails(name)[1])
  })
}
transferAndTotal();

const depositeAndWithdraw = function(){
  $('#deposit-withdraw').on('click', function(){
    $('#savings , #checking').show(1000);

    $('#report').hide(1000);
  })
}
depositeAndWithdraw();

const totalReport = function (){

}
