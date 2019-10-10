const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
  
  },
  surName: {
    type: String,
     
  },
  birthDay: {
    type: Date
  },
  birthPlace: {
    type: String, 
  },
 
  date: {
    type: String,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);