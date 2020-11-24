# ### 1. Drinking age?
# - Ask the user for their age.
#     - Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# - If age is less than 18, print an appropriate message. 
# - If the age is equal to or over 18, print a different message.

print "how old are you? "
# age = gets.chomp.to_i
age = gets.to_i
if age < 18 
    # if age.to_i < 18 
    puts "you are #{ age }under 18, no service"
else 
    puts " You are #{ age }over 18,  here is your drink"
end    

# ### 2. Air Conditioning
# - Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
#     - If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
#     - If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now!  It's hot!"
#     - If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance...  It's cool..."

print "what the current temperature is? "
cur_temp = gets.chomp

print "what is your desired temperature? "
functional_ac = gets.chomp

print "what is desired temperature"

if temp.to_i > 25
    puts "turn on the A/C please"
    if 
    end






# ### 3. Sydney Suburbs
# - Create a program that asks what suburbs you live in.
# - Depending on the answer, print an appropriate response of your choosing

print "where do you live?  "
    address = gets.chomp


