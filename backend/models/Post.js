import mongoose from 'mongoose'
import Category from './Category'

const PostSchema = new mongoose.Schema({
    blog_id:{type: mongoose.SchemaTypes.ObjectId, required:true},
    title: {type: String, required: true},
    description:{type: String, required: false},
    publication_date:{type: Date, required: true},
    image:{type:String, required: false},
    rating:{type:Number, required: true}
})

export default mongoose.model('Post', PostSchema)