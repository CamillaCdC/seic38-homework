const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');
const si = require('stock-info');

const server = express();
server.use(express.static( 'public' ))
server.set('view-engine', ejs)

const PORT = 1337;

server.listen(PORT, () => {
  console.log(`Server listening on port ${ PORT }...`)
});

server.get('/', (req, res) => {
  res.render('home.ejs')
});

server.get('/stonk', (req, res) => {
  const symbol = req.query.symbol.toUpperCase()
 si.getSingleStockInfo(`${symbol}`).then((stock) => {
   res.render('stonk.ejs', {
     name: stock.longName,
     close: stock.regularMarketPreviousClose
   });
 })

});
