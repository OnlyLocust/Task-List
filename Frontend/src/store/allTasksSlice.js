import { createSlice } from "@reduxjs/toolkit";
import { actionAsyncStorage } from "next/dist/server/app-render/action-async-storage-instance";

const allTasksSlice = createSlice({
    name: 'AllTasks',
    initialState:{
        taskArr:[]
    },
    reducers:{
        setTask:(state , action) => {
            state.taskArr = action.payload
        },
        deleteOneTask : (state , action) => {
            state.taskArr = state.taskArr.filter((item) => item._id != action.payload)
            
        },
        addTask : (state , action) => {
            state.taskArr = [...state.taskArr , action.payload]
        },
        updateCom : (state, action) => {
            state.taskArr.forEach((task) => {
                if(task._id === action.payload.id){
                    task.completed = !action.payload.state
                }
            })
        },
        updateImp : (state, action) => {
            state.taskArr.forEach((task) => {
                if(task._id === action.payload.id){
                    task.important = !action.payload.state
                }
            })
        },
    }
})

export const {setTask , deleteOneTask , addTask, updateCom , updateImp} = allTasksSlice.actions
export default allTasksSlice.reducer