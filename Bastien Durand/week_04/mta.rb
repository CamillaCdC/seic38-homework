

# p "TRAINLINE KEYS HERE #{trainLines.keys}"
# p trainLines.each {
#   |val| puts val
# }

# puts "LineN, LineL, Line5 "
# startLine = gets.chomp
# puts "BOARDING FROM: #{startLine}"
#
# puts "What station are you getting on? "
# start = gets.chomp
# puts "BOARDING FROM #{startLine} #{start}"
#
# puts "LineN, LineL, Line5 "
# exitLine = gets.chomp
# puts "LINE DESTINATION: #{exitLine}"
#
# puts "What station will you be exiting from"
# exit = gets.chomp
# puts "#{startLine} #{start} TRAVELING TO: #{exitLine} #{exit}"


trainLines = {
  "lineN" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "lineL" => ["8th", "6th", "Union Square", "3rd,", "1st"],
  "line6" =>  ["Grand Central", "33rd,", "28th", "23rd", "Union Square,","Astor Place"]
}
a = trainLines.flatten

def plan_trip (startLine, startStop, endLine, endStop )
#get index of startPoint, loop through line from startPoint to endLine and push to new arrays
journey1 = []
journey2 = []

startIndex = startLine.index(startStop)
endIndex = startLine.index(endStop)
lineToLog = startLine.slice(startIndex, endIndex)

# if endLine != endLine


##### If startline and endline is the same line #####

if startLine == endLine

# if the start stop is smaller than the end stop index, loop through.

if startIndex < endIndex
    lineToLog.each do |stop| ## logging all from starLine
if stop.include?("Union Square")
  puts "Change at Union Square"
end
  if startLine.index(stop) <= endIndex

    journey1.push(stop)
  end
    end
  end

# If the start stop is greater than the end stop index, loop through.

if startLine.index(startStop) >= endIndex
  startLine.each do |stop|
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

# startLine.each do |stop|
#   until stop == "Union Square"

# if stop.include?("Union Square")
# puts "You have arrived at Union Square"


return
end
end

plan_trip(trainLines["lineN"], "Times Square", trainLines["lineN"], "8th")
# plan_trip(trainLines["lineN"], "8th", trainLines["lineN"], "Times Square")
# plan_trip(trainLines["lineN"], "6th", trainLines["lineN"], "Times Square")
