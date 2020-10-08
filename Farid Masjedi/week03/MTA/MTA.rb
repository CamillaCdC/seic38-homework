## --------------------------------Question-----------------------------------------

# # MTA Lab
#
# ## Objectives:
# * Apply your knowledge of Ruby to solve a real world problem.
# * Get really good at array manipulation.
#
# #### Activity
# * Create a program that models a simple subway system.
#
# * The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints the journey and the total number of
# stops for the trip in the console:
#
# ```ruby
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and
# signature.
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
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and
# Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points.
# (For example, this means the 28th stop on the N line is different than the 28th street stop on
# the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
#
#
# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working.
# You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names-
# (i.e. 23rd on the N and on the 6 need to be differentiated)

## --------------------------------Solution-----------------------------------------


# The function to give the plan of the trip and the total of stops.
# * Union Station between the lines can be passed. (As default = 'Union Square')
def trip(first_line, first_stop, second_line, second_stop, union_station = 'Union Square')

  # All the lines with name and name of the stops.
  lines = {
      :N => [ 'Times Square' , '34th' , '28th' , '23rd' , 'Union Square' , '8th' ],
      :L => [ '8th' , '6th' , 'Union Square' , '3rd' , '1st' ],
      "6" => [ 'Grand Central' , '33rd' , '28th' , '23rd' , 'Union Square' , 'Astor Place' ]
     }

  check_argument = true

  # Check: if the lines existed or not.
  # Exp: trip 'West', '5th', :N, 'Times Square'
  if !lines.keys.include? first_line
    puts "\nThere is no #{first_line} line."
    check_argument = false
  elsif !lines.keys.include? second_line
    puts "\nThere is no #{second_line} line."
    check_argument = false
  end

  # check: if the passed stops are existed in the lines or not.
  # Exp: trip :N, '34th', :L, 'Times Square'
  if !lines[first_line].include? first_stop
    puts "\nThere is no #{first_stop} station in line #{first_line}"
    check_argument = false
  elsif !lines[second_line].include? second_stop
    puts "\nThere is no #{second_stop} station in line #{second_line}"
    check_argument = false
  end

  # if the check_argument is false, it is going to be stopped in this-
  # line. (works like break)
  if check_argument

    # check: if one of the stops is 'Union Square', but two different -
    # - lines has been passed.
    # Exp: trip :N, 'Union Square', :L, 'Times Square'
    if first_stop == union_station
      first_line = second_line
    elsif second_stop == union_station
      second_line = first_line
    end

    # main structure of the method for plannig the trip
    start_stop = lines[first_line].index(first_stop);
    last_stop = lines[second_line].index(second_stop);
    union_index1 = lines[first_line].index(union_station);
    union_index2 = lines[second_line].index(union_station);

    totalstops = 0
    travel = []

    # Check if the trip is inside one of the lines.
    if first_line == second_line

      totalstops = (last_stop - start_stop).abs
      first = [last_stop , start_stop].min
      last = [last_stop , start_stop].max

      travel = lines[first_line][first..last]
      if start_stop > last_stop
        travel.reverse!
      end

      travel.shift

      puts "\nYou must travel through the following stop(s) on the #{first_line} line: #{travel.join(', ')}."+"\n"
      puts "\n"+"#{totalstops} stop(s) in total."

    else

      # if changing the line is needed.
      totalstops = (start_stop - union_index1).abs + (union_index2 - last_stop).abs
      first_s = [start_stop , union_index1].min
      first_e = [start_stop , union_index1].max
      second_s = [last_stop , union_index2].min
      second_e = [last_stop , union_index2].max

      travel = lines[first_line][first_s..first_e]

      if start_stop > union_index1
        travel.reverse!
      end

      travel.shift

      puts "\nYou must travel through the following stop(s) on the #{first_line} line: #{travel.join(', ')}."
      puts "\n\nChange at #{union_station} and go to line #{second_line}"


      travel = []

      travel = lines[second_line][second_s..second_e]

      if union_index2 > last_stop
        travel.reverse!
      end

      travel.shift

      puts "\n\nYour journey continues through the following stop(s): #{travel.join(', ')}."
      puts "\n\n#{totalstops} stops in total."
    end
  end
end

puts "\n* The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th"
puts "\n* The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st"
puts "\n* The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place."
puts "\n"
## --------------------------------non-interactive examples-----------------------------------------

# trip :N , 'Times Square' , "6" , 'Grand Central'
# trip :N , '8th' , "6" , 'Union Square'
# trip :N , '8th' , "6" , 'Grand Central', '23rd'
# trip :N , 'Times Square' , '6' , '33rd'

## --------------------------------interactive examples-----------------------------------------

# taking the first_line from the user
print  "Which line you are in: "
# making the input to be UpperCase
first_line = gets.chomp.upcase
# cause there is 2 lines with symbolic name(:N , :L), this -
# gonna change the input name to symbol
if first_line != "6"
  first_line = first_line.to_sym
end

puts "\n"
# taking the start stop from the user
print "Which station of #{first_line} line you are: "
# some of the station's name are 2 words, and each one is-
# capitalized. this will split the name by '<space>' and then-
# it will go through the array and make all the words to be-
# capitalized. And at the end it will join them by '<space>' again
first_stop = gets.split(' ').each { |i| i.capitalize! }
first_stop = first_stop.join(' ')

puts "\n"
# same as the first_line
print "Which line you want to go: "
second_line = gets.chomp.upcase
if second_line != "6"
  second_line = second_line.to_sym
end

puts "\n"
# same as first_stop
print "Which station in #{second_line} you want to go: "
second_stop = gets.split(' ').each { |i| i.capitalize! }
second_stop = second_stop.join(' ')

puts "\n"
# this will give the chance to change the intersection station
# give the user this chance that if the Union Square is the-
# intersection station. the just enter [y], otherwise, enter-
# the intersection.
if first_line != second_line
  puts "\nIf the intersection is 'Union Square' just enter [y]"
  print "\nOtherwise enter the intersection station: "
  # if it passed Y or yes, this will give us just the [y]
  # if the intersection is not Union Square, then it is just gonna make it-
  # downcased.
  union_station = gets.chomp.downcase

  if union_station[0] != 'y'
    union_station = union_station.split(' ').each { |i| i.capitalize! }
    union_station = union_station.join(' ')
  else
    union_station = 'Union Square'
  end
else
  union_station = 'Union Square'
end

puts "\n"
puts "#"*20

trip first_line,first_stop,second_line,second_stop,union_station

puts "\n"
puts "#"*20
