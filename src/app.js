import express from "express";
import userRoute from "./routes/UserRoute.js";

const app = express();

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended : true, limit : "16kb"}))
app.use(express.static("public"))

app.use("/api/v1/user",userRoute);

export { app };