const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    fakeId: {type: Number, required: true},
    eventNum: {type : Number, required: true},
    date: { type: Date, default: Date.now },
    maxGain : {type : Number  , required: true },
    minGain : {type : Number  , required: true },
    Gr : { type: Number, required : true},
    combo : {type : Number, required : true},
    choices: {type: Array, required: true},
    selectionCount : {type :Number , required : true},
    miseTotal : {type:Number,required: true},
    status : {type : Boolean}
});

module.exports = mongoose.model("ticket", ticketSchema);
