CREATE TABLE films (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  director TEXT,
  genre TEXT,
  year INTEGER,
  cover TEXT --url as text for image
);

-- seed data

INSERT INTO films (title, director, genre, year) VALUES ('Raging Bull', 'Martin Scorsese', 'Sport/Drama', '1980');
INSERT INTO films (title, director, genre, year) VALUES ('Stand By Me', 'Rob Reiner', 'Drama', '1986');
