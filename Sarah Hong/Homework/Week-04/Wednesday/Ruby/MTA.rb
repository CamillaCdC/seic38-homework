require 'pry'

# MTA Lab

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#

# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

def fancy_header
  puts "-=" * 40
  puts "|| Ruby Rail ||".center(80)
  puts "-=" * 40
end

fancy_header

route = {
  :NLine => %w( Times\ Square 34th 28th 23rd Union\ Square 8th ),
  :LLine => %w( 8th 6th Union\ Square 3rd 1st ),
  :SLine => %w( Grand\ Central 33rd 28th 23rd Union\ Square Astro\ Place )
}
p route[:NLine]
p route[:LLine]
p route[:SLine]


# start = gets.chomp.to_sym
# print "End Station: "
# final = gets.chomp.to_sym
# p start


# Start line = user choose a valid start line. If invalid, let the user know otherwise.
print "Start Line: "
start_line = gets.chomp.to_sym
case start_line
when :NLine
  start_line = route[:NLine]
  puts "You are starting your journey on NLine."
  puts "Here are the stops on Line N."
  p start_line
when :LLine
  start_line = route[:LLine]
  puts "You are starting your journey on LLine."
  p start_line
when :SLine
  start_line = route[:SLine]
  puts "You are starting your journey on SLine."
  p start_line
else
  puts "This line does not exist. Please choose a valid line to plan your route."
end


# Start station = user choose a start station. Iterate through line to get hosen station.
print "Start Station: "
start_station = gets.chomp
case start_station
when :NLine
  start_station = route[:NLine]
  start_station.each do |station|
  puts "You are starting on NLine, station  #{ station }}"
  p station
  # start_index = find start index
end
when :LLine
  start_station = route[:LLine]
  start_station.each do |station|
  puts "You are starting on LLine, station  #{ station }}"
  p station
    # start_index = find start index
end
when :SLine
  start_station = route[:SLine]
  start_station.each do |station|
  puts "You are starting on SLine, station  #{ station }}"
  p station
    # start_index = find start index
end



# Stops generator function

# case stop_generator
#   # start_line = route[:NLine] route[:LLine] route[:SLine]
#   # start_index = start_station
#   # end_index = end_station
# stops = ['']
# when ( start_station < end_station ) { // forward
#     stops = lineArray.slice( startIndex, endIndex + 1 ); // .slice requires +1 because it is an 'up to but not equal to' function.
#   } else { // Backwards
#     stops = lineArray.slice( endIndex, startIndex + 1 ).reverse(); // .reverse does not require arguments.
#   }
#   return stops;
}

# start_station = route[:NLine][ ]
# print "Start station: "
# start_station = gets.chomp

binding.pry

# `puts` shows output similar to this:
# "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."


# Hints:
# Work out how you would do it on paper first! Then start to explain that process in Ruby.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use gets later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop. (hint: index)
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
