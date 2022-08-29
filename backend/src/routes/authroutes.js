const express=require('express');
const { registeruser,loginuser } = require('../controllers/usercontroller');
const router=express.Router();

router.post("/register",registeruser)
router.post("/login",loginuser)

module.exports=router;