const mongoose=require('mongoose')


const userModelSchema=new mongoose.Schema({
    username:{
        type:String,
        require:[true,"username is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]

    }
},{
    timestamps:true
})

const userModel=mongoose.model("user",userModelSchema)

module.exports=userModel