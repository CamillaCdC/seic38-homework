const express = require('express');
const axios = require('axios');
const ejs = require('ejs');
const quote = require('stock-quote')


const server = express();
server.set('view-engine', ejs);

const PORT = 1337;

server.get('/', (req, res) => {
  res.render('home.ejs')
})

server.get('/stock', (req, res) => {
  quote.getQuote(req.query.stock).then((response) => {
    res.render('stock.ejs', {stockSearch: req.query.stock, stockPrice: JSON.stringify(response.currentPrice), stockCurrency: response.currency, cashPerShare: JSON.stringify(response.cashPerShare)})
  })
})

// Need to figure out how to redirect to the stock page and state stockSearch and stockData doesn't exist after a timeout of 5 seconds maybe?

server.listen(PORT, () => {
  console.log(`Now serving on http://localhost:${ PORT }`)
})
