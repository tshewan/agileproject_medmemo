const path = require('path')

// LOG IN PAGE
exports.getLoginForm = (req,res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'))
}

// SIGN UP PAGE 
exports.getSignUpForm = (req, res) => {
    res.sendFile(path.join(__dirname,'../','views', 'signup.html'))
}

// HOME PAGE
exports.getHome = (req, res) => {
    res.sendFile(path.join(__dirname,'../','views', 'lending.html'))
}

// PROFILE PAGE
exports.getProfile = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'myprofilepage.html'))
} 