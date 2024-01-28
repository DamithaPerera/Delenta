const {v4: uuidv4} = require("uuid");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

exports.generateUuid = () => {
    return uuidv4();
};

exports.generateMongoose = () => {
    return mongoose;
};

exports.generateBcrypt = () => {
    return bcrypt;
};