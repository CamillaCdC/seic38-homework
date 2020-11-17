const express = require("express");
const ejs = require("ejs");
const si = require("stock-info");

const server = express();
const PORT = 1337;

server.use(express.static("public"));
server.set("view-engine", ejs);

server.get("/", (req, res) => {
  res.render("home.ejs");
});

server.get("/result", (req, res) => {
  const query = req.query.symbol;
  si.getSingleStockInfo(query).then((result) => {
    res.render("result.ejs", {
      open: result.regularMarketOpen,
      close: result.regularMarketPreviousClose,
      name: result.longName,
    });
  });
});

server.listen(PORT, () => {
  console.log(`Now serving on http://localhost:${PORT}`);
});
