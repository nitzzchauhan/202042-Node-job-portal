import mongoose from "mongoose";

const userSchema  = new mongoose.Schema(
    {
        fullname:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        phoneNumber:{type:Number,required:true},
        role:{type:String,required:true},enum:['student','recruiter'],
        profile:{
            bio:String,
            skills:{type:String},
            resume:String,
            resumeOriginalName:{type:String},
            company:{type:String,ref:'company'},
            profilePhoto:{
                type:String,
                default:""
            }



        },

    },{timestamps:true}
)


export const User = mongoose.model('user',userSchema)