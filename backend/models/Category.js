import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    description:{type: String, required: false}
})

export default mongoose.model('Category', CategorySchema)