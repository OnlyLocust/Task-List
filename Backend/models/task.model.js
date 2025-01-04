import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true ,'Enter task name']
        },
        desc:{
            type:String,
            required:[true,'Enter task description'],
        },
        completed:{
            type:Boolean,
            default:false
        },
        important:{
            type:Boolean,
            default:false
        }
    }
)

const task = mongoose.model('task' ,taskSchema)

export default task