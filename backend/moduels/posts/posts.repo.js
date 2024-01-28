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
            $lookup: {
                from: 'comments',
                localField: 'id',
                foreignField: 'postId',
                as: 'comments'
            }
        },
        {
            $unwind: {
                path: '$comments',
                preserveNullAndEmptyArrays: true
            }
        },
        {
            $lookup: {
                from: 'users',
                localField: 'comments.commentedUserId',
                foreignField: 'id',
                as: 'commentedUserDetails'
            }
        },
        {
            $unwind: {
                path: '$commentedUserDetails',
                preserveNullAndEmptyArrays: true
            }
        },
        {
            $group: {
                _id: '$_id',
                content: {$first: '$content'},
                id: {$first: '$id'},
                created_at: {$first: '$created_at'},
                updated_at: {$first: '$updated_at'},
                userDetails: {
                    $first: {
                        name: '$userDetails.name',
                        email: '$userDetails.email'
                    }
                },
                comments: {
                    $push: {
                        id: '$comments.id',
                        comment: '$comments.comment',
                        postId: '$comments.postId',
                        commentedUserId: '$comments.commentedUserId',
                        created_at: '$comments.created_at',
                        updated_at: '$comments.updated_at',
                        commentedUserDetails: {
                            name: '$commentedUserDetails.name',
                            email: '$commentedUserDetails.email'
                        }
                    }
                }
            }
        },
        {
            $project: {
                _id: 1,
                content: 1,
                id: 1,
                created_at: 1,
                updated_at: 1,
                userDetails: 1,
                comments: 1
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