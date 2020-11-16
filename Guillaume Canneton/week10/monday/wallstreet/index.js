const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
const quote = require('stock-quote')

const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs);

const PORT = 1337;

server.get('/', (req, res) => {
  res.render('home.ejs')
})
server.get('/quote', (req, res) => {
  quote.getQuote(req.query.quote).then( (response) => {
    res.render('quote.ejs', { request: req.query.quote, quote: response });
  });
})

server.listen(PORT, () => console.log(`Now serving on 'http://localhost:${PORT}/'`));
