import express from 'express'
const router = express.Router()
import {createPost, deletePost, getAllPosts, updatePost, getPost} from '../controllers/postController.js'
import authenticateUser from '../middleware/auth.js'
// import multer from 'multer'

// const storage = multer.diskStorage({
//     destination(req, file, cb) {
//         cb(null, 'uploads/')
//     },
//     filename(req, file, cb) {
//         cb(
//             null,
//             `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
//         )
//     },
// })

// function checkFileType(file, cb) {
//     const filetypes = /jpg|jpeg|png/
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
//     const mimetype = filetypes.test(file.mimetype)
  
//     if (extname && mimetype) {
//       return cb(null, true)
//     } else {
//       cb('Images only!')
//     }
//   }

//   const upload = multer({
//     storage,
//     fileFilter: function (req, file, cb) {
//       checkFileType(file, cb)
//     },
//   })

router.route('/').post(authenticateUser, createPost).get(getAllPosts)
router.route('/:id').delete(authenticateUser, deletePost).patch(authenticateUser, updatePost).get(getPost)


export default router