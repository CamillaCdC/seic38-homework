require'pry'

# The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example, the BBC uses Roman numerals to date their programmes.

# The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets using a chisel).

#  1  => I
# 10  => X
#  7  => VII
# Write a program that will convert Arabic numerals to Roman numerals.

# There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

# Wikipedia says: "Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero."

# To see this in practice, consider the example of 1990.

# In Roman numerals 1990 is MCMXC:

# 1000=M 900=CM 90=XC

# 2008 is written as MMVIII:

# 2000=MM 8=VIII
# See this website for the table of Roman Numbers you will need to check for.

# Do this in Ruby.

# roman = {
# 1000 => 'M',
# 900 => 'CM',
# 500 => 'D',
# 400 => 'CD',
# 100 => 'C',
# 90 => 'XC',
# 50 => 'L',
# 40 => 'XL',
# 10 => 'X',
# 9 => 'IX',
# 5 => 'V',
# 4 => 'IV',
# 1 => 'I'
# }



roman = {
1000 => 'M',
900 => 'CM',
500 => 'D',
400 => 'CD',
100 => 'C',
90 => 'XC',
50 => 'L',
40 => 'XL',
10 => 'X',
9 => 'IX',
5 => 'V',
4 => 'IV',
1 => 'I'
}

roman_array = []

def get_number (number)
    ones_number = number % 10
    tens_number = number /10 %10 
    hundreds_number= number /100 %10
    thousand_number = number /1000 %10

    if thousand_number != 0
        puts 'M'
    elsif hundreds_number != 0
        puts 'D'
    elsif tens_number != 0
        puts 'X'
    elsif ones_number != 0
        puts 'I'
    end
end

def





# answer 
    def convert year
        roman = {
            1000 => 'M',
            900 => 'CM',
            500 => 'D',
            400 => 'CD',
            100 => 'C',
            90 => 'XC',
            50 => 'L',
            40 => 'XL',
            10 => 'X',
            9 => 'IX',
            5 => 'V',
            4 => 'IV',
            1 => 'I'
        }
    
        output = ''
    
        roman.each do |key, value|
            # puts "Key: #{key}, value: #{value}"
            while year >= key
                output += "#{value} "
                year -= key
                # puts "==== There is a match for #{key}"
                # puts "==== Current value of year is #{year}"
            end
            break if year.zero?
        end
    
        output
    end
    
    # puts convert 2100
    # puts convert 2008
    # puts convert 2000
    # puts convert 1999
    # puts convert 8