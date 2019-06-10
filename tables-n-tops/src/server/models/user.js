"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = new Schema({
    username: { type: String, required: true, index: { unique: true } }
});

module.exports = mongoose.model("User", User);