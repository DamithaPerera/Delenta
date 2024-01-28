const {checkUserRepo, createPostRepo, getAllPostRepo, updatePostRepo, deletePostRepo, getAllBandedPostRepo} = require("./posts.repo");


exports.creatPostService = async (requestBody) => {
    const userExist = await checkUserRepo(requestBody.userId)
    if (!userExist) {
        throw {message: "User does not exists"};
    }
    const data = {
        cratedUserId: requestBody.userId,
        content: requestBody.content,
        postedUserType: requestBody.userTpye
    }
    return createPostRepo(data)
};

exports.getAllPostService = async (limit, page) => {
    return getAllPostRepo(+limit, +page)
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