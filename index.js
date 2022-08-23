import express from 'express';
import mongoose from "mongoose";
import routeRouter from "./routing.js";
import dotenv from 'dotenv';
dotenv.config({
        // path: path.join(__dirname, './.env')
});

import { v2 as cloudinary } from 'cloudinary'

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
const PORT = process.env.PORT;
const app = express();
if (typeof (process.env.CLOUDINARY_URL) === 'undefined') {
        console.warn('!! cloudinary config is undefined !!');
        console.warn('export CLOUDINARY_URL or set dotenv file');
} else {
        console.log('cloudinary config:');
        console.log(cloudinary.config());
}

app.use(express.json());
app.use('/api', routeRouter);
app.use(express.static('static'))
//Cors Configuration - Start
// app.use((req, res, next) => {
//         res.header("Access-Control-Allow-Origin", "*")
//         res.header(
//             "Access-Control-Allow-Headers",
//             "Origin, X-Requested, Content-Type, Accept Authorization"
//         )
//         if (req.method === "OPTIONS") {
//                 res.header(
//                     "Access-Control-Allow-Methods",
//                     "POST, PUT, PATCH, GET, DELETE"
//                 )
//                 return res.status(200).json({})
//         }
//         next()
// })
//Cors Configuration - End

async function startApp(){
        await mongoose.connect(MONGO_CONNECTION_STRING).catch((e) => console.log(e));
        app.listen(PORT, () => console.log('server started on localhost: '+ PORT))
}

startApp();




