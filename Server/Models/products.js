const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductsSchema = new schema({
    nameProduct: {
        type: String,
        require: true,
        unique: true,
    },
    accountId: {
        type: schema.Types.ObjectId,
        ref: "accounts",
    },
    price: {
        type: Number,
        require: true,
    },
    countSold: {
        type: Number,
        default: 0,
    },
    countAvailability: {
        type: Number,
        default: 0,
    },
    countStar: {
        type: Number,
        default: 0,
    },
    describe: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("products", ProductsSchema);
