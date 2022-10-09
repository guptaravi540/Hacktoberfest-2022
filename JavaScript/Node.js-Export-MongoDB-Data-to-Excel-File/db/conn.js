const mongoose = require("mongoose");
// add your mongo db url
mongoose
  .connect("")
  .then(() => console.log("database connected"))
  .catch(() => console.log("database connection failed"));
