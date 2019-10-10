const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  userId :  {
       type: Schema.Types.ObjectId,
        ref: "users"
      } ,
  name: {
    type: String,
  },
  link: {
    type: String,    
  },
  date: {
    type: String,
    default: Date.now
  }
});

module.exports = Image = mongoose.model("images", ImageSchema);
