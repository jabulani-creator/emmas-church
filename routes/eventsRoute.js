import express from 'express'
const router = express.Router()
import {createEvent, deleteEvent, getAllEvents, updateEvent} from '../controllers/eventsController.js'
import authenticateUser  from '../middleware/auth.js'

router.route('/').post(authenticateUser, createEvent).get(getAllEvents)
router.route('/:id').delete(authenticateUser, deleteEvent).patch(authenticateUser, updateEvent)


export default router