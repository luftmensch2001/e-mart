const express = require("express");
const router = express.Router();

const ProductInFavorite = require("../models/productInCarts");

// @route GET api/productInCarts
// @desc get productInCart
// @access Public
router.get("/", async (req, res) => {
  try {
    const productInCart = await Color.find({ productId: req.accountId });
    res.json({ success: true, productInCart });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: " Internal server error" });
  }
});

// @route POST api/productInCarts/create
// @desc create productInCart
// @access Public
router.post("/create", async (req, res) => {
  const { accountId, productId, count, color } = req.body;

  if (!productId || !accountId)
    return res
      .status(400)
      .json({ success: false, message: "Missing information" });
  try {
    // Check for existing productInFavorite
    const productInCart = await User.findOne({ productId, accountId });
    if (productInCart) {
      productInCart.count += count;
      productInCart.save();
      return res
        .status(200)
        .json({ success: true, message: "Created productInCart" });
    }

    // All Good
    const newProductInCart = new ProductInFavorite({
      productId,
      accountId,
      count,
      color,
    });
    await newProductInCart.save();
    return res
      .status(200)
      .json({ success: true, message: "Created productCart" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: " Internal server error" });
  }
});

// @route Delete api/productInCarts
// @desc delete productInCart
// @access Public
router.delete("/", async (req, res) => {
  try {
    const productInCarts = await ProductInCart.find({
      productId: req.productId,
      accountId: req.accountId,
    });
    const deleteProductInCart = await colors.findAndDelete(productInCarts);
    if (!deleteProductInCart)
      res
        .status(500)
        .json({ success: false, message: "ProductInCart not found" });
    res.json({ success: true, message: "Deleted productInFavorite" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: " Internal server error" });
  }
});

module.exports = router;
