$(document).ready(function(){

        $checkingBalance = 0;
        $savingsBalance = 0;

        //color function for checking
        const checkingColor = function (){
        if ($checkingBalance <= 0){
            $(`#checking-balance`).css({backgroundColor: 'red'});
         } else {
              $(`#checking-balance`).css({backgroundColor: 'grey'});
         };
       };
           // calls the colour for > 0 and < 0
          checkingColor($checkingBalance);

           //color function for savings
           const savingsColor = function (){
         if ($savingsBalance <= 0 ){
             $(`#savings-balance`).css({backgroundColor: 'red'});

          } else {
               $(`#savings-balance`).css({backgroundColor: 'grey'});
          };
        };
           // calls the colour for > 0 and < 0
          savingsColor($savingsBalance);



          $('#checking-deposit').on('click', function(){

            let $input = $('#checking-amount').val(); //adds to checking
            $checkingBalance += parseInt($input);
            $('#checking-balance').html(`$${$checkingBalance}`);


            checkingColor($checkingBalance);
        });


        $('#checking-withdraw').on('click', function(){
          let $input = $('#checking-amount').val();

              checkingColor($checkingBalance);

          if (($checkingBalance - parseInt($input)) >= 0 ){     // subtracts from checking
                $checkingBalance -= parseInt($input);
                $('#checking-balance').html(`$${$checkingBalance}`);

          } else {
                  if ($savingsBalance - parseInt($input) >= -1){  //subtracts from savings if checking is 0
                        $savingsBalance -= parseInt($input);
                        $('#savings-balance').html(`$${$savingsBalance}`);
                  }
            }

            });



          $('#savings-deposit').on('click', function(){

           let $savingsInput = $('#savings-amount').val();
           $savingsBalance = $savingsBalance + parseInt($savingsInput);   //adds to savings
           $('#savings-balance').html(`$${$savingsBalance}`);

           savingsColor($savingsBalance);
        });



       $('#savings-withdraw').on('click', function(){

         let $savingsInput = $('#savings-amount').val();

          savingsColor($savingsBalance);

        if (($savingsBalance - parseInt($savingsInput)) >= 0 ){  //subtracts from checking
              $savingsBalance -= parseInt($savingsInput);
              $('#savings-balance').html(`$${$savingsBalance}`);
        } else {

            if ($checkingBalance - parseInt($savingsInput) >= -1){  //subtracts from checking if savings is 0
              $checkingBalance -= parseInt($savingsInput);
              $('#checking-balance').html(`$${$checkingBalance}`);
            }
        }
      });

});
