# MTA Ruby

MTA = {

 :lineN => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
 :lineL => ["8th", "6th", "Union Square", "3rd", "1st" ],
 :line6 => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}

def get_line 
	print "line (N, L, 6): "
	entry_line = "line#{gets.chomp}".to_sym
end

def get_stop(line)
	print "Stop #{MTA[line]}: "
	entry_stop = gets.chomp
	until MTA[line].include? entry_stop 
		print "Invalid stop, try again: "
		entry_stop = gets.chomp
	end
	entry_stop
end

def get_index(line, stop)
	MTA[line].index(stop)
end

def sort(stop_index, change_index)
	sort = [stop_index, change_index].sort
end

#Get user input
print "Entry"
entry_line = get_line
entry_stop = get_stop(entry_line)
print "Exit "
exit_line = get_line
exit_stop = get_stop(exit_line)

#Record index
entry_stop_index = get_index(entry_line, entry_stop)
exit_stop_index = get_index(exit_line, exit_stop)

#Get index to change
entry_change_index = get_index(entry_line, "Union Square")
exit_change_index = get_index(exit_line, "Union Square")

#Sort entry to find max and min
sort_entry = sort(entry_stop_index, entry_change_index)
sort_exit = sort(exit_stop_index, exit_change_index)

#Pull array out of entry line using sorted array
first_line = MTA[entry_line][sort_entry.first..sort_entry.last] 
second_line = MTA[exit_line][sort_exit.first..sort_exit.last]

#Reverse line if going backwards
first_line.reverse! if sort_entry.first == entry_change_index
second_line.reverse! if sort_exit.last == exit_change_index

#Print to console
print "You must travel along line #{entry_line.to_s[4]} through: \n"
first_line.each { |stop| puts "#{stop}" }

unless entry_line == exit_line
	print "Change at Union Square\n"
	print "You must travel along line #{exit_line.to_s[4]} through: \n"
end
	second_line.shift
	second_line.each { |stop| puts "#{stop}" }