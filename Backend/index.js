import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import connect from './database.js'

import userRoute from './routes/user.routes.js'
import taskRoute from './routes/task.routes.js'


dotenv.config()
const app = express();

const port = process.env.PORT || 9090



app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api/user' , userRoute)
app.use('/api/task' ,taskRoute)


app.listen(port , () => {
    connect()
    console.log('server started on some port' , port);
})