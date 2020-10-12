@lines = {
  :lineN => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  :lineL => ['8th','6th','Union Square','3rd','1st'],
  :line6 => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}
# returns all the stops encountered on a single line
def single_line (line, stop1, stop2)
  line = @lines[line.to_sym]
  start = line.find_index(stop1)
  finish = line.find_index(stop2)
  if start < finish
    line[start + 1, finish]
  else
    reversed_line = line.reverse
    start = reversed_line.find_index(stop1)
    finish = reversed_line.find_index(stop2)
    reversed_line[start + 1, finish]
  end
end
# main method
def plan_trip (line1, stop1, line2, stop2)
  if line1 == line2
    stops = single_line(line1, stop1, stop2)
    puts "You must travel through the following stops: #{ stops.join(', ') }. #{ stops.size } stops in total."
  else
    stops_a = single_line(line1, stop1, 'Union Square')
    stops_b = single_line(line2, 'Union Square', stop2)
    puts "You must travel through the following stops: #{ stops_a.join(', ') }.\nChange at Union Square. \nYour journey continues through the following stops: #{ stops_b.join(', ') }. \nA total of #{ stops_a.size + stops_b.size } stops."
  end
end

plan_trip('lineN', 'Union Square', 'lineN', 'Times Square')
plan_trip('line6', 'Grand Central', 'lineN', 'Times Square')
