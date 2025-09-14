
require('dotenv').config()
const express=require("express")
const cors=require("cors")
const { checkSchema } = require('express-validator')
const app=express()
app.use(cors())
app.use(express.json())
const configureDB=require('./config/db')
const profileRoutes = require("./app/routes/profileRoutes");
const userLoginValidationSchema = require('./app/validations/user-login-validation')
const usersCltr = require('./app/controllers/users-cltr')

const authenticateUser = require('./app/middlewares/authenticateUser')
const authorizeUser = require('./app/middlewares/authorizeUser')
configureDB()
let port =3000
app.get("/" ,(req,res)=>{
    console.log("connected")
    res.send("Server is working")
})

app.use("/api/profiles", profileRoutes);

app.post('/users/register', usersCltr.register)
app.post('/users/login', checkSchema(userLoginValidationSchema), usersCltr.login)

app.get('/users/account', authenticateUser, usersCltr.account)
app.listen(port,()=>{
    console.log("connected to port",port)
})
