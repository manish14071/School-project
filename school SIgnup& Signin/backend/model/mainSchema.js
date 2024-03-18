import mongoose from "mongoose";
const signupSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },

    lastname:{
        type:String,
        required:true
    },
    standard:{
        type:String,
        required:true
    },
    section:{
        type:String,
        required:true
    },
    admission:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
        
    },
    english:{
        type:Number,
        required:true
    },
    hindi:{
        type:String,
        required:true
    },
    math:{
        type:String,
        required:true
    },
    science:{
        type:String,
        required:true
    },
     history:{
        type:String,
        required:true
    }

   


});
 
const signUp=mongoose.model("userdata",signupSchema);
export default signUp;