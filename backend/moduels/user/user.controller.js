const {userSignUpService, userSignInService} = require("./user.service");


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
        const response = await userSignInService(requestBody,session)
        msg.message = "success"
        msg.data = response
        res.status(200).json(msg);
    } catch (error) {
        msg.message = "fail"
        msg.data = error.message
        res.status(400).json(msg);
    }
};