const mongoose = require("mongoose");
const schema = mongoose.Schema;

const BillsSchema = new schema({
    accountId: {
        type: schema.Types.ObjectId,
        ref: "accounts",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    code: {
        type: String,
        require: false,
    },
    state: {
        type: String,
        require: true,
    },
    totalPrice: {
        type: Number,
        require: true,
    },
    discount: {
        type: Number,
        require: true,
    },
});

module.exports = mongoose.model("bills", ColorsSchema);
