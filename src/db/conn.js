const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://mdazizul1:mdazizul1@apifood.q1yvwkk.mongodb.net/APIFOOD?useNewUrlParser=true&useUnifiedTopology=true";

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("MongoDB connected successfully");
});

module.exports = db;
