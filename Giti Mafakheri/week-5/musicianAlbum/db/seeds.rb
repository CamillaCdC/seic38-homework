Musician.destroy_all
Musician.create(:name => 'Kevin Cameron', :nationality => 'Australian', :dob => '1879-02-22', :period => '20th century', :image => 'https://kevcam.com/uploads/3/5/0/5/35055861/8744896_orig.jpg')
Musician.create(:name => 'Jose Carbo', :nationality => 'Australian', :dob => '1912-02-07', :period => '20th century', :image => 'http://4.bp.blogspot.com/-OZYmgLKtE68/T8vsO7SCMpI/AAAAAAAALYM/BAns8Q1e70I/s1600/Jose+Carbo.jpg')
Musician.create(:name => 'Jann Castor', :nationality => 'Australian', :dob => '1915-11-21', :period => '20th century', :image => 'https://i.ytimg.com/vi/D0fO5IgTHdQ/hqdefault.jpg')
puts "#{ Musician.count } artists created."




Work.destroy_all
Work.create(:title => 'Thieves Kitchen', :year => '1929', :medium => 'etching', :style => 'Romantic', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=29145')
Work.create(:title => 'The Rabbiters', :year => '1947', :medium => 'oil on canvas', :style => 'Sun-burnt dinge', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=5520')
Work.create(:title => 'The Darkening Stage', :year => '1991', :medium => 'oil on canvas', :style => 'Surrealist', :image => 'https://content.ngv.vic.gov.au/col-images/api/EPUB001055/1280')
Work.create(:title => 'Carcass', :year => '1953', :medium => 'oil and enamel paint on composition board', :style => 'Sun-burnt splendour', :image => 'https://content.ngv.vic.gov.au/retrieve.php?size=1280&type=image&vernonID=57510')
Work.create(:title => 'Bride Running Away', :year => '1957', :medium => 'oil and tempera on composition board', :style => 'Sun-burnt primitivism', :image => 'http://www.abc.net.au/news/image/4197918-3x2-940x627.jpg')
Work.create(:title => 'Portrait of Clive James', :year => '1991 - 1992', :medium => 'oil on canvas', :style => 'Modernist', :image => 'https://media.artgallery.nsw.gov.au/thumbnails/collection_images/2/276.1992%23%23S.jpg.505x464_q85.jpg')
Work.create(:title => 'The Naked Studio', :year => '1981', :medium => '1981', :style => 'Impressionist', :image => 'https://mona.net.au//media/37522/brett-whiteley-the-naked-studio-mona-01.jpg')
puts "#{ Work.count } works created."
