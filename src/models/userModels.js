import mongoose, { Schema } from "mongoose" 

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true,  "Please Provide a Username"],
    },

    email: {
        type: String,
        required: [true, "Please Provide an Email"],
        unique: true,
    },

    fullname: {
        type: String,
        required: [true, "Please provide a fullname"],
        unique: true
    },

    password: {
        type: String, 
        required: [true, "Please provide a password"],
    },

    isVerified: {
        type: Boolean,
        default: false,
    },

    isAdmin: {
        type: Boolean,
        default: false
    },
    
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String, 
    verifyTokenExpiry: Date,
})

// NextJs is working on EDGE it uses is (Edge computing)
// In nextjs Schema it doest'nt know it is going to make connection for the first time or alreday connection in created and exist. 
// mongoose.model.users will take care of that is Schema is Already connected or not if not created then create a model 
// with users 


const User = mongoose.model.users || mongoose.model("users", userSchema)

export default User;