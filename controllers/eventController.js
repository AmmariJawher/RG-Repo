const { validationResult } = require("express-validator");
const Event = require('../models/eventModel');


module.exports = {
    async createEvent (req, res) {
        const {number,result} = req.body;
        const createEvent = new Event({
            number,
            result
        })

        const event = await createEvent.save();
        res.status(200).send(event.toJSON());
    },
    async getAllEvents (req, res) {
        const events = await Event.find().sort({date: 'desc'}).limit(120);
        res.status(200).send(events);
    },
    async getEvent (req, res) {
        const event = await Event.findOne().sort({date: 'desc'})
        res.status(200).json(event);
    }
}