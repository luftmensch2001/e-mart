const express = require("express");
const router = express.Router();

const ImageProduct = require("../models/imageProducts");

// @route GET api/imageProducts
// @desc get image
// @access Public
router.get("/", async (req, res) => {
  try {
    const images = await Image.find({ productId: req.productId });
    res.json({ success: true, images });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: " Internal server error" });
  }
});

// @route POST api/imagesProducts/create
// @desc create imageProduct
// @access Public
router.post("/create", async (req, res) => {
  const { productId, imageURL } = req.body;
  try {
    // Check for existing image
    const image = await User.findOne({ productId, imageURL });
    if (image)
      return res
        .status(400)
        .json({ success: false, message: "Already exist image" });

    // All Good
    const newImage = new Color({ imageURL, productId });
    await newImage.save();
    return res.status(200).json({ success: true, message: "CreatedImage" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: " Internal server error" });
  }
});

// @route DELETE api/imagesProducts
// @desc Delete all imageProduct
// @access Public
router.delete("/", async (req, res) => {
  try {
    const images = await ImageProduct.find({ productId: req.productId });
    const deleteImages = await colors.findAndDelete(images);
    if (!deleteImages)
      res.status(500).json({ success: false, message: "Color not found" });
    res.json({ success: true, message: "Deleted images" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: " Internal server error" });
  }
});

module.exports = router;
