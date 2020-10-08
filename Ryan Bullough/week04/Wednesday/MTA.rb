$lines = {
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  "6": ["Grand Central", "33rd", "23rd", "Union Square", "Astor Place"],
}

def plan_trip
  print "Enter starting line \nN/L/6: "
  start_line_input = gets.chomp.upcase.to_sym
  starting_line = $lines[start_line_input]
  union_start = starting_line.index "Union Square"
  
  print "Enter starting station \n#{ starting_line.join(', ') }: "
  starting_station = gets.chomp.split.map(&:capitalize).join(' ')
  start_index = starting_line.index starting_station
  
  print "Enter destination line \nN/L/6: "
  destination_line_input = gets.chomp.upcase.to_sym
  destination_line = $lines[destination_line_input]
  union_end = destination_line.index "Union Square"
  
  print "Enter destination station \n#{ destination_line.join(', ') }: "
  destination_station = gets.chomp.split.map(&:capitalize).join(' ')
  destination_index = destination_line.index destination_station
  
  return_string = """You must travel through the following stops on the #{start_line_input.to_s} line: 
"""

  if starting_line == destination_line # We're only travelling on one line
    if start_index < destination_index
      return_string += starting_line[start_index..destination_index].join(', ')
    else
      return_string += starting_line[destination_index..start_index].reverse.join(', ')
    end
  else # Our trip travels through 2 lines
    if start_index < union_start  # Union is further down the line from where we start
      return_string += starting_line[start_index...union_start].join(', ')
      return_string += "\nChange at Union Square\nYour journey continues through to the following stops on the #{destination_line_input.to_s} line:"
      if destination_index < union_end # We travel back down the line to our destination
        return_string += "\n#{destination_line[destination_index...union_end].reverse.join(', ')}"
      else # We travel further up the line to our destination
        return_string += "\n#{destination_line[(union_end + 1)..destination_index].join(', ')}"
      end
    else # Union ISNT further down the line from where we start
      return_string += starting_line[(union_start + 1)..start_index].reverse.join(', ')
      return_string += "\nChange at Union Square\nYour journey continues through to the following stops on the #{destination_line_input.to_s} line:"
      if destination_index < union_end # We travel back down the line to our destination
        return_string += "\n#{destination_line[destination_index...union_end].reverse.join(', ')}"
      else # We travel further up the line to our destination
        return_string += "\n#{destination_line[(union_end + 1)..destination_index].join(', ')}"
      end
    end
  end
  puts return_string
end
plan_trip
