const {createCommentService, updateCommnetService, deleteCommentService} = require("./commnet.service");


let msg = {};

exports.createCommentController = async (req, res, next) => {
    try {
        const requestBody = req.body
        const response = await createCommentService(requestBody)
        msg.message = "success"
        msg.data = response
        res.status(201).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};

exports.updateCommnetController = async (req, res, next) => {
    try {
        const requestBody = req.body
        const response = await updateCommnetService(requestBody)
        msg.message = "success"
        msg.data = response
        res.status(201).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};

exports.deleteCommentController = async (req, res, next) => {
    try {
        const {commentId} = req.params
        const response = await deleteCommentService(commentId)
        msg.message = "success"
        msg.data = response
        res.status(201).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};