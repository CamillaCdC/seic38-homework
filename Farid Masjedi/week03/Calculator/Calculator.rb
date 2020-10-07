# menu for user to choose
def show_menu
  puts "\nCalculator".center(20)
  puts "-="*40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[as] - Absolute Subtraction"
  puts "[m] - Multiply"
  puts "[d] - Division"
  puts "[p] - Power"
  puts "[e] - Exponential"
  puts "[l] - Mortgage payment"
  puts "[b] - Body Mass Index (BMI)"
  puts "[t] - Trip Calculator"
  puts "[q] - quit"
  print "\nEnter your choice: "
end
# to show the menu
show_menu
# to ask user for which thet want to use
menu_choice = gets.chomp.downcase


#################################################################

# to take numbers from user
def give_numbers(menu_choice)

  case menu_choice

  when 'e'
    print "\nGive us one number: "
    num1 = gets.to_f
    num1

  when 'l'
    print "\nWhat is the monthly interest rate : "
    r = gets.to_f
    print "\nHow many months you have to pay : "
    n = gets.to_f
    print "\nHow much is the borrowed amount : "
    p = gets.to_f
    [r,n,p]

  when 'b'
    print "\nWhat is your mass(kg) : "
    mass = gets.to_f
    print "\nWhat is your height(m) : "
    height = gets.to_f
    [mass,height]

  when 't'
    print "\nWhat is the distance(km) : "
    distance = gets.to_f
    print "\nHow many km per a gallon(km/gallon) : "
    km_per_gallon = gets.to_f
    print "\nHow much is the price of a gallon($/gallon) : "
    price_a_gallon = gets.to_f
    print "\nWhat is the speed(km/hr) : "
    speed = gets.to_f
    [distance,km_per_gallon,price_a_gallon,speed]

  # if none of the aboves, the user can give numbers. it will end
  # when the user enter n, that means "no more numbers"
  else
    number = 0
    given_numbers_array = []
    puts "[n] - Enter n for no more numbers"

    while number != 'n'
      print "\nEnter a number : "
      number = gets.chomp

      # this gonna chech if the entered number is n for no more numbers
      if (number != 'n')
        number = number.to_f
        given_numbers_array.push(number)
      end
    end
    given_numbers_array
  end
end

#################################################################

# this function defined for calculating the mortgage payment

# r is the monthly interest rate. Exp: if we have 6.5% interest in one -
# year, then r = 6.5/100/12 = 0.005416667

# n is the number of months that should pay for the mortgage.
# exp: if need to pay for 30 years, then n = 30*12

# p is the amount that borrowed
def mortgage(r,n,p)
  if r == 0
    (p/n).round(2)
  else
    ((r * p * (1+r) ** n)/((1+r)**n - 1)).round(2)
  end
end

#################################################################

# this will calculate the time and cost of a trip
def trip(distance,km_per_gallon,price_a_gallon,speed)
  time = distance/speed
  cost = distance * price_a_gallon / km_per_gallon
  [time,cost]
end

#################################################################

# this will give output for different choices of menu by user

until menu_choice == 'q'
  numbers = give_numbers(menu_choice)

  case menu_choice
  when 'a'
    sum = 0
    numbers.each {|i| sum += i}
    puts "\nThe sum of #{numbers} is : #{sum}"

  # this sub works from the first number entered to the last one
  # exp : [2,3,4] : 2-3-4 = -5
  when 's'
    sub = numbers[0]
    numbers[1..numbers.length].each {|i| sub = sub - i}
    puts "\nThe subtract of #{numbers} is : #{sub}"
  when 'as'
    abs_sub = numbers[0]
    numbers[1..numbers.length].each {|i| abs_sub = abs_sub - i}
    puts "\nThe absolute subtract of #{numbers} is : #{abs_sub.abs}"
  when 'm'
    multiply = 1
    numbers.each {|i| multiply *= i}
    puts "\nThe multiply of #{numbers} is : #{multiply}"
  when 'd'
    division = numbers[0]
    numbers[1..numbers.length].each {|i| division = division / i}
    puts "\nThe division of #{numbers} is : #{division}"

  # the power 
  when 'p'
    power = numbers[numbers.length-1]
    (numbers.length-2).downto(0) {|i| power =  numbers[i] ** power}
    puts "\nThe power of #{numbers} is #{power}"
  when 'e'
    puts "\nThe exponential of #{numbers} is : #{Math.exp(numbers)}"
  when 'l'
    mortgage_result = mortgage(numbers[0],numbers[1],numbers[2])
    puts "\nThe mortgage payment of #{numbers[2]} borrowed money with #{numbers[0]} interest rate for #{numbers[1]} years is : #{mortgage_result}"
  when 'b'
    puts "\nThe Body Mass Index (BMI) with #{numbers[0]} mass(kg) and #{numbers[1]} height(m) is: #{(numbers[0]/numbers[1]**2).round(2)}"
  when 't'
    trip_result = trip(numbers[0],numbers[1],numbers[2],numbers[3])
    puts "\nThe time of this trip is #{trip_result[0]} and the cost is #{trip_result[1]}"
  else
    puts "\ninvalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "\nThanks for using my crappy calculator!"
