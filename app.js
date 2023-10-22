import dotenv from 'dotenv';
import express from 'express'


import { connectDB } from './db/connect.js';
import { router as tasks } from './routes/tasks.js'
import { notFound } from './middleware/notFound.js';
import { handleError } from './middleware/handleError.js';


dotenv.config()

//express app and port
const app = express()
const PORT = 3000;

const start = async()=>{
    try{
    await connectDB(process.env.DB_URL)
    app.listen(PORT, (req, res)=>{
        console.log(`Server running on port: ${PORT}`)
    })
}
catch(err){
    console.log(err)
}
}

//middlewares
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/tasks', tasks)

//error handling middlewares
app.use(notFound)
app.use(handleError)

start();