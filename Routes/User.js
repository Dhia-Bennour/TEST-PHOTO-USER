const express = require("express");
const router = express.Router();

const User = require("../Models/User");


// post 
router.post("/",(req, res) => {
      const {
        name,surName,birthDay,birthPlace
      } = req.body
  
      new User({
        name,surName,birthDay,birthPlace
      } )
        .save()
        .then(user => res.json(user));
    }
  );

  // get all user 
  router.get("/all", (req, res) => {
    User.find()
      .then(user => {
        if (!user) {
          res.status(404).json({msg : 'no data '});
        }
        res.json(user);
      })
      .catch(err =>
        res.status(404).json({msg : 'server error '})
      );
  });

  // get user by id 
  router.get("/:id", (req, res) => {
    User.findOne({ _id: req.params.id })
      .then(user => {
        res.json(user);
      })
      .catch(err => res.status(404).json({msg : 'there is no user'}));
  });

// get user by id 
  router.delete( "/:id", (req, res) => {
      User.findOneAndRemove({ _id: req.params.id })
      .then(user => res.json( user)
      );
    }
  );


  router.put("/:id",
    (req, res) => {
        const {
            name,surName,birthDay,birthPlace
          } = req.body

      User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: {  name,surName,birthDay,birthPlace  } },
        { new: true }
      )
        .then(user => res.json(user))
        .catch(err => res.status(404).json({ msg: 'failed to update' }));
    }
  );
module.exports = router;

