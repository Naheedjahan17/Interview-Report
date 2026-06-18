import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './features/auth/auth.context.jsx'
import { InterviewProvider } from './features/ai/ai.content.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <InterviewProvider>
        <App />
    </InterviewProvider>
  </AuthProvider>
    

)
