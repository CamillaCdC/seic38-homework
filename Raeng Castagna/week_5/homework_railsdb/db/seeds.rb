Mountain.destroy_all # stops us replicating in developemnt

Mountain.create :name => 'Himalayan Mountains', :category => 'Fold Mountain'
Mountain.create :name => 'Alps', :category => 'Fold Mountain'
Mountain.create :name => 'Sierra Nevada', :category => 'Fault-block Mountain'

puts "#{ Mountain.count} mountains created."
