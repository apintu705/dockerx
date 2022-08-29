const express=require('express');
const {cteateArtist,getAllArtist} = require('../controllers/artistcontroller')
const router=express.Router();

router.post("/createartist",cteateArtist)
router.get("/getallartist",getAllArtist)

module.exports=router;