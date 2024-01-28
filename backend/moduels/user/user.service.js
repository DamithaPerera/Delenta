const {
    userSignUpUserCheckRepo,
    userSignUpRepo,
    userPasswordUpdateRepo,
    userPasswordTokenUpdateRepo, userUpdateRepo, userDeleteRepo, getUserById, getAllUsersRepo,
    userSignUpUserEmailCheckRepo
} = require("./user.repo");
const {generateBcrypt, generateJwt} = require("../../util/lib");


exports.userSignUpService = async (requestBody) => {
    const userExist = await userSignUpUserEmailCheckRepo(requestBody.email)
    if (userExist) {
        throw {message: "User already exists"};
    }
    requestBody.password = await new Promise((resolve, reject) => {
        generateBcrypt().hash(requestBody.password, 5, (err, bcryptedPassword) => {
            if (err) {
                reject(err);
            } else {
                resolve(bcryptedPassword);
            }
        });
    });
    requestBody.roleId = 'ddd'
    return userSignUpRepo(requestBody)
};

exports.userSignInService = async (requestBody, sessionData) => {
    const userExist = await userSignUpUserCheckRepo(requestBody.email)
    if (!userExist) {
        throw {message: "User does not exists"};
    }
    const data = await generateBcrypt().compare(requestBody.password, userExist.password)
    if (!data) {
        throw {message: "Incorrect Password"};
    }
    return sessionData
};

exports.userChangePasswordService = async (requestBody) => {
    const userExist = await userSignUpUserCheckRepo(requestBody.email)
    if (!userExist) {
        throw {message: "User does not exists"};
    }
    const dd = await generateBcrypt().compare(requestBody.oldPassword, userExist.password);
    if (!dd) {
        throw {message: "User old password is invalid"};
    }
    const password = await generateBcrypt().hash(requestBody.newPassword, 5)
    return userPasswordUpdateRepo(requestBody.email, password)
};

exports.userForgotPasswordService = async (requestBody) => {
    const userExist = await userSignUpUserCheckRepo(requestBody.email)
    if (!userExist) {
        throw {message: "User does not exists"};
    }
    const token = generateJwt().sign({
        data: userExist.email
    }, 'secret', {expiresIn: '1h'});
    await userPasswordTokenUpdateRepo(requestBody.email, token)
    return token
};

exports.userForgotPasswordChangeService = async (requestBody) => {
    const userExist = await userSignUpUserCheckRepo(requestBody.email)
    if (!userExist) {
        throw {message: "User does not exists"};
    }
    return userUpdateRepo(requestBody)
};

exports.userDeleteService = async (userId) => {
    const userExist = await getUserById(userId)
    if (!userExist) {
        throw {message: "User does not exists"};
    }
    return userDeleteRepo(userId)
};

exports.userAllUsersService = async (limit = 10, page = 0) => {
    // Ensure the limit is no greater than 10
    limit = Math.min(parseInt(limit, 10), 10);

    // Ensure page is a non-negative integer
    page = Math.max(parseInt(page, 10), 0);

    return getAllUsersRepo(limit, page);
};

exports.getOneUserService = async (userId) => {
    return getUserById(userId);
};