const express = require("express");
const {createPostController, getAllPostController} = require("./posts.controller");
const router = express.Router();

router.get('/all', getAllPostController);
router.post('/create', createPostController);


module.exports = router;