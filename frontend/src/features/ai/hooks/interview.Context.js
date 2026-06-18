import { useContext } from "react";
import { interviewContext } from "../ai.content";
import { GetInterviewreport,GetInterviewreportById,GetAllInterview } from "../services/ai.api";



export const aiAuth=()=>{
    const context=useContext(interviewContext)
    const{loading,setLoading,report,setReport,reports,setReports}=context

    const handleReport=async({resume,selfDescription,jobDescription})=>{
        try{
            console.log("setting loading true")
        setLoading(true)

        const response=await GetInterviewreport({resume,selfDescription,jobDescription})
        console.log(response.interviewReport)
        setReport(response.interviewReport)
        setLoading(false)

        return response.interviewReport
        }
        catch(err){
            console.log(err)
        }finally{
            console.log('setting loading false')
            setLoading(false)
        }

    }
    const handlereportByid=async(interviewId)=>{
        setLoading(true)
        try{
            const response=await GetInterviewreportById(interviewId)
            setReport(response.interviewReport)
        }catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }

    const handleAllInterview=async function(){
        setLoading(true)
        try{
            const response=await GetAllInterview()
            setReports(response.interviewReport)
            setLoading(false)
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }


    return {handleReport,loading,report,reports,handlereportByid,handleAllInterview}
}
