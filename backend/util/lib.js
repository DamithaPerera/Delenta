const {v4: uuidv4} = require("uuid");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require('express-session')
const jwt = require('jsonwebtoken');

exports.generateUuid = () => {
    return uuidv4();
};

exports.generateMongoose = () => {
    return mongoose;
};

exports.generateBcrypt = () => {
    return bcrypt;
};

exports.generateSession = () => {
    return session({
        secret: 'my-secrete',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 600000 },
    });
};

exports.generateJwt = () => {
    return jwt;
};