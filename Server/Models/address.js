const mongoose = require("mongoose");
const schema = mongoose.Schema;

const AddressSchema = new schema({
  accountId: {
    type: schema.Types.ObjectId,
    ref: "accounts",
  },
  fullName: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  level1: {
    type: String,
    require: true,
  },
  level2: {
    type: String,
    require: true,
  },
  level3: {
    type: String,
    require: true,
  },
  detail: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("address", AddressSchema);
