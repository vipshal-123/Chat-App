import mongoose from "mongoose";
import { DBNAME } from "../constant.js";

const ConnectDB = async() =>{
    try {
       const ConnectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DBNAME}`);
       console.log('MongoDB Connected at DBHost: ', ConnectionInstance.connection.host);
    } catch (error) {
        console.error('error: ', error);
        process.exit(1);
    }
}
export default ConnectDB; 