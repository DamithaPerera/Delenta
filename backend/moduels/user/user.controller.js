const {
    userSignUpService,
    userSignInService,
    userChangePasswordService,
    userForgotPasswordService, userForgotPasswordChangeService, userDeleteService, userAllUsersService,
    getOneUserService
} = require("./user.service");


let msg = {}

exports.userSignUpController = async (req, res, next) => {
    try {
        const requestBody = req.body
        const response = await userSignUpService(requestBody)
        msg.message = "success"
        msg.data = response
        res.status(201).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};

exports.userSignInController = async (req, res, next) => {
    try {
        const requestBody = req.body
        const session = req.session.id;
        // console.log('sessionData', session && session.cookie && session.cookie.expires)
        const response = await userSignInService(requestBody, session)
        msg.message = "success"
        msg.data = response
        res.status(200).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};

exports.userChangePasswordController = async (req, res, next) => {
    try {
        const requestBody = req.body
        const response = await userChangePasswordService(requestBody)
        msg.message = "success"
        msg.data = response
        res.status(200).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};

exports.userForgotPasswordController = async (req, res, next) => {
    try {
        const requestBody = req.body
        const response = await userForgotPasswordService(requestBody)
        msg.message = "success"
        msg.data = response
        res.status(200).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};

exports.userForgotPasswordChangeController = async (req, res, next) => {
    try {
        const requestBody = req.body
        const response = await userForgotPasswordChangeService(requestBody)
        msg.message = "success"
        msg.data = response
        res.status(200).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};


exports.userUpdateController = async (req, res, next) => {
    try {
        const requestBody = req.body
        const response = await userForgotPasswordChangeService(requestBody)
        msg.message = "success"
        msg.data = response
        res.status(200).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};

exports.userDeleteController = async (req, res, next) => {
    try {
        // admin logic
        const {userId} = req.params
        const response = await userDeleteService(userId)
        msg.message = "success"
        msg.data = response
        res.status(200).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};

exports.getAllUsersController = async (req, res, next) => {
    try {
        // admin logic
        const {limit, page} = req.query
        const response = await userAllUsersService(limit, page)
        msg.message = "success"
        msg.data = response
        res.status(200).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};

exports.getOneUserController = async (req, res, next) => {
    try {
        const {userId} = req.params
        const response = await getOneUserService(userId)
        msg.message = "success"
        msg.data = response
        res.status(200).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};