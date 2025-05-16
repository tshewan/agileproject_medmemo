const express = require("express");
const userController = require('./../controllers/userController')
const authControlller = require('./../controllers/authController')
const router = express.Router()

const{
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
}
 = require("../controllers/userController");
 const {Router} = require("express");

router.post('/signup', authControlller.signup)
router.post('/login', authControlller.login)
router.get('/logout', authControlller.logout)
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
router.patch(
    '/updateMyPassword',
    authControlller.protect,
    authControlller.updatePassword,
)
router.patch('/updateMe', authControlller.protect, 
 userController.uploadUserPhoto,
            userController.updateMe
)

module.exports = router;