
trainLines = {
  'lineN' => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'lineL' => ['8th', '6th', 'Union Square', '3rd', '1st'],
  'line6' => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

# p "TRAINLINE KEYS HERE #{trainLines.keys}"
# p trainLines.each {
#   |val| puts val
# }

# puts "What line are you getting on? "
# startLine = gets.chomp
# puts "BOARDING FROM: #{startLine}"
#
# puts "What station are you getting on? "
# start = gets.chomp
# puts "BOARDING FROM #{startLine} #{start}"
#
# puts "What Line will you be exiting from"
# exitLine = gets.chomp
# puts "LINE DESTINATION: #{exitLine}"
#
# puts "What station will you be exiting from"
# exit = gets.chomp
# puts "#{startLine} #{start} TRAVELING TO: #{exitLine} #{exit}"


def plan_trip (startLine, startStop, endLine, endStop )

journey1 = []
journey2 = []

startIndex = startLine.index(startStop)
endIndex = startLine.index(endStop)

p startIndex
p endIndex

startLine.each do |stop|
  if startLine.index(stop) <= endIndex
    puts stop
    journey1.push(stop)
  elsif startLine.index(stop) >= endIndex
    journey2.push(stop).reverse
  end
end
puts "Journey1: #{journey1}"
puts "Journey2: #{journey2}"
end
plan_trip(trainLines["lineN"], "34th", trainLines["lineN"], "23rd")
plan_trip(trainLines["lineN"], "8th", trainLines["lineN"], "Times Square")




# until index == 'Union Square'
# puts trainLines[:line1]
# end

# p trainLines[:line1][0]
# p trainLines[:line2][0]
# p trainLines[:line3][0]
