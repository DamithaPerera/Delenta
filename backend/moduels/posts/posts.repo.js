const userModel = require('../../models/user');
const postModel = require('../../models/post');


exports.checkUserRepo = async (userId) => {
    return userModel.findOne({
        id: userId,
        softDelete: false
    })
}

exports.createPostRepo = async (body) => {
    return postModel.create(body)
}