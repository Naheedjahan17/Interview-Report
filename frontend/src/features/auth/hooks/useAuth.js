import { authContext } from "../auth.context";
import { useContext } from "react";
import { login, register } from "../services/auth.api";


export const useAuth=()=>{
    const {loading,setLoading,user,setUser}=useContext(authContext)

    const handleregister=async ({username,email,password})=>{
        setLoading(true)
        try{
        const data=await register({username,email,password})
        setUser(data.user)
        console.log(data.user)
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }

    }

    const handelLogin=async({email,password})=>{
        setLoading(true)
        try{
            const data=await login({email,password})
            setUser(data.user)
        }
        catch(err){
            console.log(err)
        }
        finally{
            setLoading(false)
        }

    }


    return {handleregister,loading,user,handelLogin}
}