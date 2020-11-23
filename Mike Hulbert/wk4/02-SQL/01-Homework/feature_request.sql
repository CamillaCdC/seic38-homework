CREATE TABLE request (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name TEXT,
  preferred_name TEXT,
  email TEXT,
  idea TEXT
);

INSERT INTO request (full_name, preferred_name, email, idea) VALUES ('Mike Hulbert', 'Mike', 'mike@emial.com', 'Complete project' )
