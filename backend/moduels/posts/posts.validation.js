const validation = require("../../util/lib");

exports.postCreateValidation = function (req, res, next) {
    const data = req.body;

    // define the validation schema
    const schema = validation.generateJoi().object().keys({

        content: validation.generateJoi().required(),
        userId: validation.generateJoi().required()
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

exports.postUpdateValidation = function (req, res, next) {
    const data = req.body;

    // define the validation schema
    const schema = validation.generateJoi().object().keys({

        postId: validation.generateJoi().required(),
        content: validation.generateJoi().required()
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