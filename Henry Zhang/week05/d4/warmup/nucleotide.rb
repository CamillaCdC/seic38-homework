require 'pry'

# # Nucleotide Count

# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.

# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.

# Write a program in ruby that will tell you how many times each nucleotide occurs in a string (i.e. how many times 'A', 'C', 'G' and 'T' appear in a given string).

# It should also tell you if a character in the string is not a valid nucleotide (i.e. NOT 'A', 'C', 'G', and 'T').

c_array = []
a_array = []
g_array = []
t_array = []

input = gets.to_s.upcase.chomp
p  new_array = input.split(%r{\s*})
    new_array.each do |element|
        case element
        when 'A'
            a_array << element
        when 'C'    
            c_array << element
        when 'G'
            g_array << element
        when 'T'
            t_array << element
        else

        end
    end

p a_array.size        
p c_array.size
p g_array.size
p t_array.size



count_nucleotides(input) 

binding.pry

# def count_nucleotides( words )
    
p words.split(%r{\s*})

# end




# Example:

# ```
# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21
# ```

# ### Source

# The Calculating DNA Nucleotides problem at Rosalind