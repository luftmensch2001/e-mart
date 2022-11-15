const mongoose = require("mongoose");
const schema = mongoose.Schema;

const EvalutesSchema = new schema({
  accountId: {
    type: schema.Types.ObjectId,
    ref: "accounts", 
  },
  productId: {
    type: schema.Types.ObjectId,
    ref: "products",
  },
  name: {
    type: String,
    require: true,
  },
  star: {
    type: Double,
    require: true,
  },
});

module.exports = mongoose.model("evalutesSchemas", EvalutesSchema);
