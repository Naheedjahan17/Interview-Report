const userModel=require('../models/user.model')
const jwt=require('jsonwebtoken')
const blacklistmodel=require('../models/blacklist.model')

async function userAuth(req,res,next){
    const token=req.cookies.token
    if (!token){
        return res.status(401).json({
            message:"unauthorized access"
        })
    }
    const isBlacklist=await blacklistmodel.findOne({
        token
    })
    if(isBlacklist){
        return res.status(401).json({
            message:"token has been expired"
        })
    }

    const decoded=jwt.verify(token,process.env.JWT_SECRETKEY)

    if(!decoded){
        return res.status(401).json({
            message:"inavlid login"
        })
    }

   req.user=decoded
   next()
}

module.exports=userAuth
