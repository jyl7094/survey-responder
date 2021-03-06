const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mcdCodeSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("McdCode", mcdCodeSchema);
