const mongoose = require("mongoose")
const validator = require("validator")
const server = require("./server.js")


const registrationSchema = new mongoose.Schema(
    {
        livecountry:{type:String, required:true},
        fname: {type:String, required:true},
        lname: {type:String, required:true},
        Password:{type:String, minLength:8, required:true,
            validate(value){
                if(!validator.equals(value,server.confirm)){
                    throw new Error('your password you input twice are not same, please check')
                }
            }},
        Address:{type:String,required:true},
        Address2:String,
        City:{type:String, required:true},
        State:{type:String, required:true},
        Zip:String,
        Phonenumber:{type:String,
            trim:true,
            validate(value){
                if(validator.equals(value,"")){

                }
                else if(!validator.isMobilePhone(value) && !validator.equals(value,"")){
                    throw new Error('Phone number is not valid! Please try again')
                }
            }},
        Email: {type:String,
        trim: true,
    lowercase:true,
    validate(value){
    if(!validator.isEmail(value)){
        throw new Error('Email is not valid! Please try again')
    }
}}

    }
)
module.exports = mongoose.model("registration", registrationSchema);