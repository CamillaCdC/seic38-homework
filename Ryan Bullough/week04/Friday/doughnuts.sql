CREATE TABLE doughnuts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  type TEXT,
  shape TEXT,
  image TEXT,
  sampled BOOLEAN
);

INSERT INTO doughnuts (name, type, shape, image, sampled) VALUES ('Carrot Cake', 'Raised', 'Ring', 'https://cdn.shopify.com/s/files/1/0013/8235/0950/t/21/assets/68951556_2683654261644589_4104455945635636846_n.jpg?v=158612532261', 0);
INSERT INTO doughnuts (name, type, shape, image, sampled) VALUES ('Black Cake', 'Raised', 'Ring', 'https://cdn.shopify.com/s/files/1/0013/8235/0950/t/21/assets/69184484_910566735972876_2380575829334422048_n.jpg?v=1586125295377', 0);
INSERT INTO doughnuts (name, type, shape, image, sampled) VALUES ('Marshmallow Fluff & Jame', 'Raised', 'Filled', 'https://cdn.shopify.com/s/files/1/0013/8235/0950/t/21/assets/83056343_3695616370478877_7072069336220972530_n.jpg?v=1586125265763', 0);
INSERT INTO doughnuts (name, type, shape, image, sampled) VALUES ('Bubblegum', 'Raised', 'Ring', 'https://cdn.shopify.com/s/files/1/0013/8235/0950/t/21/assets/07b2b8f2-58f8-46bc-822b-a60cbe696b45.jpg?v=1586126040641', 0);
INSERT INTO doughnuts (name, type, shape, image, sampled) VALUES ('Cronut', 'Fancy', 'Ring', 'https://french-iceberg.com/wp-content/uploads/2019/08/cronuts-1024x768.jpg.webp', 1);
