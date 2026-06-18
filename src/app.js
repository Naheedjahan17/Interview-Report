const express=require('express')
const routes=require('../src/routes/auth.routes')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const interviewroute=require('./routes/interview.routes')

const app=express()
app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',routes)
app.use('/api/interview',interviewroute)



module.exports=app