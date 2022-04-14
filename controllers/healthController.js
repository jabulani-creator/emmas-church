import Health from "../models/Health.js"
import { StatusCodes } from "http-status-codes"
import {BadRequestError} from '../errors/index.js'

const createHealthPost = async (req, res) => {
    const {healthTitle, healthDesc} = req.body

    if(!healthTitle || !healthDesc){
        throw new BadRequestError('Please Provide all Values')
    }

    req.body.createdBy = req.user.userId 

    const health = await Health.create(req.body)
    res.status(StatusCodes.CREATED).json({health})
}
const deleteHealthPost = async (req, res) => {
    res.send('delete Health')
}
const getAllHealthPosts = async (req, res) => {
    res.send('get all HealthPosts')
}
const updateHealthPost = async (req, res) => {
    res.send('update HealthPost')
}

export {createHealthPost, deleteHealthPost, getAllHealthPosts, updateHealthPost}