def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] Addition"
  puts "[s] Subtraction"
  puts "[m] Multiplication"
  puts "[d] Division"
  puts "[e] Exponent"
  puts "[sqr] Square root"
  puts "[q] Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase
until menu_choice == "q"
  case menu_choice
  when "a"
    print "Enter a number: "
    a = gets.to_i
    print "Enter the number to add: "
    b = gets.to_i
    puts "The result is: #{ a + b }"
  when "s"
    print "Enter a number: "
    a = gets.to_i
    print "Enter the number to subtract: "
    b = gets.to_i
    puts "The result is: #{ a - b }"
  when "m"
    print "Enter a number: "
    a = gets.to_i
    print "Enter the number to multiply: "
    b = gets.to_i
    puts "The result is: #{ a * b }"
  when "d"
    print "Enter a number: "
    a = gets.to_f
    print "Enter the number to divise: "
    b = gets.to_f
    puts "The result is: #{ a / b }"
  when "e"
    print "Enter a number: "
    a = gets.to_i
    print "Enter the exponent: "
    b = gets.to_i
    puts "The result is: #{ a ** b }"
  when "sqr"
    print "Enter a number: "
    a = gets.to_f
    puts "The result is: #{ Math.sqrt( a ) }"
  else
    puts "Invalide selection."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this calculator"
