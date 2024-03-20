import mongoose from 'mongoose'
import Category from './Category'

const ProjectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    administrators_list:{type:[mongoose.SchemaTypes.ObjectId], required:true},
    project_link:{type: String, required: false},
    description:{type: String, required: false},
    creation_date:{type: Date, required: true},
    categories:{type:[Category], required: true}
})

export default mongoose.model('Project', ProjectSchema)