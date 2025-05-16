
const User = require('./../model/userModels')
const jwt = require('jsonwebtoken')
const AppError = require('./../utils/appError')
const promisify = require('util').promisify
// const user = require('./../model/userModels')

const signToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_EXPIRES_IN,
  })
}
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id)
  const cookiesOptions = {
    expires : new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 1000,
    ),
    httpOnly: true,
  }
  res.cookie('jwt', token, cookiesOptions)
  res.status(statusCode).json({
    status:'success',
    token,
    data : {
      user
    }
  })
}
exports.signup = async (req, res, next) => {
   try{
    const newUser = await User.create(req.body)
    createSendToken(newUser, 201, res)
  }
  catch(err){
    res.status(500).json({error: err.message});
  }
}

exports.login = async (req, res, next) => {
  try{
  //   console.log(req.headers)
    const {cid, password} = req.body
    // 1) check if cid and password exist
    if(!cid || !password){
      return next(new AppError('Please provide an cid and password!', 400))
    }
    // 2) check if user exists && password is correct
    const user = await User.findOne({cid}).select('+password')
   
    if (!user || !(await user.correctPassword(password, user.password))){
      return next(new AppError('Incorrect cid or password', 401))
    }

    // 3) if everything is ok, send token to client
    createSendToken(user, 200, res)
  }catch(err){
    res.status(500).json({error: err.message});
  }
}
exports.logout = (req, res) => {
  res.cookie('token', '', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  })
  res.status(200).json({status: 'success'})
}

exports.protect = async (req, res, next) => {
  try {
    // 1) Getting token and check of it's there
    let token
    if(
      req.headers.authorization && 
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1]
    }
    else if (req.cookies.jwt) {
      token = req.cookies.jwt
    }
    if (!token){
      return next (
        new AppError('You are not logged in! Please log in to get access.', 401)
      )
    }
    // 2) verfication token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    console.log(decoded)
    // 3) check if user still exits
    const freshUser = await User.findById(decoded.id)
    if (!freshUser) {
      return next (
        new AppError('The user belonging to this token no longer exist', 401)
      )
    }
    // Grant access to protected route
    req.user = freshUser
    next()

  }
 
  catch(err) {
    res.status(500).json({error: err.message});
  }
}

exports.updatePassword = async (req, res, next) => {
  try{
    //1) Get user from collection
    const user = await User.findById(req.user.id).select('+password')
    //2) check if posted current password is correct
    if(!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
      return next(new AppError('Your current is wrong', 401))
    }
    //3) If so, update password
    user.password = req.body.password
    user.passwordConfirm = req.body.passwordConfirm
    await user.save()
    //4) log user in, send JWT
    createSendToken(user, 200, res)
  }
  catch(err){
    res.status(500).json({error: err.message})
  }
}