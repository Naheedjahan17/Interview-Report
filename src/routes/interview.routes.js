const express=require('express')
const upload=require('../middleware/file.middleware')
const { interviewReportController,interviewReportByid,GetAllInterviewReport } = require('../controllers/interviewreport.controller')
const userAuth=require('../middleware/auth.middleware')

const interviewroute=express.Router()

interviewroute.post('/report/',upload.single('resume'),userAuth,interviewReportController)
interviewroute.get('/getAll',userAuth,GetAllInterviewReport)
interviewroute.get('/:interviewId',userAuth,interviewReportByid)


module.exports=interviewroute