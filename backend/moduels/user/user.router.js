const express = require("express");
const router = express.Router();
const {userSignUpController, userSignInController, userChangePasswordController} = require("./user.controller");

// router.get('/:profileId', getAllComments);
// router.put('/:commentId', updateComment);
router.post('/signUp', userSignUpController);
router.post('/signIn', userSignInController);
router.post('/changePassword', userChangePasswordController);


module.exports = router;
