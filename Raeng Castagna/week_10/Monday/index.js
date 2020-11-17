const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
const quote = require('stock-quote');

const server = express();
const PORT = 1337;
server.set('view-engine', ejs)

server.get('/', (req, res) => {
  res.render('home.ejs')
});

server.get('/price', (req, res) => {
  quote.getQuote('AAPL').then((data) => {
    // console.log(JSON.stringify(data, null, 4))
    res.render('result.ejs', {
      stock_symbol: req.query.stock_symbol,
      currency: JSON.stringify(data.currency),
      cashPerShare: JSON.stringify(data.cashPerShare),
      currentPrice: JSON.stringify(data.currentPrice)
    } )
    console.log(JSON.stringify(data, null, 4))
  })
})

server.listen(PORT, () => console.log(`Now serving on http://localhost:${PORT}`));
