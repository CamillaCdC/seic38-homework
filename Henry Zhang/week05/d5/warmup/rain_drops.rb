# # Warmup - Raindrops
# Write a program using **Ruby** that will take a number (eg 28 or 1755 or 9, etc) and output the following:

# - If the number contains 3 as a factor, output 'Pling'.
# - If the number contains 5 as a factor, output 'Plang'.
# - If the number contains 7 as a factor, output 'Plong'.
# - If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

# ## Examples
# - 28 has 7 as a factor.
# - In raindrop-speak, this would be a simple "Plong".
# - 1755 has 3 and 5 as factors.
# - In raindrop-speak, this would be a "PlingPlang".
# - 34 has neither 3, 5 nor 7 as a factor.
# - Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".


def rain_drop (num )
   
    if num %3 == 0 
        puts "Pling...."
    elsif num % 5 ==0 
        puts "Plang..."
    elsif num %7 == 0
        puts "Plong..."
    else
        puts "#{num} is not raining"
    end
end    

#  donot need convert to integer
input = gets
until input[0].downcase == "q"
    # here is the only place to convert
    rain_drop(input.to_i)
    # dont need to convert
    input = gets
end
puts "Thanks for playing"