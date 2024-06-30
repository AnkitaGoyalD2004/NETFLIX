const router = require("express").Router();
const User = require("../models/User.js");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken.js");
//Update
router.put("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.decrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json(updatedUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you can only update your account");
  }
});

//Delete
//Get
//Get All
module.exports = router;
