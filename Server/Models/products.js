const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductsSchema = new schema({
  nameProduct: {
    type: String,
    require: true,
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
    require: true,
  },
  countAvailability: {
    type: Long,
    require: true,
  },
  countStar: {
    type: Double,
    require: true,
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
