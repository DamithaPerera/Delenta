const express = require("express");
const router = express.Router();
const {
    userSignUpController,
    userSignInController,
    userChangePasswordController,
    userForgotPasswordController,
    userForgotPasswordChangeController,
    userUpdateController,
    userDeleteController,
    getAllUsersController,
    getOneUserController
} = require("./user.controller");
const validation = require("./user.validation");

router.get('/all', getAllUsersController);
router.get('/:userId', getOneUserController);
router.post('/signUp', validation.userSignInUp, userSignUpController);
router.post('/signIn', validation.userSignInValidation, userSignInController);
router.post('/changePassword', validation.userChangePassword, userChangePasswordController);
router.post('/forgotPassword', validation.userForgotPassword, userForgotPasswordController);
router.post('/forgotPassword/change', validation.userForgotPasswordChange, userForgotPasswordChangeController);
router.put('/edit', validation.userUpdate, userUpdateController);
router.delete('/delete/:userId', userDeleteController);


module.exports = router;
