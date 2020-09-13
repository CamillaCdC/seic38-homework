
file = File.open("names.txt")

names = file.read

names_arr = names.split("\n")

names_arr.each { |name| Dir.mkdir(name) }
