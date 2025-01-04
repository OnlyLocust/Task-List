import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name:'user',
    initialState:{
        username:'',
        email:''
    },
    reducers:{
        setUser: (state , action) => {
            state.email = action.payload.email
            state.username = action.payload.username
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer