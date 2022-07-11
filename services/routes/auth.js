const router = require("express").Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require('config');



// signup user
router.post("/auth/signup", async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.json({ success: false, message: "please enter email or password" });
  } else {
    try {
      let newUser = new User();
      newUser.username = req.body.username;
      newUser.email = req.body.email;
      newUser.password = req.body.password;
      await newUser.save();
      let token = jwt.sign(newUser.toJSON(), config.TOKEN.SECRET, {
        expiresIn: 604800, // 1 week
      });

      res.json({
        success: true,
        id: newUser._id,
        email: newUser.email,
        username: newUser.username,
        token: token,
        message: "Successfully created a new User",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
});

// login route
router.post("/auth/login", async (req, res) => {
  try {
    // check email is found 
    let foundUser = await User.findOne({ email: req.body.email });
    if (!foundUser) {
      res.status(403).json({
        success: false,
        message: "Authentecation failed User not found",
      });
    } else {
      // if found email check the password
      if (foundUser.comparePassword(req.body.password)) {
        let token = jwt.sign(foundUser.toJSON(), 'qwadsfqaf2q2rewfds34ewfdaf123edq1234', {
          expiresIn: 604800, // 1 week in secound
        });
        res.json({
          success: true,
          id: foundUser._id.toString(),
          email: foundUser.email,
          username: foundUser.username,
          token,
        });
      } else {
        res.status(403).json({
          success: false,
          message: "Authentecation failed , Wrong password ",
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


module.exports = router;
