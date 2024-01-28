const express = require("express");
const router = express.Router();
const {userSignUpController} = require("./user.controller");

// router.get('/:profileId', getAllComments);
// router.put('/:commentId', updateComment);
router.post('/signUp', userSignUpController);
// router.post('/like', likeComment);


module.exports = router;
