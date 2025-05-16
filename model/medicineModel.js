const mongoose = require('mongoose')
const validator = require('validator')

const medicineSchema = new mongoose.Schema({
    medicineName:{
        type:String,
        required:[true,'Please tell us your medicine'],
    },
    medicineDescription:{
        type:String,
        required:[true,'Please tell us your medicine description'],
    }

})
const Medicine = mongoose.model('Medicine',medicineSchema)
module.exports=Medicine