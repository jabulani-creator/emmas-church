import express from "express";
const router = express.Router()
import { createRequest, deleteRequest, updateRequest, getAllRequest } from "../controllers/contactController.js";
import authenticateUser from '../middleware/auth.js'

router.route('/').post(createRequest).get(authenticateUser, getAllRequest)
router.route('/:id').delete(authenticateUser, deleteRequest)


export default router