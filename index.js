import express from 'express';
import mongoose from "mongoose";
import fileUpload from "express-fileupload"

const DB_URL = 'mongodb://localhost:27017/test'

import routeRouter from "./routing.js";


const port = 5000;
const app = express();

app.use(express.json());
app.use('/api', routeRouter);
app.use(express.static('static'))
//app.use(fileUpload({}));

async function startApp(){
        await mongoose.connect(DB_URL).catch((e) => console.log(e));
        app.listen(port, () => console.log('server started on localhost: '+ port))
}

startApp();




