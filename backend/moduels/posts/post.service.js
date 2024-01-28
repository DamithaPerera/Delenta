const {checkUserRepo, createPostRepo} = require("./posts.repo");


exports.creatPostService = async (requestBody) => {
    const userExist = await checkUserRepo(requestBody.userId)
    if (!userExist) {
        throw {message: "User does not exists"};
    }
    return createPostRepo(requestBody)
};