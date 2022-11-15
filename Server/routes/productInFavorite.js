const express = require("express");
const router = express.Router();

const ProductInFavorite = require("../models/productInFavorites");

// @route GET api/productInFavorites
// @desc get productInFavorite
// @access Public
router.get("/", async (req, res) => {
  try {
    const productInFavorite = await Color.find({ productId: req.accountId });
    res.json({ success: true, productInFavorite });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: " Internal server error" });
  }
});

// @route POST api/productInFavorites/create
// @desc create productInFavorite
// @access Public
router.post("/create", async (req, res) => {
  const { accountId, productId } = req.body;

  if (!productId || !accountId)
    return res
      .status(400)
      .json({ success: false, message: "Missing information" });
  try {
    // Check for existing productInFavorite
    const productInFavorite = await User.findOne({ productId, accountId });
    if (productInFavorite)
      return res
        .status(400)
        .json({ success: false, message: "Already exist productInFavorite" });

    // All Good
    const newProductInFavorite = new ProductInFavorite({
      productId,
      accountId,
    });
    await newProductInFavorite.save();
    return res
      .status(200)
      .json({ success: true, message: "Created productInFavorite" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: " Internal server error" });
  }
});

// @route Delete api/productInFavorites
// @desc delete productInFavorite
// @access Public
router.delete("/", async (req, res) => {
  try {
    const productInFavorites = await ProductInFavorite.find({
      productId: req.productId,
      accountId: req.accountId,
    });
    const deleteProductInFavorite = await colors.findAndDelete(
      productInFavorites
    );
    if (!deleteProductInFavorite)
      res
        .status(500)
        .json({ success: false, message: "ProductInFavorite not found" });
    res.json({ success: true, message: "Deleted productInFavorite" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: " Internal server error" });
  }
});

module.exports = router;
