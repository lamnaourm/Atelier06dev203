import { Schema, model } from "mongoose";


const DirectorSchema = new Schema({
    name:{type:String, unique:true},
    birthname:{type:String, required:true},
    birthdate:Date,
    birthplace:{type:String, default:'Casablanca', minLength:4},
})

export default model('director', DirectorSchema)