const db = require("../db/db");
const { Schema } = db;

const List = db.model(
  "List",
  new Schema({
    listTitle: {
      type: String,
      required: true
    },
    theme: []
  }, { timestamps: true })
);

module.exports = List;