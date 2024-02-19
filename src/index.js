import dotenv from "dotenv";
import ConnectDB from "./db/index.js";
import {app} from "./app.js";

dotenv.config({path: './env'});

ConnectDB().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`server was connected in port ${process.env.PORT}`)
    })
}).catch((error)=>{
    console.error('Port Connection failed: ', error);
})