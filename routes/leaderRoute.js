import express from "express";
const router = express.Router();
import {
  createPosition,
  deletePosition,
  updatePosition,
  getAllPosition,
} from "../controllers/leadersController.js";
import authenticateUser from "../middleware/auth.js";
import Upload from "../middleware/file-upload.js";

router
  .route("/")
  .post(Upload.single("leaderPhoto"), authenticateUser, createPosition)
  .get(getAllPosition);
router
  .route("/:id")
  .delete(authenticateUser, deletePosition)
  .patch(Upload.single("leaderPhoto"), authenticateUser, updatePosition);

export default router;
