const express = require("express");
const router = express.Router();
const {
    userSignUpController,
    userSignInController,
    userChangePasswordController,
    userForgotPasswordController, userForgotPasswordChangeController, userUpdateController, userDeleteController,
    getAllUsersController
} = require("./user.controller");

router.get('/all', getAllUsersController);
// router.put('/:commentId', updateComment);
router.post('/signUp', userSignUpController);
router.post('/signIn', userSignInController);
router.post('/changePassword', userChangePasswordController);
router.post('/forgotPassword', userForgotPasswordController);
router.post('/forgotPassword/change', userForgotPasswordChangeController);
router.put('/edit', userUpdateController);
router.delete('/delete/:userId', userDeleteController);


module.exports = router;
