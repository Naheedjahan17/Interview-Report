import axios from 'axios'

const api=axios.create({
    baseURL: "https://interview-report-backend-lgqd.onrender.com",
    withCredentials:true

})

export async function  GetInterviewreport({resume,jobDescription,selfDescription}){
    try{
        const formData=new FormData()
        formData.append("resume",resume)
        formData.append("selfDescription",selfDescription)
        formData.append("jobDescription",jobDescription)
        

     const response=await api.post('/api/interview/report',
        formData
     )
     return response.data
    }
    catch(err){
        console.log(err)
    }
}

export async function GetInterviewreportById(interviewId){
    try{
    const response=await api.get(`/api/interview/${interviewId}`)
    return response.data
}catch(err){
    console.log(err)
}

}

export async function GetAllInterview(){
    try{
        const response=await api.get('/api/interview/getAll')
        console.log(response.data)
        return response.data
    }
    catch(err){
        console.log(err)
    }
}