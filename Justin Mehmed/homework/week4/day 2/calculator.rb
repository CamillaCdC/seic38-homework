def show_menu 
puts "calculator"
puts "-=-" * 40
puts "[+] - Addition (A + B)"
puts "-=-" * 15
puts "[-] - Subtraction (A - B)"
puts "-=-" * 15
puts "[*] - Multiplication (A x B)"
puts "-=-" * 15
puts "[/] - Division (A / b)"
puts "-=-" * 15
puts "[sq] - Square (A * A)"
puts "-=-" * 15
puts "[root]- Square root "
puts "-=-" * 15
puts "[q] - Quit"
end

show_menu 
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when '+'
        puts "Enter the first number"
        num1 = gets.chomp
        
        puts "Enter the second number"
        num2 = gets.chomp 

        answer = num1.to_f + num2.to_f

        puts "#{num1} + #{num2} = #{answer}"

    when '-'
        puts "Enter the first number"
        num1 = gets.chomp
        
        puts "Enter the second number"
        num2 = gets.chomp 

        answer = num1.to_f - num2.to_f

        puts "#{num1} - #{num2} = #{answer}"
    
    when '*'
        puts "Enter the first number"
        num1 = gets.chomp
        
        puts "Enter the second number"
        num2 = gets.chomp 

        answer = num1.to_f * num2.to_f

        puts "#{num1} * #{num2} = #{answer}"

    when '/'
        puts "Enter the first number"
        num1 = gets.chomp
        
        puts "Enter the second number"
        num2 = gets.chomp 

        answer = num1.to_f / num2.to_f

        puts "#{num1} / #{num2} = #{answer}"

    when 'sq'
        puts "what number do you want Squared?"
        num1 = gets.chomp.to_f
        
        
        puts "the square root of #{num1} is #{num1 * num1}"

    when 'root'
        puts "what number do you want the root of?"
        num1 = gets.chomp.to_f
        
        
        puts "the square root of #{num1} is #{ num1 **(1.0 / 2) }"
    

    else
        puts "invalid selection. You Idiot."
    end
    
    show_menu
    menu_choice = gets.chomp.downcase
end 

puts "thanks for using this calculator"

