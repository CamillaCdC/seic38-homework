CREATE TABLE recipes(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  mealtype TEXT,
  image TEXT
);

INSERT INTO recipes (name, mealtype) VALUES ('Satay Chickpea', 'Main');
