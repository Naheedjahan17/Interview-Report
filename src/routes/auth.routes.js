const express=require('express')
const {registerController,loginController,getme,logout}=require('../controllers/auth.controller')
const userAuth=require('../middleware/auth.middleware')

const routes=express.Router()

routes.post('/register',registerController)
routes.post('/login',loginController)
routes.get('/getme',userAuth,getme)
routes.get('/logout',userAuth,logout)





module.exports=routes


