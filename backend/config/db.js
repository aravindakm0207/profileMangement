const mongoose= require("mongoose")
const configureDB=async(e)=>{
    try{
        const db=await mongoose.connect(process.env.mongodb_url)
        console.log("connected to db")

    }
    catch(err){
        console.log(err)
    }
}

module.exports=configureDB