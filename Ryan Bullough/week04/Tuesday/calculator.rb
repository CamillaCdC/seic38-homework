def show_menu
  puts "-=" * 40
  puts "Calculator".center(80)
  puts "-=" * 40
  puts "[a]  -  Addition"
  puts "[s]  -  Subtraction"
  puts "[d]  -  Division"
  puts "[m]  -  Multiplication"
  puts "[e]  -  Exponent"
  puts "[sq] -  Square Root"
  puts "[q]  -  Quit"
  print "Enter your choice: "
end

def add (a, b)
  a + b
end

def subtract (a, b)
  a - b
end

def multiply (a, b)
  a * b
end

def divide (a, b)
  a / b
end

def exponent (a, b)
  a ** b
end

def square_it (a)
  Math.sqrt(a)
end

menu_choice = ""

until menu_choice == 'q'
  show_menu
  menu_choice = gets.chomp.downcase
  case menu_choice
  when 'a'
    print "Enter first operand: "
    a = gets.strip.to_i
    print "Enter second operand: "
    b = gets.strip.to_i
    puts "RESULT: #{ add a, b }"
  when 's'
    print "Enter first operand: "
    a = gets.strip.to_i
    print "Enter second operand: "
    b = gets.strip.to_i
    puts "RESULT: #{ subtract a, b }"
  when 'd'
    print "Enter first operand: "
    a = gets.strip.to_i
    print "Enter second operand: "
    b = gets.strip.to_i
    puts "RESULT: #{ divide a, b }"
  when 'm'
    print "Enter first operand: "
    a = gets.strip.to_i
    print "Enter second operand: "
    b = gets.strip.to_i
    puts "RESULT: #{ multiply a, b }"
  when 'e'
    print "Enter first operand: "
    a = gets.strip.to_i
    print "Enter second operand: "
    b = gets.strip.to_i
    puts "RESULT: #{ exponent a, b }"
  when 'sq'
    print "Enter operand: "
    a = gets.strip.to_i
    puts "RESULT: #{ square_it a }"
  end
end

puts "Thanks for using crappy calculator (c)"