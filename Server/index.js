require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const accountRouter = require("./routes/account");
const productRouter = require("./routes/product");
const imageProductRouter = require("./routes/imageProduct");
const colorRouter = require("./routes/color");

console.log(process.env.DB_USERNAME);

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rbbiuxh.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();

app.use(express.json());

app.use("/api/accounts", accountRouter);
app.use("/api/products", productRouter);
app.use("/api/imageProducts", imageProductRouter);
app.use("/api/colors", colorRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
