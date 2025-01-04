import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const navSlice = createSlice({
    name:'nav',
    initialState:{
        navTo:'All'
    },
    reducers:{
        changeNav : (state , action) => {
            state.navTo = action.payload
        }
    }
})

export const {changeNav} = navSlice.actions
export default navSlice.reducer