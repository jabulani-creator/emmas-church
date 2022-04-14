import express from 'express'
const router = express.Router()
import {createHealthPost, deleteHealthPost, getAllHealthPosts, updateHealthPost} from '../controllers/healthController.js'
import authenticateUser from '../middleware/auth.js'
router.route('/').post(authenticateUser, createHealthPost).get(getAllHealthPosts)
router.route('/:id').delete(authenticateUser, deleteHealthPost).patch(authenticateUser, updateHealthPost)


export default router