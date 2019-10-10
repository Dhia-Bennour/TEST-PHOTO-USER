const express = require("express");
const router = express.Router();
 
const Image = require("../Models/Image");
const User = require("../Models/User");


// post 
router.post("/:userId",(req, res) => {
    const userId = req.params.userId 
      const {
        name,link, 
      } = req.body
  const data = {
    name,userId,link
  }
  console.log(data)
      new Image( data)
        .save()
        .then(user => res.json(user));
    }
  );

  // get image for signle user 
  router.get("/:userId", (req, res) => {
    const userId = req.params.userId 

    Image.find({ userId })
      .then(images => res.json(images))
      .catch(err => res.status(404).json({ nopostsfound: "no images" }));
  });

    // delete image for signle user 
    router.delete("/:userId/:imageId", (req, res) => {
        const userId = req.params.userId 
        const imageId = req.params.imageId 
    
        Image.findOneAndRemove({ userId , _id :imageId })
          .then(image => res.json(image))
          .catch(err => res.status(404).json({ nopostsfound: "can't remove" }));
      });
 
module.exports = router;

