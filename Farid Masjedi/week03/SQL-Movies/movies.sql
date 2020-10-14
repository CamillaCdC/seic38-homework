-- creating a information table of movies
CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  year INTEGER,
  director TEXT,
  imdb TEXT, -- url to imdb
  img TEXT -- url for cover of a movie
);


-- seed data
INSERT INTO movies (name,year,director,imdb,img) VALUES ('M',1931,'Fritz Lang','https://www.imdb.com/title/tt0022100','https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_.jpg');
INSERT INTO movies (name,year,director,imdb,img) VALUES ('Lost Highway',1997,'David Lynch','https://www.imdb.com/title/tt0116922','https://m.media-amazon.com/images/M/MV5BYWUxOWY4NDctMDFmMS00ZTQwLWExMGEtODg0ZWNhOTE5NzZmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg');
INSERT INTO movies (name,year,director,imdb,img) VALUES ('The Seventh Continent',1989,'Michael Haneke','https://www.imdb.com/title/tt0098327','https://m.media-amazon.com/images/M/MV5BOTg5YTg2MTgtYjE0Ni00YjQ1LTllYzQtMWNmYTYzNDUzMWEyXkEyXkFqcGdeQXVyMTA5MTg3NzY@._V1_.jpg');
INSERT INTO movies (name,year,director,imdb,img) VALUES ('The Match Factory Girl',1990,'Aki Kaurismäki','https://www.imdb.com/title/tt0098532','https://m.media-amazon.com/images/M/MV5BMmM1ZTZhNDUtYzBkNi00YzQ0LWEyZjItM2M5OTI2ZTU0MDlkXkEyXkFqcGdeQXVyMjI0MjMwMzQ@._V1_SY1000_CR0,0,704,1000_AL_.jpg');
INSERT INTO movies (name,year,director,imdb,img) VALUES ('Rashomon',1950,'Akira Kurosawa','https://www.imdb.com/title/tt0042876','https://m.media-amazon.com/images/M/MV5BMjEzMzA4NDE2OF5BMl5BanBnXkFtZTcwNTc5MDI2NQ@@._V1_.jpg');
INSERT INTO movies (name,year,director,imdb,img) VALUES ('Hiroshima Mon Amour',1959,'Alain Resnais','https://www.imdb.com/title/tt0052893','https://m.media-amazon.com/images/M/MV5BMzY2NTA1MzUwN15BMl5BanBnXkFtZTgwOTc4NTU4MjE@._V1_SY1000_SX675_AL_.jpg');
INSERT INTO movies (name,year,director,imdb,img) VALUES ('Endless Poetry',2016,'Alejandro Jodorowsky','https://www.imdb.com/title/tt4451458','https://m.media-amazon.com/images/M/MV5BY2RlY2JhYWUtYzQ3NS00ZmQwLWIzYzMtYWNlZjAwYTg4ZTA3XkEyXkFqcGdeQXVyMTcxNTYyMjM@._V1_SY1000_CR0,0,707,1000_AL_.jpg');
INSERT INTO movies (name,year,director,imdb,img) VALUES ('Faust',2011,'Aleksandr Sokurov','https://www.imdb.com/title/tt1437357','https://i.pinimg.com/564x/66/31/f2/6631f274f100a637e2cbd806befc9cbf.jpg');
INSERT INTO movies (name,year,director,imdb,img) VALUES ('Nostalgia',1983,'Andrei Tarkovsky','https://www.imdb.com/title/tt0086022','https://m.media-amazon.com/images/M/MV5BMmZmMjZhMmYtNmU5NC00MTc3LWIyZTEtMDg0MGI0MzJhZjVhXkEyXkFqcGdeQXVyMTIyNzY1NzM@._V1_SY1000_SX694_AL_.jpg');
