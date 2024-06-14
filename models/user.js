const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    googleId: { type: String, required: true },
    credits: { type: Number, default: 0, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('users', userSchema);
