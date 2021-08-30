const mongoose = require("../components/odm");
const TODO_STATUS = require("../constants");

const Todo = mongoose.model("Todo", {
  name: String,
  status: {
    type: String,
    enum: Object.values(TODO_STATUS),
  },
  created: {
    type: Date,
    default: Date.now,
  }
});

module.exports = Todo;
