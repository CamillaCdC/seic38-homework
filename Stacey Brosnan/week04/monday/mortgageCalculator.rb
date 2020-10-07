
print "What is the fixed yearly interest rate? "
i = gets.to_f/12

print "What is the principle? "
p = gets.to_i

print "What is the number of monthly payments? "
n = gets.to_i


monthly_payment = p * (i * (1 + i) ** n) / ((1 + i) ** n - 1)

print "Your montly payment will be #{monthly_payment} \n"
