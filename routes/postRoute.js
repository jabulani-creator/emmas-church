import express from 'express'
const router = express.Router()
import {createPost, deletePost, getAllPosts, updatePost} from '../controllers/postController.js'
import authenticateUser from '../middleware/auth.js'
import multer from 'multer'

// const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null, '../client/src/assets/upload/');
//     },
//     filename: (req, file, callback) => {
//         callback(null, file.originalname);
//     }
//     , upload.single("postPhoto")
// })
// const upload = multer({storage: storage});

router.route('/').post(authenticateUser, createPost).get(getAllPosts)
router.route('/:id').delete(authenticateUser, deletePost).patch(authenticateUser, updatePost)


export default router