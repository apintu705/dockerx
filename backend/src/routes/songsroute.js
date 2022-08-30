const express = require('express');
const router=express.Router();
const {createsong,getallsongs, ratingsong,searchsong}=require("../controllers/songscontroller")

router.post("/newsong",createsong)
router.get("/allsongs",getallsongs)
router.put("/review/:id",ratingsong)
router.get("/new",searchsong)




module.exports=router;