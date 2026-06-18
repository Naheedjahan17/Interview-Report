const userModel=require('../models/user.model')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const blacklistmodel = require('../models/blacklist.model')


async function registerController(req,res){
    const {username,email,password}=req.body

    if(!username||!email||!password){
        return res.status(400).json({
            message:"please provide all details"
        })

    }

    const isExists=await userModel.findOne({
        $or:[{username},{email}]
    })
    if (isExists){
        return res.status(400).json({
            message:"username or email already exists please change"
        })
    }

    const hash=await bcrypt.hash(password,10)

    const user=await userModel.create({
        username:username,
        email:email,
        password:hash
    })

    const token=jwt.sign({
        id:user._id,
        username:user.username
    },process.env.JWT_SECRETKEY)

    res.cookie("token",token)

    res.status(201).json({
        message:"user has been created succesfully",
        user
    })

}
async function loginController(req,res){
    const {email,password}=req.body
    const user=await userModel.findOne({
        email
    })

    if(!user){
        return res.status(401).json({
            message:"email is not existed"
        })
    }

    const isCorrect=await bcrypt.compare(password,user.password)

    if(!isCorrect){
        return res.status(401).json({
            message:"incorrect password"
        })
    }

    const token=jwt.sign({
        id:user._id,
        username:user.username
    },process.env.JWT_SECRETKEY)

    res.cookie("token",token)
    res.status(200).json({
        message:"user Details fechted succesfully",
        user
    })
}

async function getme(req,res){
    const id=req.user.id

    const user=await userModel.findOne({
        _id:id
    })

    res.status(200).json({
        message:"user fecthed succesfully",
        user
    })

}
async function logout(req,res){
    const token=req.cookies.token

    if(token){
        await blacklistmodel.create({token})
    }
    res.clearCookie("token")

    res.status(200).json({
        message:"user has been logged out succesfully"
    })

}


module.exports={registerController,loginController,getme,logout}