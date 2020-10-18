require 'pry'


# # MTA Lab

# ## Objectives:
# * Apply your knowledge of Ruby to solve a real world problem.
# * Get really good at array manipulation.

# #### Activity
# * Create a program that models a simple subway system.

# * The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

# ```ruby
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.

# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# ```

# * There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

# \ is space that connect two words
line_N = %w(Times\ Square 34th 28th 23rd Union\ Square 8th)
line_L = %w(8th 6th Union\ Square 3rd 1st)
line_6 = %w(Grand\ Central 33rd 28th 23rd Union\ Square Astor\ Place)

line_N_part1 = line_N.take 5  # way first
line_N_part2 = line_N.last     # way  second

line_L_part1 = line_L[0..2]   # way second 
line_L_part2 = line_L.drop (3)   # way third

line_6_part1 =  line_6.take 5
line_6_part2 = line_6.pop   # way fourth  .origin array changed

#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

def tripSolving ( trip_start_line, begin, destination )

    stops = 0
    startIndex =0
    endIndex = 0   
    new_trip = []
  
    trip.each_with_index do |station, index|
        if  #{station} == #{begin}
            startIndex = #{index}
            until #{station} == #{destination}
                new_trip.push #{station}
            end
        end
end
binding.pry

# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)