const express = require("express");
const {createPostController} = require("./posts.controller");
const router = express.Router();


router.post('/create', createPostController);





module.exports = router;