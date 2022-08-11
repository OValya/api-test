import mongoose from "mongoose";

const Route = new mongoose.Schema({
        title: {type:String, required: true},
        description: {type:String, required: true},
        level: {type:Number, required: true},
        length: {type:Number, required: true},
        image: {type:String},
        //author: {type: String, required:true}
    }
)

export default mongoose.model('route', Route);