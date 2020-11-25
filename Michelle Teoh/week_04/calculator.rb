
#Calculator
#Specification:
#A user should be given a menu of operations
#A user should be able to choose from the menu
#A user should be shown the result
#This process should continue until the user selects a quit option from the menu


puts = """OPERATOR
         Plus +
         Minus -
         Mutiply *
         Divide /
         Modulus %
         Exponent **
         exit = to quit
         """

print "Enter a operator-> "
operator = gets.chomp.downcase
print "Enter first number -> "
first_num = gets.to_i
print "Enter second number -> "
second_num = gets.to_i

while operator != "exit"
if operator == '+'
  total = first_num + second_num
  puts "#{first_num} #{operator} #{second_num} is #{total} in total"
elsif operator == '-'
  total = first_num - second_num
  puts "#{first_num} #{operator} #{second_num} is #{total} in total"
elsif operator == '*'
  total = first_num * second_num
  puts "#{first_num} #{operator} #{second_num} is #{total} in total"
elsif operator == '/'
  total = first_num / second_num
  puts "#{first_num} #{operator} #{second_num} is #{total} in total"
elsif operator == '%'
  total = first_num % second_num
  puts "#{first_num} #{operator} #{second_num} is #{total} in total"
elsif operator == '**'
  total = first_num ** second_num
  puts "#{first_num} #{operator} #{second_num} is #{total} in total"
else
  puts "Wrong operator!!!"
until operator == "exit"
end


## Mortgage Calculator
#Calculate the monthly required payment given the other variables as input (look up the necessary variables)

print "enter loan amount: "
loan = gets.chomp.to_i
print "Enter length of time in months: "
time = gets.chomp.to_i
print "Enter interest rate: "
rate = gets.chomp.to_f/100

i = (1+rate/12)**(12/12)-1
annuity = (1-(1/(1+i))**time)/i

payment = loan/annuity

puts "\n$%.2f per month" % [payment]



## BMI Calculator
#Calculate the body mass index (BMI) for an individual, given their height and weight
print "Enter you height (m): "
high = gets.to_f

print "Enter you weight (kgs): "
bulk = gets.to_f

yourbmi = "%.1f" % (bulk / (high * high))
print "Your BMI is #{yourbmi}\n"


## Trip Calculator
#Calculate a trip time and cost given inputs for
#- distance
#- miles per gallon
#- price per gallon
#- speed in miles per hour
