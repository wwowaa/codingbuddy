import mongoose from 'mongoose'

const PostCommentsSchema = new mongoose.Schema({
    post_id:{type:mongoose.SchemaTypes.ObjectId, required: true},
    comments_ids:{type:[mongoose.SchemaTypes.ObjectId], required: true},
})

export default mongoose.model('PostComments', PostCommentsSchema)