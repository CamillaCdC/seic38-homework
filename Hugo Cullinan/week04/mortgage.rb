print "Enter loan amount: "
loan = gets.to_i
print "Enter total amount of months: "
time = gets.to_i
print "Enter interest rate: "
rate = gets.to_f/100

i = (1+rate/12)**(12/12)-1
annuity = (1-(1/(1+i))**time)/i

payment = loan/annuity

puts "\n$#{ payment.to_f } per month"
