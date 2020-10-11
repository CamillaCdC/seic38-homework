def show_menu
  puts "Calculator" # TODO: you can use .center here to make it look nice.
  puts "-=" * 40 # Cheapo divider line
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[d] - Division"
  puts "[m] - Multiplication"
  puts "[e] - Exponent"
  puts "[sr] - Square Root"
  puts "[q] - Quit"
  print "Enter your choice: "
end


def addition
  puts "Enter the first number"
  a = gets.to_i
  puts "Num 1 = #{a}"
  puts "Enter the second number"
  b = gets.to_i
  puts "Num 2 = #{b}"
  puts "-=" * 40
  puts "#{a} + #{b} = #{a + b}"
  puts "-=" * 40
end

def subtraction
  puts "Enter the first number"
  a = gets.to_i
  puts "Num 1 = #{a}"
  puts "Enter the second number"
  b = gets.to_i
  puts "Num 2 = #{b}"
  puts "-=" * 40
  puts "#{a} - #{b} = #{a - b}"
  puts "-=" * 40
end

def division
  puts "Enter the first number"
  a = gets.to_i
  puts "Num 1 = #{a}"
  puts "Enter the second number"
  b = gets.to_i
  puts "Num 2 = #{b}"
  puts "-=" * 40
  puts "#{a} % #{b} = #{a / b}"
  puts "-=" * 40
end

def multiplication
  puts "Enter the first number"
  a = gets.to_i
  puts "Num 1 = #{a}"
  puts "Enter the second number"
  b = gets.to_i
  puts "Num 2 = #{b}"
  puts "-=" * 40
  puts "#{a} * #{b} = #{a * b}"
  puts "-=" * 40
end

def exponent
  puts "Enter the first number"
  a = gets.to_i
  puts "Num 1 = #{a}"
  puts "Enter the second number"
  b = gets.to_i
  puts "Num 2 = #{b}"
  puts "-=" * 40
  puts "Exponent of #{a} and #{b} is #{a ** b}"
  puts "-=" * 40
end

def square_root
  puts "Enter the number"
  a = gets.to_i
  puts "Num 1 = #{a}"
  puts "-=" * 40
  puts "Square root of #{a} is #{Math.sqrt(a)}"
  puts "-=" * 40
end


show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    addition
  when 's'
    subtraction
  when 'd'
    division
  when 'm'
    multiplication
  when 'e'
    exponent
  when 'sr'
    square_root
  else
    puts "Invalid selection. You idiot."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using crappy calculator"
