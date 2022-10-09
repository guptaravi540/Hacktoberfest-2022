const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
    },
    primaryEmail: {
      type: String,
    },
    secondaryEmail: {
      type: String,
    },
    dogs: [],
    active: {
      type: Boolean,
    },
    credits: {
      type: Number,
    },
    registerSuccess: {
      type: Boolean,
    },
    country: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
