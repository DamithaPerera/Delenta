const {checkUserRepo, createPostRepo, getAllPostRepo, updatePostRepo, deletePostRepo, getAllBandedPostRepo} = require("./posts.repo");


exports.creatPostService = async (requestBody) => {
    const userExist = await checkUserRepo(requestBody.userId)
    if (!userExist) {
        throw {message: "User does not exists"};
    }
    const data = {
        cratedUserId: requestBody.userId,
        content: requestBody.content
    }
    return createPostRepo(data)
};

exports.getAllPostService = async (limit, page) => {
    const skip = (page - 1) * limit;
    return getAllPostRepo(limit, skip)
};

exports.updatePostService = async (requestBody) => {
    return updatePostRepo(requestBody)
};

exports.deletePostService = async (postId) => {
    return deletePostRepo(postId)
};

exports.getAllBandedPostService = async () => {
    return getAllBandedPostRepo()
};