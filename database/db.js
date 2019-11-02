const mongoose = require("mongoose");
require("dotenv").config();
let mongoDB = process.env.DB_CONNECTION;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
let connection = mongoose.connection;
connection.on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
);

module.exports = connection;
