Author.destroy_all

Author.create(:name => 'Ernest Hemingway', :nationality => 'American', :dob => '1899-07-21', :genre => 'Modernist', :image => 'https://www.nobelprize.org/images/hemingway-13096-portrait-medium.jpg')
Author.create(:name => 'Agatha Christie', :nationality => 'English', :dob => '1890-09-15', :genre => 'Murder Mystery', :image => 'https://www.biography.com/.image/t_share/MTE5NDg0MDU0OTI0MDY4MzY3/agatha-christie-9247405-1-402.jpg')
Author.create(:name => 'F. Scott Fitzgerald', :nationality => 'American', :dob => '1896-09-24', :genre => 'Modernist Fiction', :image => 'https://upload.wikimedia.org/wikipedia/commons/5/5c/F_Scott_Fitzgerald_1921.jpg')
Author.create(:name => 'Jane Austen', :nationality => 'English', :dob => '1775-12-16', :genre => 'Comedy of Manners', :image => 'https://cdn.britannica.com/12/172012-050-A9AFF8AF/Jane-Austen-Cassandra-engraving-portrait-1810.jpg')
Author.create(:name => 'Leo Tolstoy', :nationality => 'Russian', :dob => '1828-09-09', :genre => 'Epic', :image => 'https://www.gstatic.com/tv/thumb/persons/218434/218434_v9_ba.jpg')
Author.create(:name => 'William Shakespeare', :nationality => 'English', :dob => '1616-04-23', :genre => 'Tragedy', :image => 'https://www.gstatic.com/tv/thumb/persons/215023/215023_v9_ba.jpg')

puts "#{ Author.count } authors created."

Book.destroy_all

Book.create(:title => 'The Old Man and the Sea', :author => 'Ernest Hemingway', :genre => 'Nautical fiction', :year => '1952', :image => 'https://upload.wikimedia.org/wikipedia/en/7/73/Oldmansea.jpg')
Book.create(:title => 'Murder on the Orient Express', :author => 'Agatha Christie
', :genre => 'Murder Mystery', :year => '1996', :image => 'https://www.google.com.au/books/edition/Murder_On_The_Orient_Express/KKZ2DwAAQBAJ?hl=en&gbpv=1&printsec=frontcover')
Book.create(:title => 'The Great Gatsby
', :author => 'F. Scott Fitzgerald
', :genre => 'Tragedy', :year => '1925', :image => 'https://www.google.com.au/books/edition/The_Great_Gatsby/TQoEAwAAQBAJ?hl=en&gbpv=1&printsec=frontcover')
Book.create(:title => 'Pride and Prejudice
', :author => 'Jane Austen
', :genre => 'Romantic', :year => '1813', :image => 'https://www.google.com.au/books/edition/Pride_and_Prejudice/kQ0mAAAAMAAJ?hl=en&gbpv=1&printsec=frontcover')
Book.create(:title => 'War and Peace
', :author => 'Leo Tolstoy', :genre => 'Historical Fiction', :year => '1867', :image => 'https://www.google.com.au/books/edition/War_and_Peace/s-OQ2yHDIMQC?hl=en&gbpv=1&printsec=frontcover')
Book.create(:title => 'Othello', :author => 'William Shakespeare', :genre => 'Tragedy', :year => '1603', :image => 'https://m.media-amazon.com/images/I/511N5LJjowL.jpg')

puts "#{ Book.count } books created."
