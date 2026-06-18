import React from 'react'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth';
import { Link,useNavigate} from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {loading,handleregister}=useAuth()
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
         e.preventDefault()
         await handleregister({username,email,password})
         navigate('/')

    }
    if(loading){
        return(<main className='text-black text-4xl'>Loading</main>)
    }


  return (
   <div className='h-screen bg-zinc-800 w-full flex items-center justify-center '>
           <div className='h-100 w-100 text-white  flex flex-col p-5'>
            <h1 className='font-extrabold text-2xl py-5'>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label htmlFor='username'>username</label>
                    <input onChange={(e)=>{
                         setUsername(e.target.value)
                    }} className='border-2 mt-2.5 h-11 w-85 rounded-2xl p-2.5 bg-white text-black' type="text" placeholder="enter the username"/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='email'>Email</label>
                    <input onChange={(e)=>{
                        setEmail(e.target.value)
                    }} className='border-2 mt-2.5 h-11 w-85 rounded-2xl p-2.5 bg-white text-black' type="email" placeholder="enter the email address"/>
                </div>
                <div className='mt-2.5'>
                    <label  htmlFor='password'>password</label>
                    <input onChange={(e)=>{
                        setPassword(e.target.value)
                    }} className='border-2 mt-2.5 h-11 w-85 rounded-2xl p-2.5 bg-white text-black mb-2' type="password" placeholder="enter the password"/>
                </div>
                <button className='border-2 mt-2.5 h-11 w-85 rounded-2xl p-2.5 bg-red-400 text-black cursor-pointer mb-2.5'>Register</button>

            </form>

            <p>Already have an account? <Link className='text-red-400' to="/login">Login</Link> </p>
        </div>
      
    </div>
  )
}

export default Register
