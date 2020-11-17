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


server.get('/', (req, res) => {

})


server.listen(PORT, () => console.log('now servering on 1337'));
