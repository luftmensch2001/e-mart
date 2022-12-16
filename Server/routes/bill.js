const express = require("express");
const router = express.Router();

const Bill = require("../models/bills");
const Product = require("../models/products");

// @route GET api/bills
// @desc get bill buyer
// @access Public
router.get("/buyer", async (req, res) => {
    try {
        const bills = await Bill.find({ productId: req.accountId });
        res.json({ success: true, posts });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});
// @route GET api/bills
// @des get bill seller
// @access Public
router.get("/seller", async (req, res) => {
    try {
        const product = await Product.findById(req.productId);
        const bills = await Bill.find({ productId: product.accountId });
        res.json({ success: true, posts });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});

// @route POST api/bills/create
// @desc create bill
// @access Public
router.post("/create", async (req, res) => {
    const { productId, accountId, state, totalPrice, discount } = req.body;

    if (!productId || !accountId || !state || !totalPrice || !discount)
        return res
            .status(400)
            .json({ success: false, message: "Missing information" });
    try {
        // All Good
        const newBill = new Bill({
            productId,
            accountId,
            state,
            totalPrice,
            discount,
        });
        await newBill.save();
        return res.status(200).json({ success: true, message: "Created Bill" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});

// @route Delete api/colors
// @desc create color
// @access Public
router.delete("/", async (req, res) => {
    try {
        const bills = await Bill.find({ accountId: req.accountId });
        const deleteBill = await colors.findAndDelete(bills);
        if (!deleteBill)
            res.status(500).json({ success: false, message: "Bill not found" });
        res.json({ success: true, message: "Deleted bill" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});

// @route PUT api/bills/update
// @desc update bill
// @access Public
router.put("/update", async (req, res) => {
    const { productId, accountId, state, totalPrice, discount } = req.body;

    if (!productId || !accountId || !state || !totalPrice || !discount)
        return res
            .status(400)
            .json({ success: false, message: "Missing information" });
    try {
        // All Good
        let updateBill = new Bill({
            productId,
            accountId,
            state,
            totalPrice,
            discount,
        });
        updateBill = await Bill.findOneAndUpdate(updateBill, { new: true });
        if (!updateBill)
            res.status(401).json({
                success: false,
                message: " Internal server error",
            });
        return res.status(200).json({ success: true, message: "Created Bill" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});

module.exports = router;
