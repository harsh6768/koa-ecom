const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: "string",
  },
  email: {
    type: "string",
  },
  password: {
    type: "string",
  },
});

module.exports = mongoose.model("user", userSchema);
