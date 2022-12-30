const express = require("express");
const accounts = require("../Models/accounts");
const productInCarts = require("../models/productInCarts");
const router = express.Router();

const ProductInCart = require("../models/productInCarts");

// @route GET api/productInCarts/byAccountId
// @desc get productInCart by accountId
// @access Public
router.get("/byAccountId", async (req, res) => {
    const accountId = req.query.accountId;
    try {
        console.log(accountId);
        const productInCarts = await ProductInCart.find({
            accountId: { $in: accountId },
        });
        console.log(productInCarts);
        res.json({ success: true, productInCarts });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
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
        const productInCart = await ProductInCart.findOne({
            productId,
            accountId,
        });
        if (productInCart) {
            productInCart.count += count;
            productInCart.save();
            return res
                .status(200)
                .json({ success: true, message: "Created productInCart" });
        }

        // All Good
        const newProductInCart = new ProductInCart({
            productId,
            accountId,
            count,
            color,
        });
        await newProductInCart.save();
        return res.status(200).json({
            success: true,
            message: "Created productCart",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});

// @route Delete api/productInCarts/byAccountId
// @desc delete productInCart by accountId
// @access Public
router.delete("/byAccountId", async (req, res) => {
    const { accountId } = req.body;
    try {
        const deleteProductInCart = await ProductInCart.deleteMany({
            accountId,
        });
        if (!deleteProductInCart)
            res.status(500).json({
                success: false,
                message: "ProductInCart not found",
            });
        res.json({ success: true, message: "Deleted productInCart" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});

// @route Delete api/productInCarts/byProductIdAndAccountId
// @desc delete productInCart by productIdAndAccountId
// @access Public
router.delete("/byProductIdAndAccountId", async (req, res) => {
    const { accountId, productId } = req.query;
    try {
        const deleteProductInCart = await ProductInCart.deleteMany({
            accountId,
            productId,
        });
        if (!deleteProductInCart)
            res.status(500).json({
                success: false,
                message: "ProductInCart not found",
            });
        res.json({ success: true, message: "Deleted productInCart" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});

module.exports = router;
