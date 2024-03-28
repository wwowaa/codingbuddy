import mongoose from 'mongoose'

const ChatCommentsSchema = new mongoose.Schema({
    chat_id:{type:mongoose.SchemaTypes.ObjectId, required: true},
    comments_ids:{type:[mongoose.SchemaTypes.ObjectId], required: true},
})

export default mongoose.model('ChatComments', ChatCommentsSchema)