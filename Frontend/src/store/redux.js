import {configureStore} from '@reduxjs/toolkit'
import taskSlice from './taskSlice.js'
import navSlice from './navSlice.js'
import userSlice from './userSlice.js'
import alltasksSlice from './allTasksSlice.js'

const store = configureStore({
    reducer:{
        task : taskSlice,
        nav : navSlice,
        user : userSlice,
        allTasks : alltasksSlice
    }
})

export default store