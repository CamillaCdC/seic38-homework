const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
const _ = require('underscore');
const quote = require('stock-quote');


const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs)

const PORT = 1337;


server.get('/', (req, res) => {
  res.render('stock.ejs');
})

server.get('/answer', (req, res) => {
  const stock = req.query.symbol.toUpperCase();
  quote.getQuote(stock).then( (data) => {
    res.render('answer.ejs', {price: data.currentPrice, symbol:stock})
  })
});


server.listen(PORT, () => console.log(`Serving on http://localhost:${ PORT }`));
