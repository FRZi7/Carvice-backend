const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId
const {Schema} =  mongoose

const mechanicSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    carname:{
        type:String,
    },
    numberplate:{
        type:String,
    },
    phone:{
        type:Number,
    },
    address:{
        type:String,
    },
    user:{
    type:ObjectId,
        ref:"User"
    },
    issue:{
        type:String
    }
})

module.exports = mongoose.model("Mechanic",mechanicSchema)