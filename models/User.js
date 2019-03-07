const mongoose = require("mongoose");
const { Schema } = mongoose; //using destructuring

const userSchema = new Schema({
  //creating a schema
  googleId: String,
  credits: { type: Number, default: 0 }
});

mongoose.model("users", userSchema); //loading a schema
