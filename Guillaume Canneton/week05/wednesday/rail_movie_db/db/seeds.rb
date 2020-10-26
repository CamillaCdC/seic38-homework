# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Movie.destroy_all
Movie.create(:title => 'Big Fish', :director => 'Tim Burton', :release => '2003-12-04', :awards => '69 nominations', :length => 125, :image => 'https://m.media-amazon.com/images/M/MV5BMmU3NzIyODctYjVhOC00NzBmLTlhNWItMzBlODEwZTlmMjUzXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX509_.jpg')
Movie.create(:title => 'Apollo 13', :director => 'Ron Howard', :release => '1995-06-22', :awards => '28 wins 59 nominations', :length => 140, :image => 'https://m.media-amazon.com/images/M/MV5BNjEzYjJmNzgtNDkwNy00MTQ4LTlmMWMtNzA4YjE2NjI0ZDg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY861_.jpg')
Movie.create(:title => 'Alien', :director => 'Ridley Scott', :release => '1979-05-25', :awards => '17 wins 22 nominations', :length => 117, :image => 'https://m.media-amazon.com/images/M/MV5BMmQ2MmU3NzktZjAxOC00ZDZhLTk4YzEtMDMyMzcxY2IwMDAyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY869_.jpg')
Movie.create(:title => 'The Big Blue', :director => 'Luc Besson', :release => '1988-05-11', :awards => '3 wins 6 nominations', :length => 168, :image => 'https://m.media-amazon.com/images/M/MV5BOTg5NGE1MjYtZjU3Zi00NWZhLTg4ZmEtMDI0YzMwN2Y2NDIxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX650_.jpg')
Movie.create(:title => 'Pulp Fiction', :director => 'Quentin Tarantino', :release => '1994-05-21', :awards => '70 wins 75 nominations', :length => 154, :image => 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX1055_.jpg')


puts "#{ Movie.count } movies created."


Director.destroy_all
Director.create(:name => 'Quentin Tarantino', :filmo => '21 movies', :dob => '1963-03-27', :awards => '165 wins 275 nominations', :nationality => 'American', :image => 'https://m.media-amazon.com/images/M/MV5BMTgyMjI3ODA3Nl5BMl5BanBnXkFtZTcwNzY2MDYxOQ@@._V1_UY834_.jpg')
Director.create(:name => 'Ridley Scott', :filmo => '53 movies', :dob => '1937-11-30', :awards => '44 wins 94 nominations', :nationality => 'English', :image => 'https://m.media-amazon.com/images/M/MV5BMGJkOGM5OWEtNDYxMy00Njg4LWExNjAtY2ZlNWNlNzVhNDk4XkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_UY853_.jpg')
Director.create(:name => 'Martin Scorsese', :filmo => '66 movies', :dob => '1942-11-17', :awards => '166 wins 279 nominations', :nationality => 'American', :image => 'https://m.media-amazon.com/images/M/MV5BMTcyNDA4Nzk3N15BMl5BanBnXkFtZTcwNDYzMjMxMw@@._V1_UX256_.jpg')
Director.create(:name => 'Luc Besson', :filmo => '31 movies', :dob => '1959-03-18', :awards => '28 wins 27 nominations', :nationality => 'French', :image => 'https://m.media-amazon.com/images/M/MV5BMTAwNzE4Njg0NTFeQTJeQWpwZ15BbWU3MDk0MDEyMDc@._V1_UY901_.jpg')
Director.create(:name => 'Francis Ford Coppola', :filmo => '36 movies', :dob => '1939-04-07', :awards => '48 wins 54 nominations', :nationality => 'American', :image => 'https://m.media-amazon.com/images/M/MV5BMTM5NDU3OTgyNV5BMl5BanBnXkFtZTcwMzQxODA0NA@@._V1_UY851_.jpg')


puts "#{ Director.count } directors created."


Actor.destroy_all
Actor.create(:name => 'Hugh Jackman', :filmo => '60 movies', :dob => '1968-10-12', :awards => '31 wins 93 nominations', :nationality => 'Australian', :image => 'https://m.media-amazon.com/images/M/MV5BNDExMzIzNjk3Nl5BMl5BanBnXkFtZTcwOTE4NDU5OA@@._V1_UY851_.jpg')
Actor.create(:name => 'Gerard Depardieu', :filmo => '242 movies', :dob => '1948-12-27', :awards => '25 wins 36 nominations', :nationality => 'French', :image => 'https://m.media-amazon.com/images/M/MV5BMTgwMDU4OTk5MF5BMl5BanBnXkFtZTYwNTUwODY0._V1_UX258_.jpg')
Actor.create(:name => 'Denzel Washington', :filmo => '60 movies', :dob => '1954-12-28', :awards => '82 wins 170 nominations', :nationality => 'American', :image => 'https://m.media-amazon.com/images/M/MV5BMjE5NDU2Mzc3MV5BMl5BanBnXkFtZTcwNjAwNTE5OQ@@._V1_UY960_.jpg')
Actor.create(:name => 'Sean Connery', :filmo => '94 movies', :dob => '1930-08-25', :awards => '37 wins 29 nominations', :nationality => 'Scottish', :image => 'https://m.media-amazon.com/images/M/MV5BMzcwNTM4MzctYjQzMi00NTA2LTljYWItNTYzNmE1MTYxN2RlXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_UY997_.jpg')
Actor.create(:name => 'Charlize Theron', :filmo => '66 movies', :dob => '1975-08-07', :awards => '65 wins 133 nominations', :nationality => 'South African', :image => 'https://m.media-amazon.com/images/M/MV5BMTk5Mzc4ODU0Ml5BMl5BanBnXkFtZTcwNjU1NTI0Mw@@._V1_UX300_.jpg')


puts "#{ Actor.count } actors created."
