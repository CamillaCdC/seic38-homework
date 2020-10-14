# this ruby is a very simple one, that you can pass just one operation to it
# exp: 2+3 => 5
# exp: 2+3-2 : does not work. it is gonna take just the first operation which -
# shows up

# Introducing the ruby to the user
def farid_ruby
  puts "Welcome to Farid Ruby"
  puts "\nStart using my calculator"
  puts "\nYou can do calculations in this ruby"
  puts "\nIf you want to come out of this ruby, enter [q]"
  print "\n> "
end

farid_ruby

# any simple operation can be passed
user_operation = gets.chomp.downcase

# this will gonna check if we want to add strings or if we want to add numbers
class String
  def numeric?
    Float(self) != nil rescue false
  end
end

# the user can be comes out this ruby by entering [q]
while user_operation != 'q'

  if user_operation.include?('+')
    chars = user_operation.split('+')
    numeric = true

    # this will gonna check if there is any string or not
    chars.each do |i|
      if !i.numeric?
        numeric = false
      end
    end

    # sum of numbers
    if numeric

      result = 0
      chars.each {|i| result += i.to_f}
    # sum of/with strings
    else
      result = ''
      chars.each {|i| result = result + i}
    end

  # subtraction
  elsif user_operation.include?('-')
    numbers = user_operation.split('-')
    result = numbers[0].to_f
    numbers[1..numbers.length].each {|i| result = result - i.to_f}

  # power
  elsif user_operation.include?('**')
    numbers = user_operation.split('**')
    result = numbers[numbers.length-1].to_f
    (numbers.length-2).downto(0) {|i| result = numbers[i].to_f**result}


  # multiplying
  elsif user_operation.include?('*')
    numbers = user_operation.split('*')
    result = 1
    numbers.each {|i| result = result * i.to_f}

  # division
  elsif user_operation.include?('/')
    numbers = user_operation.split('/')
    result = numbers[0].to_f
    numbers[1..numbers.length].each {|i| result = result / i.to_f}

  end

  puts "\n#{result}"
  print "\n> "
  user_operation = gets.chomp.downcase
end
