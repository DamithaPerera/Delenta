const connectDB = require("../database/db");
const userRole = require("../models/role");
const {roleTypes} = require("../util/enum");

async function up () {
    connectDB()
  // Write migration here
    await userRole.create({roleType: roleTypes.SUPER_ADMIN});
    await userRole.create({roleType: roleTypes.ADMIN});
    await userRole.create({roleType: roleTypes.NORMAL_USER});
    await userRole.create({roleType: roleTypes.GUEST});
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down () {
    connectDB()
  // Write migration here
    await userRole.deleteOne({roleType: roleTypes.SUPER_ADMIN});
    await userRole.deleteOne({roleType: roleTypes.ADMIN});
    await userRole.deleteOne({roleType: roleTypes.SUPER_ADMIN});
    await userRole.deleteOne({roleType: roleTypes.GUEST});
}

module.exports = { up, down };
