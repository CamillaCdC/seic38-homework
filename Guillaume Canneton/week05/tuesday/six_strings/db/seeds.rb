# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Guitar.destroy_all

Guitar.create :brand => 'Gibson', :model => 'Les Paul', :year => 1952, :image => 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Gibson_LP_Classic.png', :body => 'Mahogany', :pickups => 'Humbucker'
Guitar.create :brand => 'Fender', :model => 'Stratocaster', :year => 1954, :image => 'https://commons.wikimedia.org/wiki/File:Fender_Stratocaster_004.JPG', :body => 'Alder', :pickups => 'Single Coil'
Guitar.create :brand => 'Jackson', :model => 'Randy Rhoads', :year => 1981, :image => 'https://upload.wikimedia.org/wikipedia/commons/0/00/Rhoads_3.JPG', :body => 'Alder', :pickups => 'Humbucker'

puts "#{Guitar.count} guitars created."
