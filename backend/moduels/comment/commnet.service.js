const {createCommentRepo, updateCommentRepo} = require("./comment.repo");


exports.createCommentService = async (requestBody) => {
    return createCommentRepo(requestBody)
};

exports.updateCommnetService = async (requestBody) => {
    return updateCommentRepo(requestBody)
};