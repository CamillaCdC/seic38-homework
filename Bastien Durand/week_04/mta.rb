

puts "LineN, LineL, Line5 "
startLine = gets.chomp
puts "BOARDING FROM: #{startLine}"

puts "What station are you getting on? "
start = gets.chomp
puts "BOARDING FROM #{startLine} #{start}"

puts "LineN, LineL, Line5 "
exitLine = gets.chomp
puts "LINE DESTINATION: #{exitLine}"

puts "What station will you be exiting from"
exit = gets.chomp
puts "#{startLine} #{start} TRAVELING TO: #{exitLine} #{exit}"

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
#
startIndex = startLine.index(startStop)
endIndex = endLine.index(endStop)
# Creates a new array only containing stops to travel through
newStartLine = startLine.slice(startIndex, endIndex)
unionSquareStart = startLine.index("Union Square")
unionSquareEnd = endLine.index("Union Square")
newStartLineChange = startLine.slice(startIndex, unionSquareStart)
newStartLineChangeReverse = startLine.slice(unionSquareStart, startIndex)
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
