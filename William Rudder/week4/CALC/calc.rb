def show_menu
puts "calculator"
puts "-=" * 40
puts "[a] - addition"
puts "[m] - multiply"
puts "[s] - subtract"
puts "[d] - divide"
puts "[e] - exponent"
puts "[q] - quit"
print "enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
# addition
  when 'a'
     print "enter first number to add here: "
     addition1 = gets.to_i
     print "enter second number to add here: "
     addition2 = gets.to_i
     puts "these numbers added together give you:  #{addition1 + addition2}."
  # multiply
  when 'm'
    print "enter first number to multiply here: "
      multiply1 = gets.to_i
    print "enter second number to multiply here: "
      multiply2 = gets.to_i
    puts "these numbers multiplied together give you:  #{multiply1 * multiply2}."
    # subtract
  when 's'
    print "enter first number to subtract here: "
      subtract1 = gets.to_i
    print "enter second number to subtract here: "
      subtract2 = gets.to_i
    puts "these numbers subtracted give you:  #{subtract1 - subtract2}."
  # divide
  when 'd'
    print "enter first number to divide here: "
      divide1 = gets.to_f
    print "enter second number to divide here: "
      divide2 = gets.to_f
    puts "these numbers divided give you:  #{divide1 / divide2}."
    # exponent

  when 'e'
    print "enter the base number: "
      exponent1 = gets.to_f
    print "enter the exponent number: "
      exponent2 = gets.to_f
    puts "the exponential value equals:  #{exponent1 ** exponent2}."


  # invalid selection
    else puts "invalid selection you idiot"
  end
  show_menu
  menu_choice = gets.chomp.downcase
end

puts "thanks for using crappy calculator!"
