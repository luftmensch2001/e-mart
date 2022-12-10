const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ProductInBillsSchema = new schema({
  productId: {
    type: schema.Types.ObjectId,
    ref: "products",
  },
  billId: {
    type: schema.Types.ObjectId,
    ref: "bills",
  },
  count: {
    type: Long,
    require: true,
  },
  evaluteId: {
    type: schema.Types.ObjectId,
    ref: "evalutes",
  },
});

module.exports = mongoose.model("productInBills", ProductInBillsSchema);
