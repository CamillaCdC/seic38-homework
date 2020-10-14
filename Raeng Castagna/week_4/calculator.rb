# https://gist.github.com/wofockham/2752aa06121df7f3024c

# A user should be given a menu of operations
def show_menu
    puts "Calculator".center(40, "-") 
    puts "-=" * 40
    puts "[a] - Addition"
    puts "[b] - Subtraction"
    puts "[c] - Multipliction"
    puts "[d] - Division"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

# A user should be able to choose from the menu
until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "+"
    when 'b'
        puts "-"
    when 'c'
        puts "*"
    when 'd'
        puts "/"
    else
        puts "Invalid selection. You idiot."
    end

# A user should be able to enter numbers to perform the operation on
    print "Enter the first number: "
    first_number = gets.to_i
    print "Enter the second number: "
    second_number = gets.to_i

# A user should be shown the result
# Calculator should be able to do basic arithmetic (+,-, *, /)
    if menu_choice == "a"
        puts first_number + second_number
    elsif menu_choice == 'b'
        puts first_number - second_number
    elsif menu_choice == 'c'
        puts first_number * second_number
    elsif menu_choice == 'd'
        puts first_number / second_number
    end

# This process should continue until the user selects a quit option from the menu
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator!"