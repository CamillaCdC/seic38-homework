CREATE TABLE cameras (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  manufacturer TEXT,
  model TEXT,
  focus_type TEXT,
  medium TEXT,
  image TEXT --URL for a photo
);


--seed data
INSERT INTO cameras (manufacturer, model, focus_type, medium) VALUES ('Nikon', 'F2', 'SLR', '35mm Film');
INSERT INTO cameras (manufacturer, model, focus_type, medium) VALUES ('Bronica', 'ETRS-i', 'SLR', 'Medium Format Film');
