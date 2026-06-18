const {GoogleGenAI}=require ('@google/genai');
const {z}=require('zod')
const {zodToJsonSchema}=require('zod-to-json-schema')

const ai=new GoogleGenAI({
    apiKey:process.env.GENAI_KEY
})

const interviewReportSchema=z.object({
    technicalQuestions:z.array(z.object({
        question:z.string().describe("give the techinical question according to job description"),
        intention:z.string().describe("give the intetion of techincial question..why interviewer asked that"),
        answer:z.string().describe("give answer to that techinical question clearly")
    })).describe("give the techincial question  answer according to job description and as well as resume"),
    behaviorQuestions:z.array(z.object({
        question:z.string().describe("give the behvaior question according to job description"),
        intention:z.string().describe("give the intetion of behviour question..why interviewer asked that"),
        answer:z.string().describe("give answer to that behaviourquestion clearly")
    })).describe("give the bheviour question answer according to job description and as well as resume"),
    skillGaps:z.array(z.object({
        skill:z.string().describe("give the skill which the candidate is lagging"),
        severity:z.enum(["low","medium","high"]).describe("describe the sevreity of learning that skill")
    })).describe("describe what skill is lagging and what is the sevreity level"),
    prepartionPlan:z.array(z.object({
        day:z.number().describe("give the day wise number"),
        focus:z.string().describe("tell which topics need to focus "),
        tasks:z.array(z.string()).describe("give the task for echa day based on the skill gap")
    })).describe("give the preparation plan clearly for ech day"),
    title:z.string().describe("give the title according to the all the skills and focus topics")

    
})

async function generateAnswer({resume,selfDescription,jobDescription}){
    const prompt=`
    resume:${resume},
    selfDescription:${selfDescription},
    jobDescription:${jobDescription}
    `
      console.log(
  JSON.stringify(
    zodToJsonSchema(interviewReportSchema),
    null,
    2
  )
)
const response=await ai.models.generateContent({
    model:"gemini-2.5-flash",
    contents:prompt,
    config:{
        responseMimeType:'application/json',
        responseSchema:zodToJsonSchema(interviewReportSchema)
    }
})
console.log(response.text)
return JSON.parse(response.text)


}

module.exports=generateAnswer


