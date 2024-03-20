import mongoose from 'mongoose'

const ParticipationRequestSchema = new mongoose.Schema({
    project_id:{type:mongoose.SchemaTypes.ObjectId, required: true},
    user_id:{type:mongoose.SchemaTypes.ObjectId, required: true},
    text:{type: String, required: false},
    status:{type:String, enum: ['accepted', 'refused', 'evaluated'], required: true},
    creation_date:{type: Date, required: true}
})

export default mongoose.model('ParticipationRequest', ParticipationRequestSchema)