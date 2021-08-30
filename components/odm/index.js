const mongoose = require("mongoose");
const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const host = process.env.MONGO_HOST;

mongoose.connect(`mongodb://${username}:${password}@${host}:27017`);
module.exports = mongoose;
