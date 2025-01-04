import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name:'task',
    initialState : {
        isToAdd:false,
        task:"",
        desc:""
    },
    reducers:{
        changeToAdd : (state , action) => {
            
            state.isToAdd = action.payload.isToAdd
            state.task = action.payload.task
            state.desc = action.payload.desc
        }        
    }
})

export const {changeToAdd} = taskSlice.actions
export default taskSlice.reducer