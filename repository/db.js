const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ecom", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

let db = mongoose.connection;

db.once("open", () => {
  console.log(`Mongodb Connected...`);
});

db.on("error", (err) => {
  console.log(`Error: ${err}`);
});

module.exports = db;
