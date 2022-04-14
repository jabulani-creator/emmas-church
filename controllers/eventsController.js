import Event from "../models/Event.js"
import { StatusCodes } from "http-status-codes"
import { BadRequestError } from "../errors/index.js"


const createEvent = async (req, res) => {
    const {eventTitle, date, eventPhoto} = req.body

    if(!eventTitle || !date || !eventPhoto){
        throw new BadRequestError('Please Provide All Values')
    }

    req.body.createdBy = req.user.userId

    const event = await Event.create(req.body)
    res.status(StatusCodes.CREATED).json({event})
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