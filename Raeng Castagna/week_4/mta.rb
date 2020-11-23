require 'pry'
# https://gist.github.com/wofockham/399e315a90e04a867455

## DONE
# found line, and can display all stations

## TO DO
# Create a new array to show the journey within the function to return, using push()
# Display the stations between a start and stop paramater for one line, going backwards. Use reverse(), if else statement??
# Combine forward and backward display of trip for one line
# create global variable to identify junction point.
# Combine lines - possible if else/another function? Union Square as known junction to continue journey. Going forwards
# Combine lines going backwards
# Combine all options into one function
# Made it dry
# Put oringal arrays into an object, this way you can pull out the keys to display on console

## DOING
# Display the stations between a start and stop paramater for one line, going forwards.

lines = {
    :NLine => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :LLine => ["8th", "6th", "Union Square", "3rd", "1st"],
    :SixLine => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

print "Enter start line: "
start_line = gets.chomp.to_sym
# p start_line
print "Enter start station: "
start_station = gets.chomp.to_s
# p start_station
print "Enter end line: "
end_line = gets.chomp.to_sym
print "Enter end stop: "
end_station = gets.chomp.to_s

case start
when :NLine
    n_line = lines[:NLine]
    p n_line
when :LLine
    l_line = lines[:LLine]
    p l_line
when :SixLine
    six_line = lines[:SixLine]
    p six_line
end

# Iterates over selected Line array, selects station
# ***** cant seem to do this with start and end station??
if start_line == end_line
    n_line.each do |i|
        # if i == start_station
        #     p start_station
        # end
        if i == end_station
            p end_station
        end
    # trips = n_line.select {|i| i start_station > end_station}
    # p trips
    end
end
# n_line.each do |i|
#     if i == start_station
#         p start_station
#     end
# end

# l_line.each do |i|
#     if i == start_station
#         p start_station
#     end
# end
# six_line.each do |i|
#     if i == start_station
#         p start_station
#     end
# end
# then find the station selected in the array
# then find line to end. 
# then 

# one line going forwards
def plan_trip (start_line, start_station, end_line, end_station)
    # p lines[:NLine]
end

# binding pry