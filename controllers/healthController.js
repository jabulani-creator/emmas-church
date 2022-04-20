import Health from "../models/Health.js"
import { StatusCodes } from "http-status-codes"
import {BadRequestError, NotFoundError} from '../errors/index.js'
import checkPermission from "../utils/checksPermission.js"

const createHealthPost = async (req, res) => {
    const {healthTitle, healthDesc} = req.body

    if(!healthTitle || !healthDesc){
        throw new BadRequestError('Please Provide all Values')
    }
    const titleAlreadyExists = await Health.findOne({healthTitle})
    if(titleAlreadyExists){
        throw new BadRequestError('title already exists')
    }

    req.body.createdBy = req.user.userId 

    const health = await Health.create(req.body)
    res.status(StatusCodes.CREATED).json({health})
}
const deleteHealthPost = async (req, res) => {
    const {id : healthPostId} = req.params

    const healthPost = await Health.findOne({_id: healthPostId})

    if(!healthPost){
        throw new CustomError.NotFoundError(`NO health tip with id: ${healthPostId}`)
    }
    
    checkPermission(req.user, healthPost.createdBy)
    await healthPost.remove()
    res.status(StatusCodes.OK).json({msg: 'Success! health Tip removed'})
}
const getAllHealthPosts = async (req, res) => {
    const {healthSearch, healthSort} = req.query
        
        const queryObject = {}

        if(healthSearch){
            queryObject.healthTitle = {$regex: healthSearch, $options: 'i'}
        }

        let result = Health.find(queryObject)

        if(healthSort === 'latest'){
            result = result.sort('-createdAt')
        }
        if(healthSort === 'oldest'){
            result = result.sort('createdAt')
        }
        if(healthSort === 'a-z'){
            result = result.sort('healthTitle')
        }
        if(healthSort === 'z-a'){
            result = result.sort('-healthTitle')
        }

        const page = Number(req.query.page) || 1
        const limit = Number(req.query.limit) || 1
        const skip = (page - 1) * limit
        result = result.skip(skip).limit(limit)

        const healthPosts = await result

        const totalHealthPost = await  Health.countDocuments(queryObject)
        const numOfHealthPages = Math.ceil(totalHealthPost / limit)
      

    res.status(StatusCodes.OK).json({healthPosts, totalHealthPost, numOfHealthPages})
}
const updateHealthPost = async (req, res) => {
    const {id : healthPostId} = req.params

    const {healthTitle, healthDesc} = req.body

    if(!healthTitle || !healthDesc){
        throw new BadRequestError('Please Provide All Values')
    }

    const healthPost = await Health.findOne({_id: healthPostId})

    if(!healthPost){
        throw new NotFoundError(`No health Tip with id ${healthPostId}`)
    }

    checkPermission(req.user, healthPost.createdBy)
    const updatedHealthPost = await Health.findOneAndUpdate({_id: healthPostId}, req.body, {
        new: true,
        runValidators: true,
    })
    res.status(StatusCodes.OK).json({ updatedHealthPost })
}

export {createHealthPost, deleteHealthPost, getAllHealthPosts, updateHealthPost}