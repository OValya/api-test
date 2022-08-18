import express from 'express';
import mongoose from "mongoose";
//import {PORT, NODE_ENV, MONGO_CONNECTION_STRING} from './common/config.js'
//import fileUpload from "express-fileupload"
import routeRouter from "./routing.js";
import dotenv from 'dotenv';


dotenv.config({
        // path: path.join(__dirname, './.env')
});

//const DB_URL = 'mongodb://localhost:27017/test'
//const DB_URL = 'mongodb+srv://user:user@cluster0.1wfjau8.mongodb.net/testBd?retryWrites=true&w=majority'
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
const PORT = process.env.PORT;
//console.log('port', PORT)

//const PORT = process.env.PORT || 5000;
//const PORT = 5000;
const app = express();

app.use(express.json());
app.use('/api', routeRouter);
app.use(express.static('static'))
//app.use(fileUpload({}));

async function startApp(){
        // console.log(MONGO_CONNECTION_STRING)
        await mongoose.connect(MONGO_CONNECTION_STRING).catch((e) => console.log(e));

        app.listen(PORT, () => console.log('server started on localhost: '+ PORT))
}

startApp();




