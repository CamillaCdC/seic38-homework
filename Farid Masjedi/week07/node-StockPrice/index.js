const express = require('express');
const ejs = require('ejs');
const stockQoute = require('stock-quote');


const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs);

const PORT = 1337;

server.get('/stock-search', (req,res) =>{
  res.render('stock-search.ejs')
})

server.get('/stock-price', (req,res) => {
  const stock = req.query.stockInfo.toUpperCase();

  stockQoute.getQuote(stock).then( (data) => {
                                res.render('stock-price.ejs',{quote: data.currentPrice,
                                                              stock:stock})
                                });
})

server.listen(PORT, () => console.log(`port is on`));
