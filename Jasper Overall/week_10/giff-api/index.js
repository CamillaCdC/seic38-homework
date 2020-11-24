const express = require('express');
const axios = require('axios');

const server = express();

const PORT = 1337;

server.set( 'view-engine', 'ejs' )

server.use(express.static('public')) // for css

server.get('/', ( req, res ) => {
  res.render('home.ejs')
})

server.get('/gif', ( req, res ) => {
  const gif = req.query.giffy //this is kind of like params, do a console log and you will see you get whatever is typed in returned in the console
  axios.get(`http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=PqEkYYpKpRQgSdbLtozsVLUJK1kV2Fqn&limit=100`).then( ( data ) => {
    console.log( 'THIS IS THE DATA', data.data.data );
    res.render('home.ejs', { gif: data.data.data, query: gif })
  })
})

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
