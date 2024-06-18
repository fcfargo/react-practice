const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const recipientSchema = new Schema({
  email: { type: String, require: true },
  responded: { type: Boolean, default: false },
});

const surveySchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    subject: { type: String, required: true },
    recipients: { type: [recipientSchema], require: true },
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    userId: { type: String, required: true },
    dataSent: { type: Date },
    lastResponded: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('surveys', surveySchema);
