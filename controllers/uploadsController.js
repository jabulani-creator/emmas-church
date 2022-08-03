import { StatusCodes } from "http-status-codes";
import path from "path";
import fs from "fs";
import cloudinary from "cloudinary";
import { BadRequestError } from "../errors/index.js";

const uploadImage = async (req, res) => {
  const postImage = req.files.image;
  if (!req.files) {
    throw new BadRequestError("no file upload");
  }
  if (!postImage.mimetype.startsWith("image")) {
    throw new BadRequestError("no file upload");
  }
  const maxSize = 1024 * 1024;
  if (postImage.size > maxSize) {
    throw new BadRequestError("file size too big");
  }
  const __dirname = path.resolve();
  console.log(__dirname);
  const imagePath = path.join(__dirname, `./public/uploads/${postImage.name}`);
  await postImage.mv(imagePath);
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${postImage.name}` } });
};
const uploadImagecloud = async (req, res) => {
  const result = await cloudinary.v2.uploader.upload(
    req.files.image.tempFilePath,
    { use_filename: true, folder: "emmsadale-church" }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

export default uploadImage;
