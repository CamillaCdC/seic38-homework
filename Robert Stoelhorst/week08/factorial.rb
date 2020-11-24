# 5! = 5 * 4 * 3 * 2
#    = 5 * 4!
#           4 * 3!
#             3 * 2!
#
# # 20! = 20 * 19 * 18 * ...

def factorial_iterative(n)
  result = 1
  while n > 1
    result *= n # mutation: changing result
    n -= 1 # mutation: changing n
  end

  result
end

def factorial_recursive(n)
  if n <= 1
    1 # base case
  else
    n * factorial_recursive(n-1) # recursive: moving towards teh end condition (orbase case)

  end
end

require 'pry'
binding.pry
