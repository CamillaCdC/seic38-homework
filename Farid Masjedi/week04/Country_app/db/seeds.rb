# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Country.destroy_all

Country.create :name => 'Iran',
               :continent => 'Asia',
               :area => 1648195,
               :population => 83183741,
               :gdp => 458500,
               :hdi => 0.797
