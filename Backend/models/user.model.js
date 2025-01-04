import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:[true, "Enter username"],
        },
        email:{
            type:String,
            required:[true , "Enter email"]
        },
        password:{
            type:String,
            required:[true,"Enter password"],
            select:false
        },
        tasks:[
            {
                type:mongoose.Types.ObjectId,
                ref:'task'
            }
        ]
    },
    {
        timestamps:true
    }
)

const user = mongoose.model('user' , userSchema)

export default user