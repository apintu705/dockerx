const express = require('express');
const router=express.Router();
const {createsong,getallsongs}=require("../controllers/songscontroller")

router.post("/newsong",createsong)
router.get("/allsongs",getallsongs)




module.exports=router;