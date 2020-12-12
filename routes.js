const ticketController = require('./controllers/ticketController')
const eventController = require('./controllers/eventController')

module.exports = (app) => {
  app.post('/ticket', ticketController.createTicket)
  app.get('/tickets', ticketController.getAllTickets)
  app.get('/ticket', ticketController.getTicket) 

  app.post('/event', eventController.createEvent)
  app.get('/events', eventController.getAllEvents)
  app.get('/event', eventController.getEvent)
}
