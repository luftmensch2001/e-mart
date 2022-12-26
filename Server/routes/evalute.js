const express = require("express");
const router = express.Router();

const Evalute = require("../models/evalutes");

// @route GET api/evalutes
// @desc get evalute
// @access Public
router.get("/", async (req, res) => {
    try {
        const evalutes = await Evalute.find({ productId: req.query.productId });
        res.json({ success: true, evalutes });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});

// @route POST api/evalutes/create
// @desc create color
// @access Public
router.post("/create", async (req, res) => {
    const { accountId, productId, name, star } = req.body;

    if (!name || !star || !productId || !accountId)
        return res
            .status(400)
            .json({ success: false, message: "Missing information" });
    try {
        // Check for existing evalute
        const evalute = await Evalute.findOne({ productId, accountId });
        if (evalute)
            return res
                .status(400)
                .json({ success: false, message: "Already exist evalute" });

        // All Good
        const newEvalute = new Evalute({ name, productId, accountId, star });
        await newEvalute.save();
        return res
            .status(200)
            .json({ success: true, message: "Created evalute" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});

// @route Delete api/evalutes
// @desc delete evalute
// @access Public
router.delete("/", async (req, res) => {
    try {
        const evalutes = await Evalute.find({
            productId: req.productId,
            accountId: req.accountId,
        });
        const deleteEvalute = await evalutes.findAndDelete(evalutes);
        if (!deleteEvalute)
            res.status(500).json({
                success: false,
                message: "Evalute not found",
            });
        res.json({ success: true, message: "Deleted evalute" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});

module.exports = router;
