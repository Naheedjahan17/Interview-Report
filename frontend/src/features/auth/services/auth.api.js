import axios from 'axios'

const api=axios.create({
    baseURL: "https://interview-report-backend-lgqd.onrender.com",
    withCredentials:true
})

export async function register({username,email,password}){
    try{
    const response=await api.post('/api/auth/register',{
        username,email,password
    })
    return response.data
}
catch(err){
    console.log(err.response.data.message)
}
}

export async function login({email,password}){
    try{
    const response=await api.post('/api/auth/login',{
        email,password
    })
    return response.data
}
catch(err){
    console.log(err.response.data.message)
}
}

export async function getme(){
    try{
        const response=await api.get('/api/auth/getme')
        return response.data
    }
    catch(err){
        console.log(err.response.data.message)
    }
}