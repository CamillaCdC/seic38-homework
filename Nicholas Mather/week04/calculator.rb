# # Calculator
#
# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#
# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu
#
# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)
#
# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)
#
#
#
# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour

#function for the menu
def show_menu
 puts "Calculator".center(75) # TODO .center to look nice
 puts "-=" * 40 # el cheapo dividing line
 puts "[a] - Addition"
 # TODO add options here
 puts "[s] - Subtraction"
 puts "[m] - Multiplication"
 puts "[d] - Division"
 puts "[e] - Exponents"
 puts "[r] - Roots"
 puts "[l] - Loan repayment"
 puts "[q] - Quit"
 print "Enter your choice: "
end

#function for addition
def add()
  print "What is the first number you would like to add? "
  num_1 = gets.to_i
  print "What would you like to add #{num_1} to? "
  num_2 = gets.to_i
  puts "#{num_1} plus #{num_2} is #{num_1 + num_2}"
end

#function for subtraction
def subtract()
  print "What is the number you would like to subtract from? "
  num_1 = gets.to_i
  print "What would you like to subtract from #{num_1}? "
  num_2 = gets.to_i
  puts "#{num_1} minus #{num_2} is #{num_1 - num_2}"
end

#function for multiplication
def multiply()
  print "What is the first number you would like to multiply "
  num_1 = gets.to_i
  print "What would you like to multiply #{num_1} by? "
  num_2 = gets.to_i
  puts "#{num_1} times #{num_2} is #{num_1 * num_2}"
end

#function for division
def divide()
  print "What is the first number you would like to divide "
  num_1 = gets.to_i
  print "What would you like to divide #{num_1} by? "
  num_2 = gets.to_i
  puts "#{num_1} divided by #{num_2} is #{num_1 / num_2}"
end

#function for Exponents
def exponent()
  print "What is the base number? "
  num_1 = gets.to_i
  print "#{num_1} to what power? "
  num_2 = gets.to_i
  puts "#{num_1} to the power of #{num_2} is #{num_1 ** num_2}"
end

#function for Roots
def root()
  print "What number would you like to find the root of? "
  num_1 = gets.to_i
  print "What root of #{num_1} would you like to find? "
  num_2 = gets.to_i
  if num_2 == 2
    puts "The square root of #{num_1} is #{Math.sqrt(num_1)}"
  elsif num_2 == 3
    puts "The cube root of #{num_1} is #{Math.cbrt(num_1)}"
  else
    puts "#{num_2}th root of #{num_1} is #{num_1 ** (1.0/num_2.to_f)} "
  end
end

#function for loan repayments
def loan()
  print "What is the principal, less deposit? "
  p = gets.to_i
  print "What is the annual interest rate, in percent? "
  r = gets.to_f / 100
  r = r / 12
  print "What is the term of the loan, in years? "
  n = 12 * gets.to_i
  a = p * ( r * ( 1 + r ) ** n ) / ( ( 1 + r ) ** n - 1 )
  puts "The monthly payment required is #{a.round(2)}"
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    add()
  when 's'
    subtract()
  when 'm'
    multiply()
  when 'd'
    divide()
  when 'e'
    exponent()
  when 'r'
    root()
  when 'l'
    loan()
  else
    puts "Bonk! Invalid suggestion."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using Crapulator!"
