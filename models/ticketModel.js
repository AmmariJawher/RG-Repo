const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    date: { type: Date, default: Date.now },
    fakeId: {type: Number, required: true},
    eventResult: {type: Number, required: false},
    eventNum: {type : Number, required: true},
    eventTime: {type: Date, required: false},
    minGain : {type : Number  , required: true }, //cool
    maxGain : {type : Number  , required: true }, //cool
    cotesMin: {type : Number  , required: true }, //cool
    cotesMax: {type : Number  , required: true }, //cool
    status : {type : Boolean},
    gr : {type:Number,required: true}, //cool
    mise : {type:Number,required: true}, //test
    ticketWinSum: {type:Number,required: true}, //cool
    combi : {type : Number, required : true}, //cool
    choiceList: {type: Array, required: true}, //cool
});

module.exports = mongoose.model("ticket", ticketSchema);