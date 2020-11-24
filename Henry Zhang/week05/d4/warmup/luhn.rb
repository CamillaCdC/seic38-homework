require'pry'


def luhn_fomula number
    new_number=[]
    binding.pry
    number.to_a.each_with_index do |n,index|

        if index.odd?
            new_number.unshift @n 
        else
            new_number.unshift @n * 2 - 9    
        end
    if new_number.sum % 10 == 0   
        puts "it is vilad"
    else
        puts "not yet"
    end 
end
end
luhn_fomula 2345

