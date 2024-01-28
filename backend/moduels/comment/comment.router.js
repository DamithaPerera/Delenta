const express = require("express");
const {createCommentController} = require("./comment.controller");

const router = express.Router();

router.post('/create', createCommentController);
// router.put('/update', updateCommnetController);
// router.delete('/delete/:postId', deleteCommentController);


module.exports = router;