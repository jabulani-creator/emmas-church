import express from 'express'
const router = express.Router()
import {createPost, deletePost, getAllPosts, updatePost} from '../controllers/postController.js'
import authenticateUser from '../middleware/auth.js'

router.route('/').post(authenticateUser, createPost).get(getAllPosts)
router.route('/:id').delete(authenticateUser, deletePost).patch(authenticateUser, updatePost)


export default router