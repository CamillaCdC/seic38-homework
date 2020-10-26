Author.destroy_all

Author.create(:name => 'George Orwell', :dob => '1900-02-22', :style => 'non-fiction', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVHFz3tZUBLNV3yPDoxK9ZywSOzf-gdO6oTw&usqp=CAU')
Author.create(:name => 'Lewis Carroll', :dob => '1832-01-27', :style => 'non-fiction', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgvD9HxPf-I2hKoPKBxhUg8j7N3nIlRpxP7g&usqp=CAU')

puts "#{ Author.count} authors created."

Book.destroy_all

Book.create(:title => '1984', :author => 'George Orwell', :style => 'non-fiction', :published => '1949-06-08', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQVHFz3tZUBLNV3yPDoxK9ZywSOzf-gdO6oTw&usqp=CAU', :description => 'War is Peace. Freedom is Slavery. Ignorance is Strength.')
Book.create(:title => "Schrodinger's Cat: The Universe Next Door", :author => 'Robert Anton Wilson', :style => 'non-fiction', :published => '1979', :image => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkCaFBcFuWred_ghKzhPfPaHYWgCMlsBk1Hg&usqp=CAU', :description => "In The Universe Next Door, the President of Unistat is Furbish Lousewart V; in that universe, a terrorist organization known as Purity of Essence (named after General Ripper's obsession in the film Dr. Strangelove) threatens to detonate nuclear devices in major cities all over Unistat.")

puts "#{ Book.count} books created."
