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

exports.getAllPostRepo = async () => {
    return postModel.aggregate([
        {
            $lookup: {
                from: 'users',
                localField: 'cratedUserId',
                foreignField: 'id',
                as: 'userDetails'
            }
        },
        {
            $unwind: '$userDetails'
        },
        {
            $match: {
                banned: false
            }
        },
        {
            $project: {
                id: 1,
                content: 1,
                created_at: 1,
                updated_at: 1,
                userDetails: {name: 1, email: 1}
            }
        }
    ]);
}

exports.updatePostRepo = async (requestBody) => {
    return postModel.findOneAndUpdate({
        id: requestBody.postId
    }, {content: requestBody.content})
}


exports.deletePostRepo = async (postId) => {
    return postModel.deleteOne({
        id: postId
    })
}

exports.getAllBandedPostRepo = async (postId) => {
    return postModel.find({
        banned: true
    })
}