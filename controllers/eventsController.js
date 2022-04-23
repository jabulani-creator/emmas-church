import Event from "../models/Event.js"
import { StatusCodes } from "http-status-codes"
import { BadRequestError } from "../errors/index.js"
import checkPermission from "../utils/checksPermission.js"


const createEvent = async (req, res) => {
    const {eventTitle, eventDate, eventDesc} = req.body

    if(!eventTitle || !eventDate || !eventDesc){
        throw new BadRequestError('Please Provide All Values')
    }

    req.body.createdBy = req.user.userId

    const event = await Event.create(req.body)
    res.status(StatusCodes.CREATED).json({event})
}
const deleteEvent = async (req, res) => {
    const {id : eventId} = req.params

    const event = await Event.findOne({_id : eventId})

    if(!event){
        throw new NotFoundError(`No event with id ${eventId}`)
    }

    checkPermission(req.user, event.createdBy)

    await event.remove()
    res.status(StatusCodes.OK).json({msg : 'Success! Event removed'})

}
const getAllEvents = async (req, res) => {
    const events = await Event.find()

    res.status(StatusCodes.OK).json({events,totalEvents: events.length, numOfEventsPages: 1})

}
const updateEvent = async (req, res) => {
    const {id : eventId} = req.params

    const {eventDate, eventDesc, eventTitle} = req.body

    if(!eventDate || !eventDesc || !eventTitle){
        throw new BadRequestError('Please Provide All Values')
    }

    const event = await Event.findOne({_id : eventId})

    if(!event){
        throw new NotFoundError(`No event with id ${eventId}`)
    }

    checkPermission(req.user, event.createdBy)
    const updateEvent = await Event.findByIdAndUpdate({_id : eventId}, req.body, {
        new: true,
        runValidators: true
    })
    res.status(StatusCodes.OK).json({updateEvent})
}

export {createEvent, deleteEvent, getAllEvents, updateEvent}