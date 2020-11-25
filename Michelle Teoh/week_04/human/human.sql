CREATE TABLE human (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  parts TEXT,
  image TEXT
);

--seed data
INSERT INTO human (name, parts) VALUES ('pedal', 'foot');
INSERT INTO human (name, parts) VALUES ('oral', 'mouth');
