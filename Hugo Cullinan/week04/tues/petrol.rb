print "How far are you travelling(km): "
kms = gets.to_i

# kms per liter
print "Kms per liter: "
kms_per_liter = gets.to_i
print "How much is petrol per liter: "
price_per_liter = gets.to_i
# speed in km per hour
print "How fast(kmph): "
speed = gets.to_i

def cost (petrol_price, distance, distance_per_liter)
  litres_per_100km = 100 / distance_per_liter
  return "It will cost $#{((distance / 100) * litres_per_100km) * petrol_price} of petrol to reach your destination."
end
puts cost(price_per_liter, kms, kms_per_liter)
