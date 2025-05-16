const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please tell us your name!'],
    },
    cid:{
        type:Number,
        required:[true,'Please provide us your cid'],
        minlength:11,
    },
    photo: {
        type:String,
        default: "default.png",
    },
    creatdAt:{
        type: Date, default: Date.now,
    },
    gender:{
        type:String,
        enum:['Female','Male'],
    },
    dateOfBirth:{
        type:Date,
    },
    password:{
        type:String,
        required:[true,'Please Provide a password'],
        minlength:8,
        // password wont be included when we get the user
        select:false,
    },
    roleName:{
        type:String,
        enum:['Patient','Doctor'],
        default:'Patient', 
    },
    passwordConfirm: {
        type: String,
        required: [true, "please confirm your password"],
        validate: {
            validator: function (el) {
                return el === this.password
            },
            message: 'Passwords are not the same',
        }
       
    }
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 12)
    this.passwordConfirm = undefined
    next()
})
userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword,
){
    return await bcrypt.compare(candidatePassword, userPassword)
}

userSchema.pre('findOneAndUpdate', async function (next) {
    const update = this.getUpdate();
    if (update.password !== '' &&
    update.password !== undefined &&
    update.password == update.passwordConfirm) {
    this.getUpdate().password = await bcrypt.hash(update.password, 12)
    update.passwordConfirm = undefined
    next()    
    }else
    next()
})
const User = mongoose.model('User',userSchema)
module.exports=User