const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    schedule:{
        type:String,
        required:[true,'Please provide schedule'],
      
    },
    medicine:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'medicine',   
    },
  
})
const User = mongoose.model('User',userSchema)
module.exports=User