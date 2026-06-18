import React from 'react'
import { useState ,useEffect} from 'react'
import {useRef} from 'react'
import { aiAuth } from '../hooks/interview.Context'
import { useNavigate } from 'react-router-dom'



const Home = () => {
    const [jobDescription, setJobDescription] = useState("");
    const [selfDescription, setSelfDescription] = useState("");
    const resumeInputRef=useRef()
    const {loading,handleReport,handleAllInterview,reports}=aiAuth()
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
      e.preventDefault()

      try{
        const report=await handleReport({resume:resumeInputRef.current.files[0],jobDescription:jobDescription,selfDescription:selfDescription})
        navigate(`/interview/${report._id}`)
      }catch(err){
        console.log(err)
        
      }

    }
     useEffect(()=>{
        handleAllInterview()
    },[])
    if(loading){
      return (<main className='text-black text-4xl'>Loading</main>)
    }

  return (
   <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex flex-col items-center p-12">

      {/* Heading */}
      <h1 className="text-5xl font-bold text-white text-center">
        Create Your Custom Interview Plan
      </h1>

      <p className="text-slate-400 text-center mt-3 max-w-2xl">
        Upload your resume, add a job description, and generate personalized
        interview questions, skill gap analysis, and a preparation roadmap.
      </p>

      {/* Feature Pills */}
      <div className="flex gap-4 mt-6 flex-wrap justify-center">
        <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
          AI Questions
        </span>

        <span className="px-4 py-2 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/30">
          Skill Gap Analysis
        </span>

        <span className="px-4 py-2 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/30">
          7-Day Preparation Plan
        </span>
      </div>

      {/* Main Content */}
      <div className="flex gap-8 mt-12 flex-wrap justify-center">

        {/* Job Description Section */}
        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700 rounded-3xl shadow-2xl p-4">

          <h2 className="text-cyan-400 font-semibold mb-3">
            Job Description
          </h2>

          <textarea onChange={(e)=>{
            setJobDescription(e.target.value)
          }}
            name="jobdescription"
            id="jobDescrption"
            placeholder="Paste the job description here..."
            className="w-80 h-[500px] bg-slate-800 text-white rounded-2xl p-4 outline-none resize-none border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        {/* Resume Section */}
        <div className="w-96 bg-slate-900/60 backdrop-blur-md border border-slate-700 rounded-3xl shadow-2xl p-6">

          <h2 className="text-cyan-400 font-semibold text-xl mb-6">
            Candidate Details
          </h2>

          {/* Upload Resume */}
          <div className="mb-6">
            <label className="block text-white mb-2 font-medium">
              Resume
            </label>

            <div className="border-2 border-dashed border-cyan-500 rounded-2xl bg-slate-800 hover:bg-slate-700 transition cursor-pointer">
              <label
                htmlFor="resume"
                className="cursor-pointer flex items-center justify-center h-24 text-cyan-400 font-semibold"
              >
                📄 Upload Resume (PDF)
              </label>

              <input ref={resumeInputRef}
                className="hidden"
                type="file"
                name="resume"
                id="resume"
                accept=".pdf"
              />
            </div>
          </div>

          {/* Self Description */}
          <div className="mb-6">
            <label
              htmlFor="selfDescription"
              className="block text-cyan-400 font-semibold mb-2"
            >
              Self Description
            </label>

            <textarea onChange={(e)=>{
                setSelfDescription(e.target.value)
            }}
              id="selfDescription"
              placeholder="Describe yourself, your skills, projects, interests, and career goals..."
              className="w-full h-52 bg-slate-800 text-white rounded-2xl p-4 outline-none resize-none border border-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Button */}
          <button onClick={handleSubmit} className="w-full h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            ✨ Generate Interview Report
          </button>

        </div>

      </div >
      <div className='w-full  mt-3.5 bg-gradient-to-br from-pink-900 via-blue-900 to bg-yellow-900 p-3.5'>
        <h1 className='text-center text-2xl text-white '>MY Recent interviews</h1>
      <div className=' flex gap-3.5 flex-wrap'>

      {reports.map((q,index)=>{
        return(
        <div className=' w-60 bg-gradient-to-br p-3.5 border-2 border-zinc-500 from-slate-800 via-slate-900 to-black flex flex-col gap-3.5 cursor-pointer hover:shadow-2xl hover:translate-y-3'onClick={()=>{
          navigate(`/interview/${q._id}`)
        }}>
        <h1 className='text-white text-center text-xl'>Title :{q.title}</h1>
        <div className='border-2 border-zinc-800'>
        <p className='text-white '>Created At: {q.createdAt.split('T')[0]}</p>
        <p className='text-white'>{q.createdAt.split("T")[1]}</p>
  
        </div>
        <div className='flex gap-20'>
          <h1 className='text-white'>click</h1>
          <h1 className='text-pink-900'>View Report </h1>
          </div>
        
        </div>
        
     ) })}
    </div>
    </div>
    </div>
      

      
      
  
  )
}

export default Home
