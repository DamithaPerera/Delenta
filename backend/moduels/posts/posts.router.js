const express = require("express");
const {
    createPostController,
    getAllPostController,
    updatePostController,
    deletePostController, getAllBanndPostController
} = require("./posts.controller");
const router = express.Router();
const validation = require('./posts.validation');

router.get('/all', getAllPostController);
router.get('/all/banned', getAllBanndPostController);
router.post('/create', validation.postCreateValidation, createPostController);
router.put('/update', validation.postUpdateValidation, updatePostController);
router.delete('/delete/:postId', deletePostController);


module.exports = router;