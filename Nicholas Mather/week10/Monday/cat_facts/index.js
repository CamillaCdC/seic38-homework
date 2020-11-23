const express = require('express');
const ejs = require('ejs');
const _ = require('underscore');
const axios = require('axios');

const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs);

const PORT = 1337;

server.get('/', (req, res) => {
  axios.get(
    'https://cat-fact.herokuapp.com/facts'
  ).then((response) => {
    res.render(
      'home.ejs',
      {fact: _(response.data.all).sample().text}
    );
    console.log(response)
  })

});

server.listen(PORT, () => console.log(`Now listening on ${PORT}...`))
