
const mongoose = require('mongoose')

const guestSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    item:{
        type:String,
        required:true,
        default:'Clothes'
    },
    isconfirmed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('guest',guestSchema)
