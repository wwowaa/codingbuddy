import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
    administrator_id:{type: mongoose.SchemaTypes.ObjectId, required:true},
    title:{type: String, required: false},
    description:{type: String, required: false},
    creation_date:{type: Date, required: true},
})

export default mongoose.model('Blog', BlogSchema)