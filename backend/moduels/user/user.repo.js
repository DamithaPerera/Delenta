const userModel = require('../../models/user')

exports.userSignUpUserCheckRepo = async (email) => {
    return userModel.findOne({
        email: email
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