const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/taskRoute");
const cors = require("cors");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8082;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`Connected to MongoDB...`))
  .catch((err) => console.log(err));

app.use(router);
app.listen(PORT, () => console.log(`lISTENING ON PORT:${PORT}`));
