import mongoose from "mongoose";
import md5 from "../utils/md5";


export interface UserDocument extends mongoose.Document {
    username : string,
    email : string,
    password: string,
    brief : string,
    image : string,
    createdTime : Date,
    updatedTime : Date
}

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
        select : false,
        set : (value : string) => md5(value)
    },
    brief:{
        type : String,
        default : ''
    },
    image:{
        type : String,
        default : ''
    },
    createdTime: {
        type : Date,
        // 第一次使用？
    },
    updatedTime : {
        type : Date,
        default : Date.now()
    }
})

export default mongoose.model<UserDocument>('Users', userSchema)