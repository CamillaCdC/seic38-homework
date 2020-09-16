
file = File.open("names.txt")

names = file.read

names_arr = names.split("\n")

# names_arr.each do |name| 
#     Dir.mkdir(name) 
#     File.new(".txt", "w")
# end

names_arr.each do |name|
    Dir.chdir(name)
    # File.new("empty.txt", "w")
    File.delete(".txt")
    Dir.chdir("..")
end