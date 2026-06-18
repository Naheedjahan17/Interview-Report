import {useAuth} from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'




export const Protected=({children})=>{
    const {user,loading}=useAuth()
    if(loading){
        return(<main className='text-black tecxt-4xl'>Loading</main>)
    }
    if(!user){
        return <Navigate to='/login'/>
    }

    return children

}