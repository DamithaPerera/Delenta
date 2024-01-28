const {userSignUpService} = require("./user.service");


let msg = {}

exports.userSignUpController = async (req, res, next) => {
    try {
        console.log('dd')
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