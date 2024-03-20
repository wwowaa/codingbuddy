import mongoose from 'mongoose'
import Category from './Category'

const CommentSchema = new mongoose.Schema({
    user_id:{type: mongoose.SchemaTypes.ObjectId, required:true},
    reply_to_comment:{type: CommentSchema, required:false},
    text:{type: String, required: true},
    creation_date:{type: Date, required: true},
    files:{type:String, required: false}
})

export default mongoose.model('Comment', CommentSchema)