const mongoose = require("mongoose");
const { Schema } = mongoose; //using destructuring

const userSchema = new Schema({
  //creating a schema
  googleId: String
});

mongoose.model("users", userSchema); //loading a schema
