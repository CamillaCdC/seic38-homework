# lr.rb - A ruby line reader (equivilant to cat)
# Usage: ruby lr.rb somefile.txt

# [10] Make a program that prints each line of its input that mentions fred. (It shouldn’t do anything for other lines of input.) Does it match if your input string is Fred, frederick, or Alfred? Make a small text file with a few lines mentioning "fred flintstone" and his friends, then use that file as input to this program and the ones later in this section.
#
# [6] Modify the previous program to allow Fred to match as well. Does it match now if your input string is Fred, frederick, or Alfred? (Add lines with these names to the text file.)
#
# [6] Make a program that prints each line of its input that contains a period (.), ignoring other lines of input. Try it on the small text file from the previous exercise: does it notice Mr. Slate?
#
# [8] Make a program that prints each line that has a word that is capitalized but not ALL capitalized. Does it match Fred but neither fred nor FRED?
#
# [8] Make a program that prints each line that has a two of the same nonwhitespace characters next to each other. It should match lines that contain words such as Mississippi, Bamm-Bamm, or llama.
#
# [8] Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.

ARGF.each do |line|
  # puts line.chars.shuffle.join ''
  # puts line.reverse
  # puts line if line =~ /e/
  # puts line if line =~ /fred/
  # puts line if line =~ /[fF]red/

  # puts line if line =~ /\./
  # or
  # puts line if line =~ /[.]/

  # puts line if line =~ /[A-Z][a-z]+\b/
  # puts line if line =~ /[A-Z][a-z]/

  # puts line if line =~ /(.)\1/ # Parentheses: capturing, \1 is a back reference

  puts line if line =~ /fred/ && line =~ /wilma/
end

# [aeiou] # ^ - caret: not
# [^aeiou]

require 'pry'
# binding.pry
