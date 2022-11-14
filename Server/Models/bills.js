const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ColorsSchema = new schema({
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
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  totalPrice: {
    type: Long,
    require: true,
  },
  discount: {
    type: Long,
    require: true,
  },
});

module.exports = mongoose.model("colors", ColorsSchema);
