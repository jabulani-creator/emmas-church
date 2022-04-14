const createEvent = async (req, res) => {
    res.send('create Event')
}
const deleteEvent = async (req, res) => {
    res.send('delete event')
}
const getAllEvents = async (req, res) => {
    res.send('get all events')
}
const updateEvent = async (req, res) => {
    res.send('update event')
}

export {createEvent, deleteEvent, getAllEvents, updateEvent}