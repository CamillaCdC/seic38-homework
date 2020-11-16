const express = require ('express');
const ejs = require('ejs');
const server = express();
const _ = require('underscore');
const axios = require('axios');
const stockQuote = require('stock-quote');

server.use(express.static('public'))
server.set('view-engine', ejs);

const PORT = 1337

server.get('/', (req, res) => {
  res.render('search.ejs')
});

server.get('/stockDisplay', (req, res) => {
  const stockCode = req.query.stockcode
  stockQuote.getQuote(`${stockCode}`).then((data) => {
    try {
    res.render('stockDisplay.ejs', {stockcode: req.query.stockcode, stockCurrentPrice: data.currentPrice})
  } catch (err) {
    console.log(err.message)
  }
  });
});

server.listen(PORT, () => { console.log(`Now serving on http://localhost:${ PORT }/`) });
