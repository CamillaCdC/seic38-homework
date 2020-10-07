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
#

require "pry"

trainLines = {
  "lineN" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "lineL" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "line6" =>  ["Grand Central", "33rd", "28th", "23rd", "Union Square","Astor Place"]
}

def plan_trip (startLine, startStop, endLine, endStop )


#get index of startPoint, loop through line from startPoint to endLine and push to new arrays
journey1 = []
journey2 = []

# Index fo start / stop on star / end line
startIndex = startLine.index(startStop)
endIndex = endLine.index(endStop)

# Creates a new array only containing stops to travel through
newStartLine = startLine.slice(startIndex, endIndex)

# Index of Union Square on start / end line
unionSquareStart = startLine.index("Union Square")
unionSquareEnd = endLine.index("Union Square")

# New array only containing strop to travel through if changing lines
newStartLineChange = startLine.slice(startIndex, unionSquareStart)

# New Array for travelling in reverse, down the line
newStartLineChangeReverse = startLine.slice(unionSquareStart, startIndex)

# New array only containing strop to travel through if changing lines
newEndLineChange = endLine.slice(endIndex, unionSquareEnd)
puts "NEW END #{newEndLineChange}"
puts "NEW START #{newStartLineChange}"

##### If startline and endline is the same line #####
if startLine == endLine

# if the start stop is smaller than the end stop index, loop through.
  if startIndex <= endIndex


    newStartLine.each do |stop| ## logging all from starLine

      if stop.include?("Union Square")
          puts "You have arrived at Union Square"
      end

      if startLine.index(stop) <= endIndex
        journey1.push(stop)
      end

  end
end



# If the start stop is greater than the end stop index, loop through.
if startIndex >= endIndex

  startLine.each do |stop|
puts stop
if startLine.index(stop) >= endIndex
    journey2.push(stop)
  end
end
end

puts "You must journey through: #{journey1}"
puts "Journey2: #{journey2.reverse}"
end


##### If startline and endline are not the same line #####

if startLine != endLine
  ## print everything out until union square then change at union square and print rest of
if startIndex > unionSquareStart
  newStartLineChangeReverse.each do |stop|
    if !stop.include?'Union Square'
      journey1.push(stop)
    elsif stop.include?'Union Square'
      puts "You must change at Union Square"
      puts "You must journey through: #{journey1.reverse}"
  end
end
else
newStartLineChange.each do |stop|
# until stop == "Union Square"
# if stop.include?("Union Square")
# puts "You have arrived at Union Square"
if !stop.include?'Union Square'
  journey1.push(stop)
elsif stop.include?'Union Square'
  puts "You must journey through: #{journey1}"
  puts "You must change at Union Square"
end

end
end
puts "You must journey through: #{journey1}"



# answer = newStartLineChange.concat newEndLineChange.reverse

newEndLineChange.each do |stop|
  if !stop.include?'Union Square'
    journey2.push(stop)
 elsif stop.include? 'Union Square'
puts "You must change at Union Square"
end
# puts "You must journey through: #{journey1}"
end
  if endIndex < unionSquareEnd
   puts "You must journey through: #{journey2.reverse}"
 else
      puts "You must journey through: #{journey2}"
    end
# startLine.each do |stop|
end

# if travelling backwards another if statement that doesn reverse journey2.



end
# plan_trip(trainLines["lineN"], "34th", trainLines["lineN"], "8th")
# plan_trip(trainLines["lineL"], "6th", trainLines["lineL"], "1st")
# plan_trip(trainLines["lineL"], "3rd", trainLines["lineL"], "6th")
# plan_trip(trainLines["lineL"], "1st", trainLines["line6"], "33rd")
plan_trip(trainLines["lineN"], "Times Square", trainLines["line6"], "33rd")


## issue is sometimes showing up in reverse
