// const router = require("express").Router();
// const User = require("../models/User.js");
// const CryptoJS = require("crypto-js");

// //REGISTER
// router.post("/register", async (req, res) => {
//   const newUser = new User({
//     username: req.body.username,
//     email: req.body.email,
//     password: CryptoJS.AES.encrypt(
//       req.body.password,
//       process.env.SECRET_KEY
//     ).toString(),
//   });
//   console.log(newUser);
//   try {
//     const user = await newUser.save();
//     res.status(201).json(user);
//   } catch (err) {
//     res.status(500).json(err);
//     console.log(err);
//   }
// });

// module.exports = router;
const router = require("express").Router();
const User = require("../models/User.js");
const CryptoJS = require("crypto-js");

// REGISTER
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  // Input validation
  if (!username || !email || !password) {
    return res.status(400).json({
      error: "All fields (username, email, password) are required.",
    });
  }

  // Encrypting password
  const encryptedPassword = CryptoJS.AES.encrypt(
    password,
    process.env.SECRET_KEY
  ).toString();

  const newUser = new User({
    username,
    email,
    password: encryptedPassword,
  });

  console.log(newUser);

  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("wrong password or username");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("wrong password or username");

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
