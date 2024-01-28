const express = require("express");
const {
    createPostController,
    getAllPostController,
    updatePostController,
    deletePostController, getAllBanndPostController
} = require("./posts.controller");
const router = express.Router();

router.get('/all', getAllPostController);
router.get('/all/banned', getAllBanndPostController);
router.post('/create', createPostController);
router.put('/update', updatePostController);
router.delete('/delete/:postId', deletePostController);


module.exports = router;