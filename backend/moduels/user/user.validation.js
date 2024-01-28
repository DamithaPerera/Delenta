const validation = require("../../util/lib");
// const joi = validation.generateJoi()

exports.userSignInValidation = function (req, res, next) {
    const data = req.body;

    // define the validation schema
    const schema = validation.generateJoi().object().keys({

        email: validation.generateJoi().required(),
        password: validation.generateJoi().required(),

    });

    validation.generateJoi().validate(data, schema, (err, value) => {

        if (err) {
            // send a 422 error response if validation fails
            return res.status(422).json(err.details[0].message);
        } else {
            next();
        }

    });
}

exports.userSignInUp = function (req, res, next) {
    const data = req.body;

    // define the validation schema
    const schema = validation.generateJoi().object().keys({

        email: validation.generateJoi().required(),
        password: validation.generateJoi().required(),

    });

    validation.generateJoi().validate(data, schema, (err, value) => {

        if (err) {
            // send a 422 error response if validation fails
            return res.status(422).json(err.details[0].message);
        } else {
            next();
        }

    });
}

exports.userChangePassword = function (req, res, next) {
    const data = req.body;
    const schema = validation.generateJoi().object().keys({

        email: validation.generateJoi().required(),
        oldPassword: validation.generateJoi().required(),
        newPassword: validation.generateJoi().required()
    });
    validation.generateJoi().validate(data, schema, (err, value) => {
        if (err) {
            return res.status(422).json(err.details[0].message);
        } else {
            next();
        }
    });
}

exports.userForgotPassword = function (req, res, next) {
    const data = req.body;
    const schema = validation.generateJoi().object().keys({

        email: validation.generateJoi().required()
    });
    validation.generateJoi().validate(data, schema, (err, value) => {
        if (err) {
            return res.status(422).json(err.details[0].message);
        } else {
            next();
        }
    });
}

exports.userForgotPasswordChange = function (req, res, next) {
    const data = req.body;
    const schema = validation.generateJoi().object().keys({

        token: validation.generateJoi().required(),
        newPassword: validation.generateJoi().required(),
        email: validation.generateJoi().required()
    });
    validation.generateJoi().validate(data, schema, (err, value) => {
        if (err) {
            return res.status(422).json(err.details[0].message);
        } else {
            next();
        }
    });
}

exports.userUpdate = function (req, res, next) {
    const data = req.body;
    const schema = validation.generateJoi().object().keys({

        email: validation.generateJoi().required(),
        newName: validation.generateJoi().required()
    });
    validation.generateJoi().validate(data, schema, (err, value) => {
        if (err) {
            return res.status(422).json(err.details[0].message);
        } else {
            next();
        }
    });
}