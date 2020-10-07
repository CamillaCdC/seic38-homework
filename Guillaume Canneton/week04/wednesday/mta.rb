require "pry"

puts "MTA Calculator"

print "Which line are you going to start your journey: "
line_start = gets.chomp
print "And what stop: "
stop_start = gets.chomp
print "On which line do you want to go: "
line_finish = gets.chomp
print "And what stop: "
stop_finish = gets.chomp

mta_map = {
  "6" => ['Astor Place','Union Square', '23rd', '28th', '33rd', 'Grand Central'],
  "L" => ['8th', '6th', 'Union Square', '3rd', '1st'],
  "N" => ['8th','Union Square', '23rd', '28th', '34th', 'Times Square']
}

if line_start == line_finish
  if stop_start == stop_finish
    puts "You don't need to take the subway!!!"
  elsif mta_map[line_start].index(stop_start) < mta_map[line_finish].index(stop_finish)
    journey = mta_map[line_start][mta_map[line_start].index(stop_start)..mta_map[line_start].index(stop_finish)]
  else
    journey = mta_map[line_start].reverse[mta_map[line_start].reverse.index(stop_start)..mta_map[line_start].reverse.index(stop_finish)]
  end
  puts "You must travel through the following stops on the #{line_start} line: #{journey[0..-2].join(", ")} until you arrive at #{mta_map[line_finish][mta_map[line_finish].index(stop_finish)]}."
  puts "#{journey.length} stops in total"
else
  connection_stop = "Union Square"

  if mta_map[line_start].index(stop_start) < mta_map[line_start].index(connection_stop)
    journey_start = mta_map[line_start][mta_map[line_start].index(stop_start)..mta_map[line_start].index(connection_stop)]
  else
    journey_start = mta_map[line_start].reverse[mta_map[line_start].reverse.index(stop_start)..mta_map[line_start].reverse.index(connection_stop)]
  end
  if mta_map[line_finish].index(stop_finish) > mta_map[line_finish].index(connection_stop)
    journey_finish = mta_map[line_finish][mta_map[line_finish].index(connection_stop)..mta_map[line_finish].index(stop_finish)]
  else
    journey_finish = mta_map[line_finish].reverse[mta_map[line_finish].reverse.index(connection_stop)..mta_map[line_finish].reverse.index(stop_finish)]
  end
  puts "You must travel through the following stops on the #{line_start} line: #{journey_start[0..-2].join(", ")}."
  puts "Change at #{connection_stop}."
  puts "Your journey continues through the following stops on the #{line_finish} line: #{journey_finish[1..-2].join(", ")} until you arrive at #{mta_map[line_finish][mta_map[line_finish].index(stop_finish)]}."
  puts "#{journey_start.length + journey_finish.length - 1 } stops in total"
  # puts "For your trip you will go trough #{journey_start[0..-2].join(", ")} on the #{line_start} line, you change at #{connection_stop} to take the #{line_finish} line, then you go trough #{journey_finish[1..-2].join(", ")} and you arrive at #{mta_map[line_finish][mta_map[line_finish].index(stop_finish)]}."
end


# binding.pry
