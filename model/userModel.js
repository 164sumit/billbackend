const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        // maxLength: [30, "Name cannot exceed 30 characters"],
        // minLength: [3, "Name should have more than 3 characters"],
    },
    username: {
        type: String,
        required: [true, "Please Enter your username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        // unique: true,
        // validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        // minLength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})
module.exports=mongoose.model("User",userSchema);