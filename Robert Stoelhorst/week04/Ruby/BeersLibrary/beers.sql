-- # PROGRAMS that run SQL
-- MySQL
-- Cassandra
-- Postgresql
-- SQLite3 (we will use during the course)
-- MS Access

-- CRUD opreration

-- Create INSERT
-- Read  SELECT
-- Update UPDATE
-- Delete DELETE

CREATE TABLE beers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  type TEXT,
  image TEXT -- URL for image of beer label
);

-- seed data
INSERT INTO beers (name, type) VALUES ('Stone & Wood', 'Pacific Ale');
INSERT INTO beers (name, type) VALUES ('Fat Yak', 'Pale Ale');
INSERT INTO beers (name, type) VALUES ('Corona', 'Cerveza');
