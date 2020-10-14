
def show_menu
  puts "Calculator" #TODO: you can use .center here to make it look nice
  puts "-=" * 40 # El cheapo horizontal diving line
  puts "[a] - Addition"
  #TODO: Add other options here
  puts "[s] - Subtraction"
  puts "[d] - Division"
  puts "[m] - Multiplication"
  puts "[ex] - Exponentiation"
  puts "[sq] - Square Root"
  puts "[q] - Quit"
  print "Enter your choice: "
end

def add ()
  print "Please enter your first number: "
  a = gets.to_i

  print "Please enter your second number: "
  b = gets.to_i
  result = "Result = #{a + b}"
  result
end

def subtraction ()
  print "Please enter your first number: "
  a = gets.to_i

  print "Please enter your second number: "
  b = gets.to_i

  result = "Result = #{a - b}"
  result
end

def division ()
  print "Please enter your first number: "
  a = gets.to_i

  print "Please enter your second number: "
  b = gets.to_i

  result = "Result = #{a / b}"
  result
end

def multiplication ()
  print "Please enter your first number: "
  a = gets.to_i

  print "Please enter your second number: "
  b = gets.to_i

  result = "Result = #{a * b}"
  result
end

def square_root ()
  print "What number would you like to get the square root of: "
  a = gets.to_i

  result = "Result = #{Math.sqrt(a)}"
  result
end

def exponentiation ()
  print "What is the base number: "
  a = gets.to_i

  print "to the power of: "
  b = gets.to_i

  result = "Result = #{a ** b}"
  result
end


show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
  case menu_choice
  when "a"
    puts add
  when "s"
    puts subtraction
  when "d"
    puts division
  when "m"
    puts multiplication
  when "sq"
    puts square_root
  when "ex"
    puts exponentiation
  else
    puts "Invalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this calculator"
