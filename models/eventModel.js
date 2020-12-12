const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    date: { type: Date, default: Date.now },
    number: {type : Number  , required: true },
    result: {type : Number  , required: true }
});

module.exports = mongoose.model("event", eventSchema);