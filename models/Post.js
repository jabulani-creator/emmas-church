import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    postTitle: {
        type: String,
        required: [true, 'please provide post title'],
        maxlength: 100,
        unique: true
    },
    postDesc: {
        type: String,
        required: [true, 'please provide post description']
    },
    postPhoto: {
        type: String
        // required: [true, 'please provide post image']
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
      },
},{timestamps: true})

export default mongoose.model('Post', PostSchema)