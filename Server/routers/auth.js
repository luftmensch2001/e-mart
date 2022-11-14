const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const account = require("../models/account");

router.get("/", (req, res) => res.send("ACCOUNT ROUTE"));

// @route POST api/auth/register
// @desc Register account
// @access Public
router.post("/register", async (req, res) => {
  const { username, password, fullName, email, phoneNumber, sex } = req.body;

  // Simple validation
  if (!username || !password || !fullName || !email || !phoneNumber || !sex)
    return res
      .status(400)
      .json({ success: false, message: "Missing information" });
  try {
    //Check for existing user
    const user = await User.findOne({ username });
    if (user)
      return res
        .status(400)
        .json({ success: false, message: "Username already" });

    // All good
    const hashedPassword = await argon2.hash(password);
    const newAccount = new Account({
      username,
      password: hashedPassword,
      fullName,
      email,
      phoneNumber,
      sex,
    });
    await newAccount.save();
    // Return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json(
      { success: true, message: "User created successfully" },
      accessToken
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: " Internal server error" });
  }
});

// @route POST api/auth/login
// @desc Login user
// @access Public
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "Missing username and/or password" });
  try {
    // Check for existing user
    const user = await User.findOne({ username });
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username or password" });

    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username or password" });
    // Return token
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      success: true,
      message: "User logged in successfully",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: " Internal server error" });
  }
});

module.exports = router;
