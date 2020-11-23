Mountain.destroy_all


Mountain.create :name => "Mount Kosciuszko", :countries => "Australia", :height => 2228
Mountain.create :name => "Mount Bogong", :countries => "Australia", :height => 1986
Mountain.create :name => "Matterhorn", :countries => "Switzerland", :height => 4478

puts "#{ Mountain.count } mountains created"
