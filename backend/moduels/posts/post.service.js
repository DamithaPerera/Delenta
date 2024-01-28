const {checkUserRepo, createPostRepo, getAllPostRepo, updatePostRepo} = require("./posts.repo");


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

exports.getAllPostService = async () => {
    return getAllPostRepo()
};

exports.updatePostService = async (requestBody) => {
    return updatePostRepo(requestBody)
};