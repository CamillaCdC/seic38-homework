# Calculator
# Explanation
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)

def show_menu
  puts "calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[d] - Division"
  puts "[m] - Multiplication"
  puts "[q] - Quit"
  print "Enter your choice"
end

show_menu
menu_choice = gets.chomp.downcase
# if menu_choice == "a"
# def add(a, b)
#   a + b
# end

# if menu_choice == "s"
# def subtract(a, b)
#   a - b
# end
#
# if menu_choice == "d"
# def divide(a, b)
#   a / b
# end
#
# if menu_choice == "m"
# def multiply(a, b)
#   a * b
# end

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts " ohh yeah"
  when 's'
    puts " ohh okay"
  when 'd'
    puts " i suck at division"
  when 'm'
    puts " buy a new calculator"
  else
    puts " Invalid selection"
  end
  menu_choice = gets.chomp.downcase

end

puts "thanks for using crappy calculator"
