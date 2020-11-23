subway = {
  'N' => ['Times Square', '34th', 'n28th', 'n23rd', 'Union Square', 'n8th'],
  'L' => ['l8th', '6th', 'Union Square', '3rd', '1st'],
  'six' => ['Grand Central', '33rd', '6_28th', '6_23rd', 'Union Square', 'Astor Place']
}

leave_journey_planner = false
until leave_journey_planner == true do

  puts "What line are you starting with #{subway.keys}?"
  start_line = gets.chomp

  until subway.keys.include?(start_line) do
    puts "Invalid. Please re-enter #{subway.keys}"
    start_line = gets.chomp
  end
  puts "You're starting on " + start_line

  puts "What station are you leaving from #{subway[start_line]}?"
  start_station = gets.chomp
  until subway[start_line].include?(start_station) do
    puts "Invalid. Please re-enter #{subway[start_line]}"
    start_station = gets.chomp
  end
  puts "You're leaving from " + start_station

  puts "What line are you arriving on #{subway.keys}?"
  end_line = gets.chomp

  until subway.keys.include?(end_line) do
    puts "Invalid. Please re-enter #{subway.keys}"
    end_line = gets.chomp
  end
  puts "You're ending your journey on " + end_line

  puts "What station are you ending at #{subway[end_line]}?"
  end_station = gets.chomp

  until subway[end_line].include?(end_station) do
    puts "Invalid. Please re-enter #{subway[end_line]}"
    end_station = gets.chomp
  end
  puts "You're ending at " + end_station
  

  #if they are on the same line, find the difference between their indexes
  if start_line === end_line
    # print 'start station index: '+subway[:start_line].index(start_station)
    difference = subway[start_line].index(end_station) - subway[end_line].index(start_station)
    journeyLength = difference.abs
    Puts 'Your journey will be ' + journeyLength.to_s + 'stops.'
  else
    difference1 = subway[start_line].index('Union Square') - subway[start_line].index(start_station)
    puts 'First part of journey is ' + difference1.abs.to_s + ' stops'
    difference2 = subway[end_line].index(end_station) - subway[end_line].index('Union Square')
    puts 'Second part of journey is ' + difference2.abs.to_s + ' stops'
    journeyLength = difference1.abs + difference2.abs
    puts 'Total length of journey is '+ journeyLength.to_s + ' stops'
  end

  puts "Do you want to plan another journey? (Y/N)"
  continue_answer = gets.chomp
  if continue_answer=='N'
    leave_journey_planner=true
  end

end

exit
