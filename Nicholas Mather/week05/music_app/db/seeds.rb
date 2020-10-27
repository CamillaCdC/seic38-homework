Artist.destroy_all

Artist.create(:name => 'The Mountain Goats', :nationality => 'American', :members => 'John Darnielle, Peter Hughes, Jon Wurster, Matt Douglas', :genre => 'folk rock', :image => 'https://upload.wikimedia.org/wikipedia/commons/1/19/The_Mountain_Goats5.jpg' )

Artist.create(:name => 'Violent Soho', :nationality => 'Australian', :members => 'Luke Boerdam, Luke Henery, Michael Richards, James Tidswell', :genre => 'alt rock', :image => 'https://upload.wikimedia.org/wikipedia/commons/6/64/Violent_Soho_2009.jpg' )

Artist.create(:name => 'Arctic Monkeys', :nationality => 'English', :members => "Alex Turner, Jamie Cook, Nick O'Malley, Matt Helders" , :genre => 'garage rock', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Arctic_Monkeys_-_Orange_Stage_-_Roskilde_Festival_2014.jpg/300px-Arctic_Monkeys_-_Orange_Stage_-_Roskilde_Festival_2014.jpg' )

puts "#{ Artist.count } artists created"

Album.destroy_all

Album.create(:title => 'Beat the Champ', :release => '2015-04-7', :tracks => 'Southwestern Territory, The Legend of Chavo Guerrero, Foregin Object, Animal Mask, Choked Out, Heel Turn 2, Fire Editorial, Stabbed to Death Outside San Juan, Werewolf Gimmick, Luna, Unmasked!, The Ballad of Bull Ramos, Hair Match', :cover => 'https://upload.wikimedia.org/wikipedia/en/a/a6/The_mountain_goats_-_beat_the_champ.jpg' )

Album.create(:title => 'All Hail West Texas', :release => '2002-02-19', :tracks => 'The Best Ever Death Metal Band Out of Denton, Fall of the Star High School Running Back, Color in your Cheeks, Jenny, Fault Lines, Balance, Pink and Blue, Riches and Wonders, The Mess Inside, Jeff Davis County Blues, Distant Stations, Blues in Dallas, Source Decay, Absolute Lithops Effect', :cover => 'https://upload.wikimedia.org/wikipedia/en/f/f1/Wtexas.jpg' )

Album.create(:title => 'Hungry Ghost', :release => '2016-03-18', :tracks => 'Dope Calypso, Lowbrow, Covered in Chrome, Saramona Said, In the Aisle, OK Cathedral, Fur Eyes, Gold Coast, Liars, Eightfold, Hungry Ghost', :cover => 'https://upload.wikimedia.org/wikipedia/en/1/1d/Hungry_Ghost_%28Violent_Soho%29_Album_Cover.jpg' )

Album.create(:title => 'Waco', :release => '2016-03-18', :tracks => 'How to Taste, Blanket, Viceroy, So Sentimental, Like Soda, No Shade, Slow Wave, Evergreen, Holy Cave, Waco, Low', :cover => 'https://upload.wikimedia.org/wikipedia/en/1/1c/WACO_%28Violent_Soho%29_Album_Cover.jpg' )

Album.create(:title => "Whatever People Say I am, That's What I'm Not", :release => '2006-01-23', :tracks => "The View froom the Afternoon, I Bet You Look Good on the Dancefloor, Fake Tales of San Francisco, Dancing Shoes, You Probably Couldn't See for the Lights but You Were Staring Straight At Me, Still Take You Home, Riot Van, Red Light indicates doors are secure, Mardy Bum, Perhaps Vampires Is a Bit Strong But..., When The Sun Goes Down, From the Ritz to the Rubble, A Certain Romance ", :cover => 'https://upload.wikimedia.org/wikipedia/en/5/5f/Whatever_People_Say_I_Am%2C_That%27s_What_I%27m_Not.jpg' )

Album.create(:title => 'AM', :release => '2013-09-09', :tracks => "Do I Wanna Know?, R U Mine?, One for the Road, Arabella, I Want It All, No. 1 Party Anthem, Mad Sounds, Fireside, Why'd You Only Call Me When You're High?, Snap Out Of It, Knee Socks, I Wanna Be Yours", :cover => 'https://upload.wikimedia.org/wikipedia/en/0/04/Arctic_Monkeys_-_AM.png' )

puts "#{ Album.count } works created"
