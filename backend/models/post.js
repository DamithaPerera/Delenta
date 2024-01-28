const {generateUuid, generateMongoose} = require("../util/lib");
const mongoose = generateMongoose();

const postSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: generateUuid
        },
        content: {
            type: String,
            trim: false,
        },
        cratedUserId: {
            type: String,
        },
        delete: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

postSchema.set("autoIndex", true);
module.exports = mongoose.model("User", postSchema);
