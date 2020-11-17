const express = require('express')
const ejs = require('ejs')
const quote = require('stock-quote');


const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs);
const PORT = 1337;

server.get('/', (req, res) => {
  res.render('home.ejs')
   });


server.get('/stockQuote', (req, res) => {
  const stock = req.query.stockInfo.toUpperCase();
  quote.getQuote(stock).then( (data) => {
    res.render('stockQuote.ejs', {quote: data.currentPrice, stock:stock})
  });
})


server.listen(PORT, () => console.log('now servering on 1337'));
