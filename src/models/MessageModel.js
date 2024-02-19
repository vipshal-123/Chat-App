import mongoose from "mongoose";

const MessageModel = mongoose.Schema({
    user : { type: mongoose.Schema.Types.ObjectId },
    messages: [{ type: String }]
})

export const messages = mongoose.model("messages", MessageModel);