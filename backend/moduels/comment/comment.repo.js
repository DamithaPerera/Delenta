const userModel = require('../../models/user');
const postModel = require('../../models/post');
const commentModel = require('../../models/comment');


exports.checkUserRepo = async (userId) => {
    return userModel.findOne({
        id: userId,
        softDelete: false
    })
}


exports.createCommentRepo = async (requestBody) => {
    return commentModel.create({
        postId: requestBody.postId,
        comment: requestBody.content,
        commentedUserId: requestBody.commentedUserId
    })
}

exports.updateCommentRepo = async (requestBody) => {
    return commentModel.findOneAndUpdate({
        postId: requestBody.postId
    }, {comment: requestBody.content})
}