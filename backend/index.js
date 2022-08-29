const express = require('express');
var cors = require('cors');
var cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require("dotenv").config()

const app = express();
app.use(cors());
app.use(express.json());


const authcontrol=require("./src/routes/authroutes")
const atristControl=require("./src/routes/artistroutes")
const songsControl=require("./src/routes/songsroute")


const port=process.env.PORT || 8080;
mongoose.connect(process.env.MONGODB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).
    then(()=>app.listen(port,()=>{
      console.log(`listening on port ${port}`)
    })).catch((err)=>{console.log(err)});

app.use("/auth",authcontrol)
app.use("/artist",atristControl)
app.use("/songs",songsControl)