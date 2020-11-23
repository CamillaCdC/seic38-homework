# 1 1 2 3 5 8 13 21 # this is the sequence

# fib(n) = fib(n-1) + fib(n-2)
#
# fib(10) = fib(9) = fib(8)

def fibonacci_iterative(n)
  a = 1
  b = 1

while n > 2 # base case: fib(1) = 1, fib(2) = 1
    a, b = b, a+b # mutation: parrale assignment
    n -= 1         # mutational: movet towards the end
  end

  b
end

# recursion: fib(n) = fib(n-1) + fib(n-2)
def fibonacci_recursive(n)
  if n ==1 || n == 2
    1
  else
    fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
  end
end

# memoisation
def fib_memo(n)
  @fib ||= {} # @fib = @fib ||  {} # create the @fib hash unless it already exists.
  if @fib[n]
    @fib[n] # already know that!
  elsif n == 1 || n == 2
    1 # base case
  else
    result = fib_memo(n-1) + fib_memo(n-2)
    @fib[n] = result # memoisation
    result
  end
end

# faster recursion: iterative recursion
def fib(n, a=1, b=1)
  if n == 1 || n == 2
    b
  else
    fib(n-1, b, a+b) # mystical
  end
end



# Bonus recursion homework:
# memoisation
# faster recursion: iterative recursion


require 'pry'
binding.pry
