require "pry"
# #### Activity
# * Create a program that models a simple subway system.
#
# * The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# ```ruby
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#
# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# ```
#
# * There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
#
#
# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

$n_line = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]

$l_line = ["8th", "6th", "Union Square", "3rd", "1st"]

$six_line = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
#
# print "What line are you getting on at: "
# $start_line = gets.chomp.downcase
#
# print "What stop are you getting on at: "
# $start_trip = gets.chomp.downcase
#
# print "What line are you getting off at: "
# $end_line = gets.chomp.downcase
#
# print "What stop are you getting off at: "
# $end_trip = gets.chomp.downcase
#
case $start_line
when $start_line = "n line"
     $start_line = $n_line
when $start_line = "l line"
     $start_line = $l_line
when $start_line = "6 line"
     $start_line = $six_line
end

case $end_line
when $end_line = "n line"
     $end_line = $n_line
when $end_line = "l line"
     $end_line = $l_line
when $end_line = "6 line"
     $end_line = $six_line
end
#
# trip = plan_Trip

def plan_Trip(start_line, start_trip, end_trip, end_line)
  journey = ""
  end_journey = ""
  start_index = start_line.index(start_trip)
  end_index = end_line.index(end_trip)
  puts start_index
  puts end_index

  if start_line == end_line

    if start_index < end_index
      i = start_index + 1
      num = (end_index - i) + 1
        until i == end_index + 1
          journey += " #{start_line[i]}, "
          i += 1
        end

    else
      i = start_index - 1
      num = (i - end_index)
        until i == end_index - 1
          journey += " #{start_line[i]},"
          i -= 1
        end
      end

  else
      puts "Change at Union Square."
      union = start_line.index("Union Square")
      if start_index < union
        i = start_index + 1
        num = (union - i) + 1
          until i == union + 1
            journey += " #{start_line[i]},"
            i += 1
          end

        elsif start_index > union
          i = start_index - 1
          num = (i - union) + 1
            until i == union - 1
              journey += " #{start_line[i]},"
              i -= 1
            end
        end
        union_end = end_line.index("Union Square")
        if union_end < end_index
          i = union_end + 1
          num += (end_index - i) + 1
            until i == end_index + 1
              end_journey += " #{end_line[i]},"
              i += 1
            end

        elsif union_end > end_index
          i = union_end - 1
          num += (i - end_index) + 1
            until i == end_index - 1
              end_journey += " #{end_line[i]},"
              i -= 1
            end
        end
  end

  case start_line
  when start_line = $n_line
       s_line = "N line"
  when start_line = $l_line
       s_line = "L line"
  when start_line = $six_line
       s_line = "6 line"
end

   puts "You must travel through the following stops on the #{s_line}: #{journey}."
  puts "Your journey continues through the following stops: #{end_journey}."
  puts "#{num} stops in total"



end

plan_Trip($n_line, "Times Square", "1st", $l_line)
