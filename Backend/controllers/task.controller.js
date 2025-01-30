import task from "../models/task.model.js";
import user from "../models/user.model.js";

const addTask = async (req , res) => {
    const id = req.user.id;
    if(!id) return res.status(400).json({message : 'Unauthorized'})

    try {
        const newTask = new task(req.body)
        const addTask = await newTask.save()
        const taskid = addTask._id;
        const addToUser = await user.findByIdAndUpdate(id , {$push : {tasks: taskid}} , {new:true})
        return res.status(200).json({addTask , addToUser})
    } catch (error) {
        return res.status(400).json(error)   
    }
    
}

const deleteTask = async (req , res) => {
    const id = req.user.id;
    if(!id) return res.status(400).json({message : 'Unauthorized'})
    const taskId = req.params.id;
    try {
        const deletedTask = await task.findOneAndDelete({_id:taskId})
        const deleteToUser = await user.findByIdAndUpdate(id , {$pull : {tasks : taskId}}, {new:true})
        return res.status(200).json({deletedTask , deleteToUser})
    } catch (error) {
        return res.status(400).json(error)
    }
}

const getAlltasks = async (req , res) => {
    const id = req.user.id;
    if(!id) return res.status(400).json({message : 'Unauthorized'})
    try {
        const tasks = await user.findById(id).populate('tasks')
        return res.status(200).json(tasks.tasks)
    } catch (error) {
        return res.status(400).json(error)
    }
}

const updateCom = async (req , res) => {
    const id = req.user.id;
    if(!id) return res.status(400).json({message : 'Unauthorized'})
    const bol = !req.body.state
    const taskId = req.params.id;
    
    try {
        const updateCom = await task.findByIdAndUpdate(taskId , {$set : {completed : bol}} , {new:true})
        return res.status(200).json(updateCom)
    } catch (error) {
        
        return res.status(400).json(error)
    }

}

const updateImp = async (req , res) => {
    const id = req.user.id;
    if(!id) return res.status(400).json({message : 'Unauthorized'})
        const bol = !req.body.state
    const taskId = req.params.id;
    try {
        const updateImp = await task.findByIdAndUpdate(taskId , {$set : {important : bol}} , {new:true})
        return res.status(200).json(updateImp)
    } catch (error) {
        return res.status(400).json(error)
    }

}

export {addTask , deleteTask , getAlltasks , updateCom , updateImp}