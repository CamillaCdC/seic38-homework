$(document).ready(function (){
    
    // $('checking-amount').on('keyup' ,function (){
    //     const input = $('chicking-amount').val();
    //     $('checking-balance').text(input);
    //     console.log(input);
    // });
    // const addAmount = function () {
    //     let total = 0;
    //     const input = $('#checking-amount').val();
    //     total += parseInt(input);
    //     // $('#checking-balance').text(total);
    //     return total;
    // }


   
    const inputAmount = $('#checking-deposit').on('click',function(){  
        let total = 0;
        const input = $('#checking-amount').val();
        total += parseInt(input);
        $('#checking-balance').text(total);
        return total;
    });

    const totalChecking = function (inputAmount){
        let total = 0;
        total += inputAmount;
        return total;
    }
    $('#checking-balance').text(totalChecking);



});

// * Keep track of the checking and savings balances somewhere


// * Add functionality so that a user can deposit money into one of the bank accounts.
// const depositValue = function (num) {
//     let total = 0;
//     total += num;
//     return total;
// }
// depositValue(34);





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
