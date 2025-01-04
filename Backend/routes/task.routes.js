import express from 'express'
import { addTask, deleteTask, getAlltasks, updateCom, updateImp} from '../controllers/task.controller.js'
import userAuth from '../middlewares/auth.js'

const route = express.Router()

route.post('/add-task' , userAuth ,addTask)
route.delete('/delete-task/:id' , userAuth , deleteTask)
route.get('/get', userAuth, getAlltasks)
route.put('/update-com/:id' , userAuth , updateCom)
route.put('/update-imp/:id' , userAuth , updateImp)


export default route