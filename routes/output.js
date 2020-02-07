const express = require("express");
const querystring = require("querystring");
const url = require("url");
const calculateCost = require("./../services/handleOutput");

const router = express.Router();

router.get("/", (req, res) => {
  const product = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

  for (let item of product) {
    if (product.includes(item)) {
      req.query[item] = req.query[item] - "0";
    } else {
      req.query[item] = 0;
    }
  }

  for (let item in req.query) {
    const check = isNaN(req.query[item]);
    if (check === true) req.query[item] = 0;
  }

  console.log(req.query);

  const ans = calculateCost(req.query);
  //   console.log(ans);
  res.status(400).send(`Output : ${ans}`);
});

module.exports = router;
