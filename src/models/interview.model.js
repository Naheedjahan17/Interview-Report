const mongoose=require('mongoose')


const techinicalSchema=new mongoose.Schema({
    question:{
        type:String
    },
    intention:{
        type:String
    },
    answer:{
        type:String
    }
},{_id:false})

const behaviorSchema=new mongoose.Schema({
    question:{
        type:String
    },
    intention:{
        type:String
    },
    answer:{
        type:String
    }
},{_id:false})


const skillGapSchema=new mongoose.Schema({
    skill:{
        type:String
    },
    severity:{
        type:String,
        enum:["low","medium","high"]
    }
},{_id:false})

const preparationPlanSchema=new mongoose.Schema({
    day:{
        type:Number
    },
    focusTopic:{
        type:String
    },
    tasks:[{
        type:String
    }]
},{_id:false})



const interviewSchema=new mongoose.Schema({
    selfDescription:{
        type:String,
    },
    jobDescription:{
        type:String,
        required:[true,"job description is required"]
    },
    resume:{
        type:String,
    },
    technicalQuestions:[techinicalSchema],
    behaviorQuestions:[behaviorSchema],
    skillGaps:[skillGapSchema],
    prepartionPlan:[preparationPlanSchema],
    matchingScore:{
        type:Number
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    title:{
        type:String,
    }

},{
    timestamps:true
})

const interviewModel=mongoose.model("interview",interviewSchema)

module.exports=interviewModel


