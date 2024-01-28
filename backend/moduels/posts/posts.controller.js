const {creatPostService, getAllPostService, updatePostService, deletePostService, getAllBandedPostService} = require("./post.service");

let msg = {};

exports.createPostController = async (req, res, next) => {
    try {
        const requestBody = req.body
        const response = await creatPostService(requestBody)
        msg.message = "success"
        msg.data = response
        res.status(201).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};

exports.getAllPostController = async (req, res, next) => {
    try {
        const {limit, page} = req.query
        const response = await getAllPostService(limit, page)
        msg.message = "success"
        msg.data = response
        res.status(201).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};

exports.updatePostController = async (req, res, next) => {
    try {
        const responseBody = req.body;
        const response = await updatePostService(responseBody)
        msg.message = "success"
        msg.data = response
        res.status(201).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};

exports.deletePostController = async (req, res, next) => {
    try {
        const {postId} = req.params;
        const response = await deletePostService(postId)
        msg.message = "success"
        msg.data = response
        res.status(201).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};

exports.getAllBanndPostController = async (req, res) => {
    try {
        //admin logic
        const response = await getAllBandedPostService()
        msg.message = "success"
        msg.data = response
        res.status(201).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};