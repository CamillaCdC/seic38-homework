CREATE TABLE students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name TEXT,
  preferred_name TEXT,
  cohort TEXT,
  location TEXT,
  github TEXT
);

INSERT INTO students ( full_name, preferred_name, cohort, location, github) VALUES ('Mike Hulbert', 'Mike', 'SEIC38', 'Sydney', 'mhulbert85' );
