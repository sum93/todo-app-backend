const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TodoSchema = new Schema(
  {
    message: String,
    completed: Boolean
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", TodoSchema)
