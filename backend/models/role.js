const {generateUuid} = require("../util/lib");
const mongoose = require("mongoose");
const roleTypes = require("../util/enum");
const type = require("../util/enum");


const roleSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: generateUuid
        },
        roleType: {
            type: String,
            enum: Object.values(type.roleTypes),
        }
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

roleSchema.set("autoIndex", true);
module.exports = mongoose.model("Role", roleSchema);
