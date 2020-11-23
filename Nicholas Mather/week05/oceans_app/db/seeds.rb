Ocean.destroy_all

Ocean.create :name => 'Arctic', :deepest_point => 5550, :area => 14056000
Ocean.create :name => 'Atlantic', :deepest_point => 8376, :area => 106460000
Ocean.create :name => 'Indian', :deepest_point => 7258, :area => 70560000

puts "#{ Ocean.count } oceans created"
