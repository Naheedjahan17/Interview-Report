const interviewModel=require('../models/interview.model')
const generateAnswer=require('../services/Ai.service')
const pdfparse=require('pdf-parse')

async function interviewReportController(req,res){
    const pdf=new Uint8Array(req.file.buffer)
    const resumeContent=await (new pdfparse.PDFParse(pdf)).getText()
    const{selfDescription,jobDescription}=req.body

    const interviewReportByai=await generateAnswer({
        resume:resumeContent.text,
        selfDescription:selfDescription,
        jobDescription:jobDescription

    })

    const interviewReport=await interviewModel.create({
        selfDescription:selfDescription,
        jobDescription:jobDescription,
        resume:resumeContent.text,
        ...interviewReportByai,
        user:req.user.id
    })

    res.status(201).json({
        message:"interview reported is genereted succesfully",
        interviewReport
    })


}
async function interviewReportByid(req,res){
    const {interviewId}=req.params

    const interviewReport=await interviewModel.findOne({
        _id:interviewId
    })

    res.status(200).json({
        message:"interview report have been fetched succesfully",
        interviewReport
        
    })
}

async function GetAllInterviewReport(req,res){
    const user=req.user.id

    const interviewReport=await interviewModel.find({
        user
    }).sort({createdAt:-1}).select(
        "-jobDescription -selfDescription -resume -technicalQuestions -behaviorQuestions -skillGaps  -prepartionPlan -__v"
    )
    res.status(200).json({
        message:"all reports have been fetched succesfully",
        interviewReport
    }
    )
}



module.exports={interviewReportController,interviewReportByid,GetAllInterviewReport}