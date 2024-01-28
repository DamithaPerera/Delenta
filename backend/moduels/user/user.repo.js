const userModel = require('../../models/user')

exports.userSignUpUserCheckRepo = async (email) => {
    return userModel.findOne({
        email: email
    })
}

exports.userSignUpRepo = async (body) => {
    return userModel.create(body);
}