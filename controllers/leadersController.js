import Leader from '../models/leaders.js'
import { StatusCodes } from "http-status-codes";
import checkPermission from "../utils/checksPermission.js";
import {BadRequestError, NotFoundError} from '../errors/index.js'

const createPosition = async (req, res) => {
   const {leaderName, leaderPosition, leaderPhone, leaderEmail} = req.body

   if(!leaderName || !leaderPosition || !leaderPhone || !leaderEmail){
    throw new BadRequestError('Please Provide All Values')
   }

   const positionAlreadyExists = await Leader.findOne({leaderPosition})
   if(positionAlreadyExists){
       throw new BadRequestError('position already exists')
   }

   const leader = await Leader.create({leaderName, leaderPosition, leaderPhone, leaderEmail})
   res.status(StatusCodes.CREATED).json({
       leader : {
           leaderName: leader.leaderName,
           leaderPosition: leader.leaderPosition,
           leaderPhone: leader.leaderPhone,
           leaderEmail: leader.leaderEmail,
       },
       photo: leader.photo,
   })
}
const getAllPosition = async (req, res) => {
    const leader = await Leader.find({})
    res.status(StatusCodes.OK).json({leader})
}
const updatePosition = async (req, res) => {
    const {id: leaderId} = req.params
    const {leaderName, position, phone, email, photo} = req.body
    const leader = await Leader.findById({_id : leaderId})

    if(!leader){
        throw new NotFoundError(`No Leader with id ${leaderId}`)
    }
    checkPermission(req.user, leader.createdBy)

    const updatedLeader = await Leader.findByIdAndUpdate({_id : leaderId}, req.body, {
        new: true,
        runValidators: true,
    })

    res.status(StatusCodes.OK).json({ updatedLeader })
}
const deletePosition = async (req, res) => {
    res.send('position deleted')
}

export {createPosition, getAllPosition, deletePosition, updatePosition}