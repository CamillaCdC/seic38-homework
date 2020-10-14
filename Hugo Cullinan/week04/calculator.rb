def show_menu
  puts "Calculator" #TODO: you can use .center to make look nice.
  puts "-=" * 30
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[d] - Division"
  puts "[m] - Multiplication"
  puts "[e] - Exponent"
  puts "[r] - Square root"
  puts "[q] - Quit"
  print "Enter your choice: "
end

### addition function
def addition(a, b)
  return "#{ a } + #{ b } = #{ a + b }"
end

### subtraction function
def subtraction(a, b)
  return "#{ a } - #{ b } = #{ a - b }"
end

### division function
def division(a, b)
  return "#{ a } / #{ b } = #{ a / b }"
end

### multiplication function
def multiplication(a, b)
  return "#{ a } * #{ b } = #{ a * b }"
end

### exponent function
def exponent(a, b)
  return "#{ a } exponent #{ b } = #{ a ** b }"
end

### square root function
def sqr_root_of(a)
  return "The square root of #{ a } = #{ Math.sqrt(a) }"
end


show_menu
menu_choice = gets.chomp.downcase



until menu_choice == 'q'
  case menu_choice
  when 'a'
    print "Enter the first value: "
    a = gets.to_i
    print "plus: "
    b = gets.to_i
    puts addition(a, b)
    puts "-=" * 30
  when 's'
    print "Enter the first value: "
    a = gets.to_i
    print "minus: "
    b = gets.to_i
    puts subtraction(a, b)
    puts "-=" * 30
  when 'd'
    print "Enter the numerator: "
    a = gets.to_i
    print "Enter the denominator: "
    b = gets.to_i
    puts division(a, b)
    puts "-=" * 30
  when 'm'
    print "Enter the first value: "
    a = gets.to_i
    print "times: "
    b = gets.to_i
    puts multiplication(a, b)
    puts "-=" * 30
  when 'e'
    print "Enter the base value: "
    a = gets.to_i
    print "exponent: "
    b = gets.to_i
    puts exponent(a, b)
    puts "-=" * 30
  when 'r'
    print "Square root: "
    a = gets.to_i
    puts sqr_root_of(a)
    puts "-=" * 30
  else
    puts "Invalid selection."
  end
  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using my calculator!"

###############
