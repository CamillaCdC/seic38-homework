# lr.rb - A ruby line reader (equivilant to cat)
# Usage: ruby lr.rb somefile.txt

ARGF.each do |line|
  # puts line.chars.shuffle.join ''
  # puts line.reverse
  # puts line if line =~ /e/
  puts line if line =~ /fred/
end



require 'pry'
# binding.pry
