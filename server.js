require('dotenv').config()
const express = require('express')
//const router = express.Router()
const path = require('path')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')

//const initiatorRouter =require("./routes/initiator-router");

const app = express()
const PORT = process.env.PORT || 3600

console.log(process.env.NODE_ENV)

app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
//app.use('/', express.static(path.join(__dirname,'public')))
app.use("/auth", require("./routes/auth-router"));
app.use("/initiator", require("./routes/initiator-router"));
app.use("/project", require("./routes/project-router"));
app.use("/request", require("./routes/request-router"));
app.use("/user", require("./routes/user-router"));
app.use("/opinion", require("./routes/opinion-router"));
app.use("/city", require("./routes/city-router"));
app.use("/status", require("./routes/status-router"));

// app.use("/status", require("./routes/status-router"));

 //app.use('/', require('./routes/root'))

app.all('*',(req,res)=>{
    res.status(404)
    // if(req.accepts('html')){
    //     res.sendFile(path.join(__dirname,'view','404.html'))
    // } 
    // else 
    if(req.accepts('json')){
        res.json({message: '404 Not Found'})
    } 
    else{
        res.type('txt').send('404 Not Found')
    }
})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
