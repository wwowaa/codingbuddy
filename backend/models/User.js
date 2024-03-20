import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    nickname: {type: String, required: true},
    password: {type: String, required: true},
    email:{type: String, required: true},
    description:{type: String, required: false},
    date_of_birth:{type: Date, required: false},
    date_of_registration:{type: Date, required: true},
    // roles: [{type:String, ref:'Role'}]
})

export default mongoose.model('User', UserSchema)