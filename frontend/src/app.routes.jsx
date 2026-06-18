import {createBrowserRouter} from 'react-router-dom'
import Register from './features/auth/pages/Register'
import Login from './features/auth/pages/Login'
import { Protected } from './features/auth/components/Protected'
import Home from './features/ai/pages/Home'
import InterviewPage from './features/ai/pages/InterviewPage'

const router=createBrowserRouter([
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:'/',
        element:<Protected><Home/></Protected>
    },{
        path:'/interview/:interviewId',
        element:<Protected><InterviewPage/></Protected>
    }
])

export default router