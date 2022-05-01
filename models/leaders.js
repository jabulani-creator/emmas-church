import mongoose from 'mongoose'

const LeaderSchema = new mongoose.Schema({
    leaderName: {
        type: String,
        required: true
    },
    leaderPosition: {
        type: String,
        required: true
    },
    leaderPhone: {
        type: String,
        required: true
    },
    leaderEmail: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: 'https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFzdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }

},{timestamps: true})

export default mongoose.model('Leader', LeaderSchema)