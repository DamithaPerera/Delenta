const {createCommentRepo, updateCommentRepo, deleteCommentRepo} = require("./comment.repo");


exports.createCommentService = async (requestBody) => {
    return createCommentRepo(requestBody)
};

exports.updateCommnetService = async (requestBody) => {
    return updateCommentRepo(requestBody)
};

exports.deleteCommentService = async (commentId) => {
    return deleteCommentRepo(commentId)
};