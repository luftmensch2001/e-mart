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
    type: Long,
    require: true,
  },
  countSold: {
    type: Long,
    default: 0,
  },
  countAvailability: {
    type: Long,
    default: 0,
  },
  countStar: {
    type: Double,
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
