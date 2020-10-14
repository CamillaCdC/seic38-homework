# # Calculator
#
# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#
# ### Specification:
# - A user should be given a menu of operations //DONE
# - A user should be able to choose from the menu //DONE
# - A user should be able to enter numbers to perform the operation on //DONE
# - A user should be shown the result //DONE
# - This process should continue until the user selects a quit option from the menu //DONE
#
# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /) //DONE
#
# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)////DONE
#

def show_menu
  puts "-=" * 40
  puts "Calculator".center(80) # TODO : you can use .center here to make it look nice
  puts "-=" * 40 # El cheapo horizontal dividing line
  puts "[+] - Addition" # make addition or subtraction functions if you can
  # TODO : Add other options here
  puts "[-] - Subtraction"
  puts "[*] - Multiply"
  puts "[/] - Divide"
  puts "[**] - Exponents"
  puts "[sqrt] - Square root"
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when '+'
    puts "Enter first value: "
    num1 = gets.chomp.to_i
    puts "Enter second value: "
    num2 = gets.chomp.to_i
    sum=num1+num2
    puts "The sum is #{sum}"
  when '-'
    puts "Enter first value: "
    num1 = gets.chomp.to_i
    puts "Enter second value: "
    num2 = gets.chomp.to_i
    sum=num1-num2
    puts "The sum is #{sum}"
  when '*'
    puts "Enter first value: "
    num1 = gets.chomp.to_i
    puts "Enter second value: "
    num2 = gets.chomp.to_i
    sum=num1*num2
    puts "The sum is #{sum}"
  when '/'
    puts "Enter first value: "
    num1 = gets.chomp.to_i
    puts "Enter second value: "
    num2 = gets.chomp.to_i
    sum=num1/num2
    puts "The sum is #{sum}"
  when '**'
    puts "Enter first value: "
    num1 = gets.chomp.to_i
    puts "Enter second value: "
    num2 = gets.chomp.to_i
    sum=num1**num2
    puts "The sum is #{sum}"
  when 'sqrt'
    puts "Enter value: "
    val = gets.chomp.to_i
    sum = Math.sqrt(val)
    puts "The square root of #{val} is #{sum}"
  else
    puts "Invalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "You have quit."
