# see MTA2

require 'pry'

  lines = {
    :Nline => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :Lline => ["Times Square", "8th", "6th", "Union Square", "3rd", "1st"],
    :sixline => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }

print "What stop are you getting onto?: "
nlinestart = gets.chomp

print "what stop are you getting off?: "
nlinestop = gets.chomp
# function to show sotps on one line

# amount of stops
indexfoundstart = lines[:Nline].find_index(nlinestart)
indexfoundend = lines[:Nline].find_index(nlinestop)
stopsamount = indexfoundend - indexfoundstart
# this turns stops into a positive number if its going backwards
stopsamount = stopsamount.abs
puts "getting from #{nlinestart} to #{nlinestop} will take #{stopsamount} stops on the N line"


# print stops now
if indexfoundstart < indexfoundend
puts"#{lines[:Nline][indexfoundstart..indexfoundend]}"
else
puts"#{lines[:Nline][indexfoundend..indexfoundstart].reverse}"
end
binding.pry
