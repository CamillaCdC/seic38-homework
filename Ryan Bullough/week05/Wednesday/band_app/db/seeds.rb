Band.destroy_all
Band.create(:name => 'The Menzingers', :formed => '2006-01-01', :member_count => 4, :genre => 'Punk Rock', :image => 'https://images.squarespace-cdn.com/content/v1/5d08083692c8e2000174b043/1596001084770-P10JXJAIHXVERHWRD2U6/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/band-photo-min.jpg?format=2500w')
Band.create(:name => 'Against Me!', :formed => '1997-01-01', :member_count => 4, :genre => 'Punk Rock', :image => 'https://media.npr.org/assets/img/2014/01/09/againstme_wide-6ff128a4bfaa9df2d6bd9814114b2285641d03f1-s1600-c85.jpg')
Band.create(:name => 'Black Foxxes', :formed => '2013-01-01', :member_count => 3, :genre => 'Indie Rock', :image => 'https://upload.wikimedia.org/wikipedia/commons/d/df/Blackfoxxes.jpg')
Band.create(:name => 'The Cure', :formed => '1978-01-01', :member_count => 5, :genre => 'New Wave', :image => 'https://tonedeaf.thebrag.com/wp-content/uploads/2018/04/thecure-768x405.jpg')
puts "Created #{Band.count} Bands"

Album.destroy_all
Album.create(title: 'From Exile', release_date: '2020-09-25', meta_rating: 10, cover_image: 'https://static1.squarespace.com/static/5d08083692c8e2000174b043/t/5f210ba9b7734760227a191f/1596001193694/87802_TheMenzingers-min.jpg')
Album.create(title: 'Hello Exile', release_date: '2019-10-04', meta_rating: 9.3, cover_image: 'https://images.squarespace-cdn.com/content/v1/5d08083692c8e2000174b043/1562485434966-JNTILW0J9PC200D27S54/ke17ZwdGBToddI8pDm48kM6ExnE8JxJ0MMXwc_HGBNNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIhS23_HU5IP3A0tITkkZoMH5QM01GXkKbjCwwDVKPTEYKMshLAGzx4R3EDFOm1kBS/hello+exile.jpg?format=1000w')
Album.create(title: 'After The Party', release_date: '2017-02-03', meta_rating: 9.9, cover_image: 'https://images.squarespace-cdn.com/content/v1/5d08083692c8e2000174b043/1562485486523-3WYOOSIGJ9U5TGN0W287/ke17ZwdGBToddI8pDm48kM6ExnE8JxJ0MMXwc_HGBNNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIhS23_HU5IP3A0tITkkZoMH5QM01GXkKbjCwwDVKPTEYKMshLAGzx4R3EDFOm1kBS/after+the+party.jpg?format=1000w')
Album.create(title: 'Rented World', release_date: '2014-04-22', meta_rating: 8.3, cover_image: 'https://images.squarespace-cdn.com/content/v1/5d08083692c8e2000174b043/1562485533552-4CQPJ5CIIL3OTZO99T6C/ke17ZwdGBToddI8pDm48kM6ExnE8JxJ0MMXwc_HGBNNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIhS23_HU5IP3A0tITkkZoMH5QM01GXkKbjCwwDVKPTEYKMshLAGzx4R3EDFOm1kBS/rented+world.jpg?format=1000w')
Album.create(title: 'On The Impossible Past', release_date: '2012-02-21', meta_rating: 10, cover_image: 'https://images.squarespace-cdn.com/content/v1/5d08083692c8e2000174b043/1562485565132-ZV6RP13GD5XC6AMNCOVA/ke17ZwdGBToddI8pDm48kM6ExnE8JxJ0MMXwc_HGBNNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIhS23_HU5IP3A0tITkkZoMH5QM01GXkKbjCwwDVKPTEYKMshLAGzx4R3EDFOm1kBS/on+the+impossible+past.jpg?format=1000w')
puts "Created #{Album.count} Albums"