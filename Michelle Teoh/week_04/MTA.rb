puts train_line = """ \n
                        HELLO! WHERE ARE YOU GOING TO? \n
                                  TRAIN LINE\n
                           -------- N LINE -------\n
          8th -> Union Sqaure -> 23rd -> 28th -> 34th -> Time Square\n

                           -------- L LINE -------\n
                    8th -> 6th -> Union Sqaure -> 3rd -> 1st\n

                           -------- 6 LINE -------\n
              Astor Place -> 23rd -> 28th -> 33rd -> Grand Cental\n\n\n
              """

map = {
  :nLine => ['8th', 'Union Square','23rd ', '28th', '34th' , 'Time square'],
  :lLine => [ '8th', '6th', 'Union Square', '3rd', '1st' ],
  :sixLine => ['Astor Place','Union Square','23rd', '28th', '33rd', 'Grand Central']
}

print "Enter your start Train Line -> "
startTrainLine = gets.chomp
map.each do |x,y|
  puts x if startTrainLine == y
end

puts = startTrainLine[map]
print "Enter your start Location -> "
startStop = gets.downcase

print "Enter your destination Train Line -> "
stopTrainLine = gets.downcase

print "Enter your destination location ->"
stopStop = gets.downcase

def trip_planner(startTrainLine, startStop, stopTrainline, stopStop)
  startline = startTrainLine
  startStation = startStop
  stopLine = stopTrainLine
  stopStation = stopStop
  return "#{startline}, #{startStation}, #{stopLine}, #{stopStation}"
end

puts trip_planner
