const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductInFavoritesSchema = new schema({
  accountId: {
    type: schema.Types.ObjectId,
    ref: "accounts",
  },
  productId: {
    type: schema.Types.ObjectId,
    ref: "products",
  },
  color: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("productInFavorites", ProductInFavoritesSchema);
