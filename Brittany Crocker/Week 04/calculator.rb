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


# Menu
def show_menu
puts "Calculator" # You can use .center here to make it look nice.
puts "-=" * 40
puts "[a] - Addition"
# Add other options here
puts "[s] - Subtraction"
puts "[q] - Quit"
puts "[x] - Multiply"
puts "[d] - Divide"
puts "[ex] - Exponents"
puts "[sr] - Square root"
print "Enter your choice: "
end

# Addition
def addition(a=0, b=0)
  print "What is the first number?"
  a = gets.to_i
  print "What is the second number?"
  b = gets.to_i
  result =  a + b
  puts "Result: #{ result }"
end

# Subtraction
def subtraction(a=0, b=0)
  print "What is the first number?"
  a = gets.to_i
  print "What is the second number?"
  b = gets.to_i
  result =  a - b
  puts "Result: #{ result }"
end

# Multiplication
def multiply (a=0, b=0)
  print "What is the first number? "
  a = gets.to_i
  print "What is the second number? "
  b = gets.to_i
  result = a * b
  puts "Result: #{ result }"
end

# Division
def division (a=0, b=0)
  print "What is the first number? "
  a = gets.to_i
  print "What is the second number? "
  b = gets.to_i
  result = a / b
  puts "Result: #{ result }"
end

def exponent (a=0, b=0)
  print "What is the first number? "
  a = gets.to_i
  print "What is the second number? "
  b = gets.to_i
  result = a ** b
  puts "Result: #{ result }"
end

# Square root
def sq_root (a=0)
  print "What is the number? "
  a = gets.to_i
  result = Math.sqrt(a)
  puts "Result: #{ result }"
end

show_menu

menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    addition
  when 's'
    subtraction
  when 'x'
    multiply
  when 'd'
    division
  when 'ex'
    exponent
  when 'sr'
    sq_root
  else
    puts "Invalid selection"
end
  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using the crappy calculator!"

# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
