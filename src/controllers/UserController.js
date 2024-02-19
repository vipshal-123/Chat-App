import { User } from "../models/UserModel.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import bcrypt from "bcrypt";

const RegisterUser = async(req, res)=>{
    const { fullname, email, password } = req.body;
    try {
        const AlreadtExist = await User.findOne({email : email});
        if(AlreadtExist){
            return res.status(400).json(new ApiError(400,{}, "User Already Exist"));
        } 
        const salt = bcrypt.genSaltSync(10);
        const encrypt = bcrypt.hashSync(password, salt);
        const SaveUser = new User({
            fullname : fullname,
            email : email,
            password : encrypt
        })
        await SaveUser.save();
        return res.status(201).json(new ApiResponse(200,{}, "User Registered Successfully"));
    } catch (error) {
        console.error('error: ', error);
        return res.status(500).json(new ApiError(500,{}, "Internal Server Error"))
    }
};

const LoginUser = async(req, res)=>{
    const { email, password } = req.body;
    try {
        const FindUser = await User.findOne({email : email});
        if(!FindUser){
            return res.status(400).json(new ApiError(400,{}, "User Not Found"));
        }
        const decrypt = bcrypt.compareSync(password, FindUser.password);
        if(!decrypt){
            return res.status(400).json(new ApiError(400,{}, "Email or Password is Incorrect"));
        }
        return res.status(200).json(new ApiResponse(200, "Login Success"));
    } catch (error) {
        console.error('error: ', error);
        return res.status(500).json(new ApiError(500, "Internal Server Error"));
    }
};

export { RegisterUser, LoginUser }