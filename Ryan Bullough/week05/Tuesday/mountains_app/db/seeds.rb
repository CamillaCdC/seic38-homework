# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Mountain.destroy_all

Mountain.create :name => "Everest", :elevation => 8848, :location => "Tibet", :first_ascent => "29 May 1953", :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/540px-Everest_kalapatthar.jpg"
Mountain.create :name => "Mount Fuji", :elevation => 3775, :location => "Japan", :first_ascent => "663", :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/080103_hakkai_fuji.jpg/540px-080103_hakkai_fuji.jpg"
Mountain.create :name => "Mount Kilimanjaro", :elevation => 5895, :location => "Tanzania", :first_ascent => "6 October 1889", :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Mount_Kilimanjaro.jpg/540px-Mount_Kilimanjaro.jpg"
