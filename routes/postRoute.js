import express from "express";
const router = express.Router();
import {
  createPost,
  deletePost,
  getAllPosts,
  updatePost,
  getPost,
} from "../controllers/postController.js";
import authenticateUser from "../middleware/auth.js";
import ImageUpload from "../controllers/uploadsController.js";

router.route("/").post(authenticateUser, createPost).get(getAllPosts);
router
  .route("/:id")
  .delete(authenticateUser, deletePost)
  .patch(authenticateUser, updatePost)
  .get(getPost);
router.route("/uploads").post(ImageUpload);

export default router;
