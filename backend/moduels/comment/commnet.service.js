const {createCommentRepo} = require("./comment.repo");


exports.createCommentService = async (requestBody) => {
    return createCommentRepo(requestBody)
};