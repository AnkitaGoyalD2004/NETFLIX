const router = require("express").Router();
const Movie = require("../models/Movie.js");
const verify = require("../verifyToken.js");
//Create
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);

    try {
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you are not allowed");
  }
});

module.exports = router;
