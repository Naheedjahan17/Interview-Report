import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getme } from "./services/auth.api";

export const authContext=createContext()

export const AuthProvider=({children})=>{
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState("");

    useEffect(()=>{
        const fetchUser=async()=>{
            try{
            const response=await getme()
            setUser(response.user)

        }catch(err){
            console.log(err)
        }finally
        {
            setLoading(false)
        }
    }
    fetchUser()
},[])


    return(

    <authContext.Provider value={{loading,setLoading,user,setUser}}>
        {children}
    </authContext.Provider>
    )
}