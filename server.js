const express = require("express");
const Output = require("./routes/output");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", Output);

const server = app.listen(8080, function() {
  console.log("Server is listening on port 8080");
});

// A 1, B 1, C 1, D 1 will give the output as 168
