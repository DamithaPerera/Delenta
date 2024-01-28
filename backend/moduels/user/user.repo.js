const userModel = require('../../models/user')

exports.userSignUpUserCheckRepo = async (email) => {
    return userModel.findOne({
        email: email,
        softDelete: false
    })
}

exports.userSignUpUserEmailCheckRepo = async (email) => {
    return userModel.findOne({
        email: email,
    })
}

exports.userSignUpRepo = async (body) => {
    return userModel.create(body);
}

exports.userPasswordUpdateRepo = async (email, password) => {
    return userModel.findOneAndUpdate({
        email: email
    }, {password: password});
}

exports.userPasswordTokenUpdateRepo = async (email, password) => {
    return userModel.findOneAndUpdate({
        email: email
    }, {forgotPasswordToken: password});
}

exports.userUpdateRepo = async (requestBody) => {
    return userModel.findOneAndUpdate({
        email: requestBody.email
    }, {name: requestBody.newName});
}

// soft delete
exports.userDeleteRepo = async (userId) => {
    return userModel.findOneAndUpdate({
        id: userId
    }, {softDelete: true});
}

exports.getUserById = async (userId) => {
    return userModel.findOne({
        id: userId
    }, {softDelete: false, password: 0, forgotPasswordToken: 0, _id: 0});
}

exports.getAllUsersRepo = async (limit, page) => {
    return userModel.find({}, {softDelete: false, password: 0, forgotPasswordToken: 0, _id: 0}).limit(limit).skip(page)
}