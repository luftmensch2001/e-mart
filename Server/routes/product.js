const express = require("express");
const router = express.Router();

const Product = require("../models/product");

router.get("/", (req, res) => res.send("PRODUCT ROUTE"));

// @route POST api/product/create
// @desc Create account
// @access Public
router.post("/register", async (req, res) => {
  const { nameProduct, price, describe, type } = req.body;
  // Simple validation
  if (!nameProduct || !price || !describe || !type)
    return res
      .status(400)
      .json({ success: false, message: "Missing information" });
  //All good
  try {
    const newProduct = new Product({
      nameProduct,
      price,
      describe,
      type,
    });
    await newAccount.save();
    res.json({ success: true, message: "Product created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: " Internal server error" });
  }
});

// @route GET api/product/all
// @desc Get ALL Product
// @access Public
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find({ accountId: req.accountId });
    res.json({ success: true, posts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: " Internal server error" });
  }
});

module.exports = router;
