require 'pry'



# # Simple Sums - Ruby
# Write a program that can calculate the sum of the first n elements of the following sequences:

# s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
# s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc

# ## For example:

# s1(4) = 0
# s2(4) = 10
# Can you guess what the sum would be if n is infinity?

array1 = Array(1..10)

def sum1( array,number )
    // 
    array.empty?
        until array.each_index == number - 1
            array.each do |element|
                element += element    
                puts element       
                binding.pry
            end
        end
end
    
sum1(array1, 4)
