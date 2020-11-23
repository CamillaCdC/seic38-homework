# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#

Cost of home
$350,000
Deposit
$70,000
Fortnightly payment
$563
Interest rate † 2 years: 3.29%
Loan term 30 years
Loan amount required
$280,000
Interest paid over term $160,713
Fly Buys points earned in first year 1,008

def mortgage_calculation
  puts "-=" * 40
  puts "Mortgage Calculator".center(80)
  puts "-=" * 40 # El cheapo horizontal dividing line

print "What is your  "
  puts "[$home] - Cost of home"
  puts "[$dep] - Deposit"
  puts "[$fn] - Fornightly paymemt"
  puts "[$intr] - Interest rate"
  puts "[LT] - Loan term"
  puts "[$loan] - Loan amount required"
  puts "[$int_POT] - Interest paid over term"
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase
