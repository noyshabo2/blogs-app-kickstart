const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: String,
    password: String,
    email: String,
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { collection: "users", timestamps: true }
);

const User = model("User", userSchema);
module.exports = User;
