const { validationResult } = require("express-validator");
const Ticket = require('../models/ticketModel');


module.exports = {
    async createTicket (req, res) {
        const {date,maxGain,minGain,Gr,combo,choices,selectionCount,miseTotal,status} = req.body;
        const createTicket = new Ticket({
            eventNum,
            date,
            maxGain,
            minGain,
            Gr,
            combo,
            choices,
            selectionCount,
            miseTotal,
            status
        })

        const ticket = await createTicket.save();
        res.status(200).send(ticket.toJSON());
    },
    async getAllTickets (req, res) {
        const { limitNum } = req.body;
        const tickets = await Ticket.find().sort({date: 'desc'}).limit(limitNum);
        res.status(200).send(tickets);
    },
    async getTicket (req, res) {
        // search either by ticket fake Id or event number
        if (req.params['fakeId']){
            const param = req.params['fakeId']
            const ticket = await Ticket.find({fakeId:param})
            res.status(200).send(ticket);
        /*
        }else if(req.params['eventNum']) {
            const param = req.params['eventNum']
            const ticket = await Ticket.find(({eventNum:param}))
            res.status(200).send(ticket);
        */
        }else {
            const ticket = await Ticket.find()
            res.status(200).send(ticket);
        }
    },
    async updateTicket (req, res) {
        // update every ticket status after result shown 
        const {eventNum, result} = req.body
        Person.find().where( eventNum, result).update({ status: true });
    }
}