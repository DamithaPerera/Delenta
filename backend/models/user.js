const {generateUuid} = require("../util/lib");
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: generateUuid
        },
        name: {
            type: String,
            maxlength: [50],
            trim: false,
        },
        email: {
            type: String,
            required: false,
        },
        password: {
            type: String,
            required: false,
        },
        roleId: {
            type: String,
            required: true,
        },
        forgotPasswordToken: {
            type: String,
            required: false,
        },
        softDelete: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

userSchema.set("autoIndex", true);
module.exports = mongoose.model("User", userSchema);
