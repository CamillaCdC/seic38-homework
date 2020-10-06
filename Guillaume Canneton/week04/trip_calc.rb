def trip_calculator
  puts "This is a very accurate trip calculator"
  puts "-=" * 40
  print "Please enter the distance of your trip (in miles): "
  distance = gets.to_f
  print "What is your average speed (in miles per hour): "
  speed = gets.to_f
  print "What is your gas consumption (in miles per gallon): "
  gas_consumption = gets.to_f
  print "What is the price per gallon of gas (in gallon): "
  gas_price = gets.to_f


  trip_time_hour = ( distance / speed ).floor
  trip_time_minute = ( ( ( ( distance % speed ) / speed * 100.0 ).round / 100.0 ) * 60 ).round

  trip_cost = ( ( ( distance / gas_consumption ) * gas_price ) * 100.0 ).round / 100.0


  puts " Your trip will cost $#{trip_cost} for a total of #{trip_time_hour}H#{trip_time_minute}"
end

trip_calculator
