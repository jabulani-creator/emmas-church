import Post from "../models/Post.js"
import { StatusCodes } from "http-status-codes"
import {BadRequestError, NotFoundError} from '../errors/index.js'

const createPost = async (req, res) => {
    const {postTitle, postDesc} = req.body
    // const {postPhoto} = req.file.postPhoto

    if(!postTitle || !postDesc){
        throw new BadRequestError('Please Provide All Values')
    }

    req.body.createdBy = req.user.userId

    const post = await Post.create(req.body)
    res.status(StatusCodes.CREATED).json({post})
}
const deletePost = async (req, res) => {
    res.send('deletePost')
}
const getAllPosts = async (req, res) => {
    res.send('getAllPost')
}
const updatePost = async (req, res) => {
    res.send('updatePost')
}

export {createPost, deletePost, getAllPosts, updatePost}