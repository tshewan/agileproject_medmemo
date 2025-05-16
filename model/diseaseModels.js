const mongoose = require('mongoose')
const validator = require('validator')

const diseaseSchema = new mongoose.Schema({
    diseaseName:{
        type:String,
        required:[true,'please provide us your disease name'],
    },
    diseaseDescription:{
        type:String,
        required:[true,'please provide us your disease discription'],
    }
})
const Disease = mongoose.model('Disease',diseaseSchema)
module.exports= Disease