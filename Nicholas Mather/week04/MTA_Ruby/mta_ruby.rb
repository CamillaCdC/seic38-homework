# establish each line as an array with the line name as the 0th index
N = ["N", "Times Square", "34th", "28th", "23rd", "Union Square"]
L = ["L", "8th", "6th", "Union Square", "3rd", "1st"]
Six = ["6", "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]


##TODO Neaten up naming to be in line with snake_case convention

# Initialise the trip planner function with the inputs
def plan_trip(line_1, station_1, line_2, station_2)
  # for single line trips:
  if line_1 == line_2
    # get the start and end stations as index numbers
    trip_start = line_1.index(station_1)
    trip_end = line_2.index(station_2)
    # call stopGetter to get an array with the stations of the trip in it
    trip = stopGetter(trip_start, trip_end, line_1)
    # generate and puts an output
    output = "You must travel through the following stops on the #{line_1[0]} line: "
    output += trip.join(", ")
    puts output
    puts "#{trip.size} stops in total."
  # for multi-line trips
  else
    # get the start and end stations as index numbers, for both trips
    # changing at Union Square
    trip_1_start = line_1.index(station_1)
    trip_1_end = line_1.index("Union Square")
    trip_2_start =line_2.index("Union Square")
    trip_2_end = line_2.index(station_2)
    #call stopGetter to get an array for each trip
    trip_1 = stopGetter(trip_1_start, trip_1_end, line_1)
    trip_2 = stopGetter(trip_2_start, trip_2_end, line_2)
    #Generate and puts an output
    output_1 = "You must travel through the following stops on the #{line_1[0]} line: "
    output_1 += trip_1.join(", ")
    output_2 = "You must travel through the following stops on the #{line_2[0]} line: "
    output_2 += trip_2.join(", ")

    puts output_1
    puts "Change at Union Square."
    puts output_2
    puts "#{trip_1.size + trip_2.size - 1} stops in total."
  end
end

#function for getting the stops for a line
def stopGetter(stop_1, stop_2, line)
  if stop_1 > stop_2
    return line[stop_2..stop_1].reverse!
  else
    return line[stop_1..stop_2]
  end
end
plan_trip(N, "23rd", N, "34th" )
plan_trip(N, "34th", N, "23rd" )
plan_trip(N, "Times Square", Six, "33rd" )
plan_trip(L, "8th", Six, "Astor Place" )
