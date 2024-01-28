const {userSignUpUserCheckRepo, userSignUpRepo} = require("./user.repo");
const {generateBcrypt} = require("../../util/lib");


exports.userSignUpService = async (requestBody) => {
    const userExist = await userSignUpUserCheckRepo(requestBody.email)
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