# Calculator

### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.

# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu

# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)

# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)



# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour



def show_menu 
    puts "calculator".center(100,'*')
    puts "-+= "* 25
    puts "[a] -- addition"
    puts "[s] -- subtration" 
    puts "[m] -- mutiplication"
    puts "[d] -- division"
    puts "[q] -- quit"
    print "please enter your choice "
end

# puts "please type the first number"    
# first_number = gets.to_i
# puts "please type the second number"    
# second_number = gets.to_i

#  functions 
def addition (a, b)
    a + b
end

def subtration (a, b)
    a - b
end

def mutiplication (a, b)
    a * b
end

def division (a, b)
    a / b
end

# show_menu
menu_choice = "";

 until menu_choice == "q"
    show_menu
    menu_choice = gets[0].chomp.downcase 

    case menu_choice
    when "a"
        puts "please type the first number"    
        first_number = gets.to_i
        puts "please type the second number"    
        second_number = gets.to_i
        result = addition(first_number, second_number)
        puts "the result is #{ result }"
        
    when "s"
        puts "please type the first number"    
        first_number = gets.to_i
        puts "please type the second number"    
        second_number = gets.to_i   
        result = subtration(first_number, second_number)
        puts "the result is #{ result }"
        
    when "m"
        puts "please type the first number"    
        first_number = gets.to_i
        puts "please type the second number"    
        second_number = gets.to_i
        result = mutiplication(first_number, second_number)
        puts "the result is #{ result }"
        
    when "d"
        puts "please type the first number"    
        first_number = gets.to_i
        puts "please type the second number"    
        second_number = gets.to_i
        result = division(first_number, second_number)
        puts "the result is #{ result }"
        
    else 
        puts "Invilid selection"    
    end
end

puts "Thanks for playing!"



