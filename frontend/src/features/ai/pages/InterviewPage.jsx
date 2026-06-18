import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { aiAuth } from '../hooks/interview.Context'


const InterviewPage = () => {
    const [activeTab, setActiveTab] = useState("technical")
    const {interviewId}= useParams()
    const {handlereportByid,report}=aiAuth()
    useEffect(()=>{
        if(interviewId){
            handlereportByid(interviewId)

        }

    },[interviewId])

    if(!report){
        return(<main className='text-black text-2xl'>LOADING</main>)
    }
  return (
    <div className='bg-gradient-to-br from-slate-700 via-slate-800 to-black min-h-screen p-5'>
              <h1 className='text-white text-center text-5xl font-bold'>Interview report</h1>
       <div className='border-zinc-700 w-350 border-2  mt-2.5 flex min-h-screen'>
        <div className='w-80  bg-gradient-to-br from-slate-600 via-slate-800 to-pink-950 p-6 border-r-2 border-white '>
            <button className='h-10 w-70 border-2 border-black rounded-2xl mb-4 bg-gradient-to-br from-slate-600 via-slate-800 to-pink-950 cursor-pointer hover:shadow-2xl hover:translate-y-1' onClick={()=>{setActiveTab("technical")}}>
                techinical
            </button>
             <button className='h-10 w-70 border-2 border-black rounded-2xl mb-4 bg-gradient-to-br from-slate-600 via-slate-800 to-pink-950 cursor-pointer  hover:shadow-2xl hover:translate-y-1' onClick={()=>{setActiveTab("behaviourQuestions")}}>
                behaviourQuestions
            </button>
             <button className='h-10 w-70 border-2 border-black rounded-2xl bg-gradient-to-br from-slate-600 via-slate-800 to-pink-950 cursor-pointer  hover:shadow-2xl hover:translate-y-1' onClick={()=>{setActiveTab("preparationPlan")}}>
                prepartion plan
            </button>
        </div>
        <div className=' w-190 bg-gradient-to-br from-slate-700 via-slate-800 to-black p-3.5'>
            {activeTab=== "technical" && (
                <>
                <h1 className='font-bold text-white text-center text-3xl'> Techinical</h1>
                <div className='p-2.5 '>
                    {report.technicalQuestions.map((q,index)=>{
                        return(
                         <div className='bg-slate-border-800 rounded-2xl p-3 border-2 mb-1.5 overflow-auto'>
                            <span className='text-pink-400 text-2xl '>Q{index+1}</span>
                            <h2 className='text-xl text-white font-semibold'> {q.question}</h2>
                            <div className='flex'>
                                <h1 className='text-blue-500 text-xl font-bold'>intention:</h1>
                            <h2 className='font-bold text-xl text-white'>{q.intention}</h2>

                            </div>
                             <div className='flex'>
                                <h1 className='text-blue-500 text-xl font-bold'>answer:</h1>
                            <h2 className='font-bold text-xl text-white'>{q.answer}</h2>

                            </div>

                         </div>
                    )})}

                </div>
                </>
                

            )}
            {activeTab==='behaviourQuestions' &&(
                <>
               <h1 className='font-bold text-white text-center text-3xl '>Behaviour</h1>
               <div className='flex flex-col gap-4 p-3.5'>
                {report.behaviorQuestions.map((q,index)=>{
                    
                    return(
                        <>
                        <div className='border-2 border-black rounded-2xl p-5 '>
                        <div className=''>
                    <span className='text-pink-700 '> Q{index+1}</span>
                    <h1 className='text-white text-xl'>{q.question}</h1>
                    </div>
                    <div>
                        <span className='text-pink-700 text-2xl'>Intention:</span>
                        <h1 className='text-white text-xl'>{q.intention}</h1>
                    </div>
                     <div className=''>
                        <span className='text-pink-700 text-2xl'>Answer:</span>
                        <h1 className='text-white text-xl'>{q.answer}</h1>
                    </div>
                    </div>
                    
               </>) })}
                </div>
                </> 
            )}

            {activeTab==='preparationPlan' && (
                <div className=' flex flex-col gap-2.5'>
                    <h1 className='text-white text-2xl text-center'>Preparation Plan</h1>
                        {report.prepartionPlan.map((q,index)=>{
                            return(
                            <div className=' border-2 border-black rounded-2xl p-3.5'>
                                <h1 className='text-pink-600 text-2xl'>DAY:{q.day}</h1>
                                
                                <div className='text-xl text-white'>
                                   {q.tasks.map((task,i)=>{
                                    return(
                                    <h1>{i+1}.{task}</h1>

                        )})}

                                </div>

                         </div>

                        )})}

                   
                    
                </div>

            )}

        </div>

        <div className='w-80 '>
            <div className='flex flex-col gap-2.5 p-2.5 '>
                <h1 className='text-white text-2xl'> Skill Gaps</h1>
                {report.skillGaps.map((q,index)=>{
                    return(
                    <div className='border-2 border-slate-700 p-2.5 rounded-2xl' >
                        <h1 className='text-white text-xl'>{index+1}: {q.skill}</h1>
                        <h1>{q.severity}</h1>


                    </div>
              
                )})}
            </div>

        </div>
        </div>
       </div>
     

  )
}

export default InterviewPage
