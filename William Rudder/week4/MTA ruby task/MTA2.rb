require 'pry'

  lines = {
    :Nline => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :Lline => ["Times Square", "8th", "6th", "Union Square", "3rd", "1st"],
    :sixline => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }


print "what line are you getting onto? [Nline] [Lline] or [sixline]"
linestart = gets.chomp

print "what line are you getting off at? [Nline] [Lline] or [sixline]"
lineend = gets.chomp
print "What stop are you getting onto?: "
stopstart = gets.chomp

print "what stop are you getting off?: "
stopend = gets.chomp
# function to show sotps on one line



    indexfoundstart = lines[:Nline].find_index(stopstart)
    if indexfoundstart < 4
      unionstopsNline = lines[:Nline][indexfoundstart..4]
    else
     unionstopsNline = lines[:Nline][4..indexfoundstart].reverse
   end

    indexfoundend = lines[:Lline].find_index(stopend)
    if indexfoundend < 3
      unionstopsLline = lines[:Lline][indexfoundend..3].reverse
    else
     unionstopsLline = lines[:Lline][3..indexfoundend]
   end


   stopsamount = unionstopsNline.count + unionstopsLline.count - 2
   # this turns stops into a positive number if its going backwards
   stopsamount = stopsamount.abs
   puts "starting from #{stopstart} on the  #{linestart}, you will have to get off at union square #{unionstopsNline}  and change onto the Lline where you will go through the following stops #{unionstopsLline} stops: (#{stopsamount})"



#   when 'Lline'
#   indexfoundstart = lines[:Lline].find_index(stopstart)
# end
#
#
# # amount of stops
# indexfoundstart = lines[:Nline].find_index(linestart)
# indexfoundend = lines[:Nline].find_index(nlinestop)
# stopsamount = indexfoundend - indexfoundstart
# # this turns stops into a positive number if its going backwards
# stopsamount = stopsamount.abs
# puts "getting from #{nlinestart} to #{nlinestop} will take #{stopsamount} stops on the N line"
#
#
# # print stops now
# if indexfoundstart < indexfoundend
# puts"#{lines[:Nline][indexfoundstart..indexfoundend]}"
# else
# puts"#{lines[:Nline][indexfoundend..indexfoundstart].reverse}"
binding.pry
