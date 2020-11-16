const express = require('express');
const ejs = require('ejs');
const axios = require('axios');

const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs);

const PORT = 1337;

server.get('/', (req, res) => {
  res.render('home.ejs')
})
server.get('/episode', (req, res) => {
  axios.get(`https://rickandmortyapi.com/api/episode/${req.query.episode}`).then((response) => {
    res.render('episode.ejs', { request: req.query.episode, episode: response.data});
  })
});

server.listen(PORT, () => console.log(`Now serving on 'http://localhost:${PORT}/'`));
