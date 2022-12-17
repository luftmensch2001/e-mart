const express = require("express");
const multer = require("multer");
const router = express.Router();

const Product = require("../models/products");

const uploadMultipartForm = multer().none();

router.get("/", (req, res) => res.send("PRODUCT ROUTE"));

// @route POST api/products/create
// @desc Create product
// @access Public
router.post("/create", async (req, res) => {
    try {
        uploadMultipartForm(req, res, function (err) {
            const {
                accountId,
                nameProduct,
                price,
                salePrice,
                describe,
                type,
                imageURLs,
            } = req.body;
            console.log("req.body: ", req.body);
            // Simple validation
            console.log("imageURLs: ", imageURLs);

            if (!accountId || !nameProduct || !price || !describe || !type)
                return res
                    .status(400)
                    .json({ success: false, message: "Missing information" });

            const newProduct = new Product({
                accountId,
                nameProduct,
                price,
                salePrice,
                describe,
                type,
                imageURLs,
            });

            //All good

            newProduct.save();
            res.json({
                success: true,
                message: "Product created successfully",
                productID: newProduct._id,
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});

// @route GET api/products/all
// @desc Get All Product
// @access Public
router.get("/all", async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});

// @route GET api/products/byAccountId
// @desc Get Product by accountId
// @access Public
router.get("/byAccountId", async (req, res) => {
    const accountId = req.query.accountId;
    try {
        const products = await Product.find({ accountId });
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});

// @route GET api/products/byProductId
// @desc Get Product by productId
// @access Public
router.get("/byProductId", async (req, res) => {
    const { productId } = req.body;
    try {
        const product = await Product.findOne({ _id: productId });
        res.json({ success: true, product });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});

// @route Delete api/products/byProductId
// @desc delete 1 product
// @access Public
router.delete("/byProductId", async (req, res) => {
    const productId = req.query.productId;
    console.log("productId: ", productId);

    try {
        const deleteProduct = await Product.findByIdAndDelete({
            _id: productId,
        });
        if (!deleteProduct)
            res.status(500).json({
                success: false,
                message: "Product not found",
            });
        res.json({
            success: true,
            message: "Deleted Product id: " + productId,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});

// @route Delete api/products/byAccountId
// @desc delete all product by accountId
// @access Public
router.delete("/byAccountId", async (req, res) => {
    const { accountId } = req.body;
    try {
        await Product.deleteMany({ accountId: accountId });
        res.json({
            success: true,
            message: "Deleted Products accountId: " + accountId,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});

// @route PUT api/products/update
// @desc update Product
// @access Public
router.put("/update", async (req, res) => {
    const {
        productId,
        nameProduct,
        price,
        salePrice,
        describe,
        type,
        countSold,
        countAvailability,
        countStar,
    } = req.body;

    try {
        let updateProduct = new Product({
            _id: productId,
            nameProduct,
            price,
            salePrice,
            describe,
            type,
            countSold,
            countAvailability,
            countStar,
        });
        const product = Product.findOneAndUpdate(
            { _id: productId },
            {
                nameProduct: nameProduct,
                price,
                salePrice,
                describe,
                type,
                countSold,
                countAvailability,
                countStar,
            },
            { new: true },
            function (error, productt) {
                console.log(productt);
                if (!productt) {
                    res.status(400).json({
                        success: false,
                        message: "product not found",
                    });
                } else {
                    res.status(200).json({
                        success: true,
                        message: " Updated product",
                        productt,
                    });
                }
            }
        );
        // All Good
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " Internal server error",
        });
    }
});

module.exports = router;
