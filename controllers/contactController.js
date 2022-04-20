import Contact from "../models/Contact.js";
import { StatusCodes } from "http-status-codes";
import {BadRequestError} from '../errors/index.js'


const createRequest = async (req, res) => {
    const {name, phone} = req.body

    if(!name || !phone){
        throw new BadRequestError('Please Provide All Values')
    }

    const request = await Contact.create(req.body)
    res.status(StatusCodes.CREATED).json({request})
}

const deleteRequest = async (req, res) => {
    res.send('request deleted')
}

const getAllRequest = async (req, res) => {
    res.send('all request')
}

const updateRequest = async (req, res) => {
    res.send('update request')
}

export {createRequest, deleteRequest, getAllRequest, updateRequest}