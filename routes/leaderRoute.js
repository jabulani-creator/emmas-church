import express from "express";
const router = express.Router()
import {createPosition, deletePosition, updatePosition, getAllPosition} from '../controllers/leadersController.js'
import authenticateUser from '../middleware/auth.js'

router.route('/').post(authenticateUser, createPosition).get(getAllPosition)
router.route('/:id').delete(authenticateUser, deletePosition).patch(authenticateUser, updatePosition)


export default router