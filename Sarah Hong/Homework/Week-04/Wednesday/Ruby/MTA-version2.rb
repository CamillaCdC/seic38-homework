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

# line function
print "Start Line: "
start_line = gets.chomp.to_sym
case start_line
when :NLine
  start_line = route[:NLine]
  p start_line
when :LLine
  start_line = route[:LLine]
  p start_line
when :SLine
  start_line = route[:SLine]
  p start_line
else
  puts "This line does not exist."
end

# stations

print "Start Station: "
start_station = gets.chomp
case start_station
when :NLine
  start_station = route[:NLine].index(start_station)
  start_station.each do |station|
    p station
  end
when :LLine
  start_station = route[:LLine].index(start_station)
  start_station.each do |station|
    p station
  end
when :SLine
  start_station = route[:SLine].index(start_station)
  start_station.each do |station|
    p station
  end
end

# line function
print "End Line: "
end_line = gets.chomp.to_sym
case end_line
when :NLine
  end_line = route[:NLine]
  p end_line
when :LLine
  end_line = route[:LLine]
  p end_line
when :SLine
  end_line = route[:SLine]
  p end_line
else
  puts "This line does not exist."
end

print "End Station: "
end_station = gets.chomp
case end_station
when :NLine
  end_station = route[:NLine].index(end_station)
  end_station.each do |station|
    p station
  end
when :LLine
  end_station = route[:LLine].index(end_station)
  end_station.each do |station|
    p station
  end
when :SLine
  end_station = route[:SLine].index(end_station)
  end_station.each do |station|
    p station
  end
end

start_station
end_station

# Stops generator
# iterator that iterates(stops) each station
  start_index = start_station
  end_index = end_station

def stop_generator stops
    stops = ''
if start_index < end_index # forward
  stops = line[1..4]
else # backwards
    stops = [4..1].reverse
  end
  return stops
end

# iterator that iterates each station


# puts "You must travel through the following stops on the #{line}: #{stop_generator}"
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."



  binding.pry
