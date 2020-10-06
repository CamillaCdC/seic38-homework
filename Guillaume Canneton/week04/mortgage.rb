def mortgage_calculator
  puts "-=" * 40
  print "Length of your mortgage (in years):"
  mortgage_length_in_years = gets.to_i
  print "Amount borrowed:"
  mortgage_amount = gets.to_i
  print "Enter the interest rate:"
  mortgage_rate_percent = gets.to_f

  mortgage_rate = mortgage_rate_percent / ( 12 * 100 )
  mortgage_length = mortgage_length_in_years * 12
  # monthly_payment = ( mortgage_rate * mortgage_amount * (( 1 + mortgage_rate) ** mortgage_length)) / ((( 1 + mortgage_rate) ** mortgage_length ) - 1)
  monthly_payment =  ( ( ( mortgage_rate * mortgage_amount ) / ( 1 - ( ( 1 + mortgage_rate ) ** ( -1 * mortgage_length ) ) ) ) * 100.0 ).round / 100.0


  puts " your monthly payment is AUD$ #{monthly_payment} per month"
end

mortgage_calculator
