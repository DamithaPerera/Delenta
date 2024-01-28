const {generateUuid, generateMongoose} = require("../util/lib");
const mongoose = generateMongoose();

const commentSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: generateUuid
        },
        comment: {
            type: String,
            trim: false,
        },
        postId: {
            type: String,
        },
        commentedUserId: {
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

commentSchema.set("autoIndex", true);
module.exports = mongoose.model("Comment", commentSchema);
