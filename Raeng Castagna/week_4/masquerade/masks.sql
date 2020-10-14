CREATE TABLE masks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type TEXT,
  colour TEXT,
  image TEXT
);

-- seed data
INSERT INTO masks (type, colour) VALUES ('The Bauta', 'gold');
INSERT INTO masks (type, colour) VALUES ('The Columbia', 'Silver White');
INSERT INTO masks (type, colour) VALUES ('The Medico della Peste', 'white');
INSERT INTO masks (type, colour) VALUES ('The Volto', 'gold');
INSERT INTO masks (type, colour) VALUES ('The Pantalone', 'Silver');
INSERT INTO masks (type, colour) VALUES ('The Arlecchino', 'red');
INSERT INTO masks (type, colour) VALUES ('The Zanni', 'gold');
