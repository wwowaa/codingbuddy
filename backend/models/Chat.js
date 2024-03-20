import mongoose from 'mongoose'

const ChatSchema = new mongoose.Schema({
    administrator_list:{type: [User], required:true},
    participant_list:{type: [User], required:false},
    name: {type: String, required: true},
    chat_image:{type: String, required: false},
    description:{type: String, required: false},
})

export default mongoose.model('Chat', ChatSchema)