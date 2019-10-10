const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config").mongoURI; 
const app = express();
 const user = require("./Routes/User");
 const image = require("./Routes/Image");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


  app.use("/user", user);
  app.use("/image", image);



const port = process.env.PORT || 5000;

  app.listen(port, () => console.log(`server is running on port ${port}`));

