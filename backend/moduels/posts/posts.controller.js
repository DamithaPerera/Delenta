const {creatPostService, getAllPostService} = require("./post.service");

let msg={};

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
        const response = await getAllPostService()
        msg.message = "success"
        msg.data = response
        res.status(201).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};