const express = require("express");
const {createPostController, getAllPostController, updatePostController} = require("./posts.controller");
const router = express.Router();

router.get('/all', getAllPostController);
router.post('/create', createPostController);
router.put('/update', updatePostController);


module.exports = router;