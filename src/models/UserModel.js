import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    password: { type: String, required: true }
},{timestamps: true})

export const User = mongoose.model("User", UserModel);