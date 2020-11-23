require 'pry'

#这个是创建数组   1 到 10 
num = (1..10).to_a 
# 这个是创建 10 个 1
Array.new 10, 1   # 这个是数组类的new 空格 逗号 1 


# ### 1. Create an array of the days of the week
# - Create a variable named `days_of_the_week` as an array of the following:
#     - Monday
#     - Tuesday
#     - Wednesday
#     - Thursday
#     - Friday
#     - Saturday
#     - Sunday

week = %w(Monday Tuesday Wednesday Thursday Friday Saturday Sunday)

p week  # program print
# 正数 
week[2]
#倒数
week[-2]


# 2. My calendar says the first day is Sunday...
# - Remove Sunday from the last postion and move it to the first position.  Use array methods.
# 这个写法是错误的
#week.pop.unshift

new_array = week.unshift week.pop
p new_array

# 3. Create a new array of the days of the week:
# - The first inner array should be the weekdays
# - The second inner array should be the weekend days

weekdays = week.take 5
weekend = week.rotate
# 把两个数组用 + 来连接
new_week = weekdays + weekend
# 把 创建一个新数组
week_parts = [weekend, weekdays] 

week_parts.each do |day|
    puts "it is #{ day }"
end

num = (1..12).to_a 
num.map do |n|
    n * 7
end




# ### 4. Remove either the weekdays or the weekends
# Your choice...
week_parts.pop

# ### 5. Sort the remaining days alphabetically

binding.pry

