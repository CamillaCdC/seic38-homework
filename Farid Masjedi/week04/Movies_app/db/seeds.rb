# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Movie.destroy_all

Movie.create :title => 'Lost Highway',
             :year => '1997',
             :director => 'David Lynch'

puts "#{Movie.count} has been created"

Director.destroy_all

Director.create :name => 'David Lynch',
                :dob => '20-01-1946',
                :nationality => 'United States of America'

puts "#{Director.count} has been created"
