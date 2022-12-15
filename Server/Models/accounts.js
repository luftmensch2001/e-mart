const mongoose = require("mongoose");
const schema = mongoose.Schema;

const AccountsSchema = new schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        require: true,
    },
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phoneNumber: {
        type: String,
        require: true,
    },
    imageUrl: {
        type: String,
        require: false,
    },
    sex: {
        type: String,
        enum: ["MALE", "FEMALE"],
        require: true,
    },
});

module.exports = mongoose.model("accounts", AccountsSchema);
