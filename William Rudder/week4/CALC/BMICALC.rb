def show_menu
puts "-=" * 40
puts "BMI calculator"
puts "[s] - please press 's' to start"
puts "[q] - quit"
print "enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase
until menu_choice == 'q'

  case menu_choice

  when 's'
    print "please enter your weight in KG's: "
    weight = gets.to_f
    print "Your weight has been recorded - please now enter your height: "
    height = gets.to_f
    print "Your BMI score result is: #{(weight / height / height)*10000}"
  end
  show_menu
menu_choice = gets.chomp.downcase
end
