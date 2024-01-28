const express = require("express");
const {createCommentController, updateCommnetController, deleteCommentController} = require("./comment.controller");
const router = express.Router();
const validation = require("./comment.validation");

router.post('/create', validation.userCreateValidation, createCommentController);
router.put('/update', validation.updateCommentValidation, updateCommnetController);
router.delete('/delete/:commentId', deleteCommentController);


module.exports = router;