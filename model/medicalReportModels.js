const mongoose = require('mongoose')
const validator = require('validator')

const reportSchema = new mongoose.Schema({
    date:{
        type:Date,
        default:[Date.now]
    },
    symptoms:{
        type:String,
        required:[true,'Please provide symptoms'],
      
    },
    disease:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'disease',
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }


})
const Report = mongoose.model('Report',reportSchema)
module.exports=Report