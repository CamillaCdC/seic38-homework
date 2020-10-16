Singer.destroy_all

Singer.create(:name => 'Lisa Hannigan', :nationality => 'Irish', :gender => 'Female', :dob => '1981-02-12', :image => 'https://live.staticflickr.com/65535/50084568708_7c4c5c9579_b.jpg')
Singer.create(:name => 'Mick Flannery', :nationality => 'Irish', :gender =>'Male', :dob => '1983-11-28', :image => 'https://www.mayonews.ie/images/stories/2019/11_nov_19/1911_Mick-Flannery-in-Concert.jpg')
Singer.create(:name => 'Damien Rice', :nationality => 'Irish', :gender => 'Male', :dob => '1973-12-07', :image => 'https://cdn1.i-scmp.com/sites/default/files/styles/768x768/public/images/methode/2016/06/01/f3d3a0c0-27b3-11e6-b3b6-bdf44ca17c9d_1280x720.jpg?itok=YYfO46ix')
Singer.create(:name =>'Bob Geldof', :nationality =>'Irish', :gender =>'Male', :dob => '1951-10-05', :image =>'https://www.irishtimes.com/polopoly_fs/1.4189451.1583076821!/image/image.jpg_gen/derivatives/box_620_330/image.jpg')
Singer.create(:name => 'Cathy Davey', :nationality =>"female", :gender =>"Female", :dob =>"1978-10-08", :image =>'https://2.bp.blogspot.com/-FnzkJZk1Ra4/UtQp-pDvuKI/AAAAAAAAT_U/BTiE0-HiVrw/s1600/17+Hippies+14.jpg')
Singer.create(:name =>"Richie Egan", :nationality =>"Irish", :gender =>"Male", :dob =>"1980-04-15", :image =>'https://live.staticflickr.com/6016/5962639300_e83166f795_b.jpg')


puts "#{ Singer.count } singers created."

Album.destroy_all

Album.create(:name => 'Sea Sew', :year => '2008', :genre => 'Indie folk', :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Lisa_Hannigan%27s_Sea_Sew_album_cover.jpg/220px-Lisa_Hannigan%27s_Sea_Sew_album_cover.jpg')
Album.create(:name => 'White Lies', :year => '2008', :genre => 'Rock, Folk', :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Mick_Flannery_White_Lies_cover.jpg/220px-Mick_Flannery_White_Lies_cover.jpg')
Album.create(:name => 'The Monkeys in the Zoo Have More Fun Than Me', :year => '2004', :genre => 'Electronic-rock', :image => 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Jape%27s_The_Monkeys_in_the_Zoo_Have_More_Fun_Than_Me_album_cover.jpg/220px-Jape%27s_The_Monkeys_in_the_Zoo_Have_More_Fun_Than_Me_album_cover.jpg')


puts "#{ Album.count } albums created."
