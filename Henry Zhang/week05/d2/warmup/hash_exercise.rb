require 'pry'


# # Array and Hash access

# ### A. Given the following data structure:

# ```ruby
 a = ["Anil", "Erik", "Jonathan"]
# ```

# 1. How would you return the string `"Erik"`?
a[1]
# 1. How would you add your name to the array?

a[3] = "Liz"
a.unshift "Henry"
a.push "Chico"
a << "Bindo"   # ruby way
p a

# ### B. Given the following data structure:

# ```ruby
 h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# ```
h.keys

# 1. How would you return the string `"One"`?
h[1]
h[3-2]  # the same above
# 1. How would you return the string `"Two"`?

h[ :two ]
# 1. How would you return the number `2`?
h[ "two" ]
# 1. How would you add `{3 => "Three"}` to the hash?
h[ 3 ] = "Three"
# 1. How would you add `{:four => 4}` to the hash?

h[ :four ] = 4
h.merge({:four => 4})   # only create new hash, but origin doesnt change

# ### C. Given the following data structure:

# ```ruby
 is = {true => "It's true!", false => "It's false"}
# ```

# 1. What is the return value of `is[2 + 2 == 4]`?
"It is true"
# 1. What is the return value of `is["Erik" == "Jonathan"]`?
"It is false"
# 1. What is the return value of `is[9 > 10]`?
"It is false"
# 1. What is the return value of `is[0]`?
nil
# 1. What is the return value of `is["Erik"]`?
nil



# ### D. Given the following data structure:

# ```ruby
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}
# ```
binding.pry

# 1. How would you access Jonathan's Twitter handle (i.e. the string `"tronathan"`)?
users.keys
users["Jonathan"].keys
users[ "Jonathan" ][ :twitter ]

# 1. How would you add the number `7` to Erik's favorite numbers?
users["Erik"][:favorite_numbers].class
users["Erik"][:favorite_numbers] << 7

# 1. How would you add yourself to the users hash?

# users.default = {}
users["Henry"] = {}

# 1. How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]

# 1. How would you return the smallest of Erik's favorite numbers?

users["Erik"][:favorite_numbers].sort.shift
users["Erik"][:favorite_numbers].sort.first
users["Erik"][:favorite_numbers].min  # same as above

# 1. How would you return an array of Anil's favorite numbers that are also even?

users["Anil"][:favorite_numbers].select do |n|
    n.even?
end

users["Anil"][:favorite_numbers].select {|n| n.even?} # same as above 


# 1. How would you return an array of the favorite numbers common to all users?

Anil_number = users["Anil"][:favorite_numbers]
Erik_number = users["Erik"][:favorite_numbers]
Jonathan_number = users["Jonathan"][:favorite_numbers]

users.values.map { |info| info[:favorite_numbers]}.inject &:&

Anil_number & Erik_number & Jonathan_number


# 1. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

users.values.map { |info| info[:favorite_numbers]}.flatten.uniq.sort


new_number = Anil_number | Erik_number | Jonathan_number
new_number.sort
