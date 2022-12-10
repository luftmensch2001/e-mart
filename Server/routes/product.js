const express = require("express");
const router = express.Router();

const Product = require("../models/products");

router.get("/", (req, res) => res.send("PRODUCT ROUTE"));

// @route POST api/products/create
// @desc Create product
// @access Public
router.post("/create", async (req, res) => {
  const { accountId, nameProduct, price, describe, type } = req.body;
  // Simple validation
  if (!nameProduct || !price || !describe || !type)
    return res
      .status(400)
      .json({ success: false, message: "Missing information" });
  //All good
  try {
    const newProduct = new Product({
      accountId,
      nameProduct,
      price,
      describe,
      type,
    });
    await newProduct.save();
    res.json({ success: true, message: "Product created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: " Internal server error" });
  }
});

// @route GET api/products/all
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
