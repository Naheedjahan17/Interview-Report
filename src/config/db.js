const mongoose=require('mongoose')

async function connectDb() {

    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database is connected succesfully")
    }
    catch(err){
        console.log(err)
    }
    
}

module.exports=connectDb