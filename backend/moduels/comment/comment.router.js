const express = require("express");
const {createCommentController, updateCommnetController, deleteCommentController} = require("./comment.controller");

const router = express.Router();

router.post('/create', createCommentController);
router.put('/update', updateCommnetController);
router.delete('/delete/:commentId', deleteCommentController);


module.exports = router;