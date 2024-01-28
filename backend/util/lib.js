const {v4: uuidv4} = require("uuid");
const mongoose = require("mongoose");

exports.generateUuid = () => {
    return uuidv4();
};

exports.generateMongoose = () => {
    return mongoose;
};
