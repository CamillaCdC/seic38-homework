Course.destroy_all

Course.create :name => 'The Fitzroy Trek', :location => 'Patagonia, Argentina', :distance => '26km', :difficulty => '2/10', :days => 1
Course.create :name => 'Pays Dogon', :location => 'Mali', :distance => '20km', :difficulty => '3/10', :days => 3
Course.create :name => 'The Camino de Santiago', :location => 'Spain', :distance => '750km', :difficulty => '3/10', :days => 30
Course.create :name => 'The Long Range Traverse', :location => 'Canada', :distance => '35km', :difficulty => '9/10', :days => 4

puts "#{ Course.count } trek courses created."
