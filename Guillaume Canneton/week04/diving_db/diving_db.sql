CREATE TABLE diving_center (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  country TEXT,
  city TEXT,
  map TEXT,
  website TEXT
);

-- seed data
INSERT INTO diving_center (name, country, city, map, website) VALUES ("Cat's Inn Kerama", "Japan", "Zamami Island", "https://www.google.com/maps/@26.2288473,127.3033834,18.11z", "http://www.catsinnkerama.com");
