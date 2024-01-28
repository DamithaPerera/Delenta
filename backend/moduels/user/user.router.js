const express = require("express");
const router = express.Router();
const {
    userSignUpController,
    userSignInController,
    userChangePasswordController,
    userForgotPasswordController, userForgotPasswordChangeController
} = require("./user.controller");

// router.get('/:profileId', getAllComments);
// router.put('/:commentId', updateComment);
router.post('/signUp', userSignUpController);
router.post('/signIn', userSignInController);
router.post('/changePassword', userChangePasswordController);
router.post('/forgotPassword', userForgotPasswordController);
router.post('/forgotPassword/change', userForgotPasswordChangeController);


module.exports = router;
